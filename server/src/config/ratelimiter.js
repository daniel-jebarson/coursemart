const rateLimit = require("express-rate-limit");

const getRemainingTimeInSeconds = (resetTime) => {
  const now = Date.now();
  const resetTimestamp = new Date(resetTime).getTime();
  const remainingMillis = resetTimestamp - now;

  // Calculate remaining time in seconds
  return Math.max(Math.floor(remainingMillis / 1000), 0);
};

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 150, // Limit each IP to 150 requests per `windowMs`
  message: "Too many requests from this IP, please try again later.",
  headers: true, // Send rate limit info in the `X-RateLimit-*` headers
  handler: (req, res) => {
    const remainingTimeInSeconds = getRemainingTimeInSeconds(
      req.rateLimit.resetTime
    );
    res.status(429).json({
      name: "RateLimitExceededError",
      msg: "You have exceeded the number of allowed requests. Please try again later.",
      rateLimit: {
        max: req.rateLimit.max, // Max requests
        remaining: req.rateLimit.remaining, // Remaining requests
        resetInSeconds: remainingTimeInSeconds, // Remaining time in seconds
      },
    });
  },
});

module.exports = limiter;
