module.exports = (link) => {
  return `   
    <!DOCTYPE html>
    <html lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CourseMart | Verify</title>

      <head>
        <script>
          let countdown = 5;
          function updateTimer() {
            document.getElementById('timer').innerText = countdown;
            countdown--;
            if (countdown < 0) {
              window.location.href = '${link}';
            } else {
              setTimeout(updateTimer, 1000);
            }
          }
          window.onload = updateTimer;
        </script>
        <style>
        html,body {padding: 0;margin: 0;}
        .main {
            background-color: #f1f1f1;
            height: 100vh;
            padding: 40px;
        }
        .block {
            background-color: #fff;
            padding: 40px;
            width: 400px;
            margin: 0 auto;
            font-family: serif;
            text-align: center;
        }
        img {
            margin-bottom: 5px;
            margin-left: -10px;
        }
        </style>

      </head>
<body>
    <div class="main">

    
    <div class="block">
        <img src="https://i.imgur.com/yUpYCFp.png" />
        <h1>Email verified successfully!</h1>
        <p>Redirecting in <span id="timer">5</span> seconds...</p>
        <p>If not redirected, <a href="${link}">click here to redirect</a>.</p>
    </div>
</div>
</body>

    </html>
    `;
};
