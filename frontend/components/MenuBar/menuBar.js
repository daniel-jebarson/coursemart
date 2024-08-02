'use client'
import React from 'react'
import styles from './menubar.module.css'
import Link from 'next/link'

function MenuBar() {

    var softwareCourses = [
        {
          "id": 1,
          "label": "Java",
          "link": "https://www.example.com/java_programming"
        },
        {
          "id": 2,
          "label": "Python",
          "link": "https://www.example.com/python_data_science"
        },
        {
          "id": 3,
          "label": "ML-Python",
          "link": "https://www.example.com/machine_learning_python"
        },
        {
          "id": 4,
          "label": "JavaScript",
          "link": "https://www.example.com/web_development_javascript"
        },
        {
          "id": 5,
          "label": "AWS",
          "link": "https://www.example.com/cloud_computing_aws"
        },
        {
          "id": 6,
          "label": "Selenium",
          "link": "https://www.example.com/software_testing_selenium"
        },
        {
          "id": 7,
          "label": "DotNet",
          "link": "https://www.example.com/dotnet"
        }
      ];

      var compitativeCourses = [
        {
          "id": 1,
          "label": "IBPS",
          "link": "https://www.example.com/java_programming"
        },
        {
          "id": 2,
          "label": "Civil services / UPSC",
          "link": "https://www.example.com/python_data_science"
        },
        {
          "id": 3,
          "label": "Banking",
          "link": "https://www.example.com/machine_learning_python"
        },
        {
          "id": 4,
          "label": "DSC / TET",
          "link": "https://www.example.com/web_development_javascript"
        },
        {
          "id": 5,
          "label": "IES",
          "link": "https://www.example.com/cloud_computing_aws"
        },
        {
          "id": 6,
          "label": "Group 2",
          "link": "https://www.example.com/software_testing_selenium"
        },
        {
          "id": 7,
          "label": "RRB",
          "link": "https://www.example.com/dotnet"
        },
        {
          "id": 8,
          "label": "ARMY",
          "link": "https://www.example.com/dotnet"
        },
        {
            "id": 9,
            "label": "GATE",
            "link": "https://www.example.com/dotnet"
          },
          {
            "id": 10,
            "label": "CAT",
            "link": "https://www.example.com/dotnet"
          }
      ];

  return (
    <div className={styles.menubar}>
        <div className={styles.menublock}>
            <h3>Software Courses</h3>
            <ul>
            {softwareCourses.map((course) => 
                <li>
                    <Link href={course.link}>{course.label}</Link>
                </li>
            )}
            </ul>
        </div>
        <div className={styles.menublock}>
            <h3>Compitative Courses</h3>
            <ul>
            {compitativeCourses.map((course) => 
                <li>
                    <Link href={course.link}>{course.label}</Link>
                </li>
            )}
            </ul>
        </div>
    </div>
  )
}

export default MenuBar