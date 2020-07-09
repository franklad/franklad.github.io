new Chart(document.getElementById("skills"), {
    type: 'radar',
    data: {
        labels:
            [
                'Go',
                'Python',
                'C/C++',
                'C#',
                'Kubernetes',
                'Robotics',
                'AI/ML'
            ],
        datasets: [{
            label: "Power",
            backgroundColor: "rgba(0,183,195,0.16)",
            borderColor: "rgba(0,183,195,0.63)",
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: "#038387",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor:
                [
                    '#00ADD8',
                    '#ffde57',
                    '#9dc1c1',
                    '#7113a7',
                    '#346de5',
                    '#7f8a99',
                    '#699f63'
                ],
            pointHoverBorderColor: "#263238",
            data: [90, 80, 87, 85, 80, 90, 75]
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
