new Chart(document.getElementById("skills"), {
    type: 'radar',
    data: {
        labels: ['Java', 'C/C++', 'Arduino', 'Python','Procrastination', 'HTML', 'CSS', 'C#', 'Motivation', 'Robotics', 'Node.JS'],
        datasets: [{
            label: "Power",
            backgroundColor: "rgba(0, 183, 195,0.2)",
            borderColor: "#00B7C3",
            fill: true,
            pointBackgroundColor: "#038387",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: ['#007396', '#649ad2', '#62AEB2', '#ffde57', '#CFD8DC', '#e34f26', '#2162af', '#a078db', '#FFEB3B', '#7f8a99', '#699f63'],
            pointHoverBorderColor: "#263238",
            data: [80, 77, 85, 72, 7, 70, 65, 75, 90, 85, 45]
        }]
    },
    options: {
        scale: {
            responsive: true,
            ticks: {min: 0, max: 100},
            lineArc: false,
            pointLabels: {fontSize: 14},
        },
        layout: {
          padding: {
              left: 7,
              right: 7
          }
        },
        scaleFontSize: 0,
        legend: {display: false},
    }
});
