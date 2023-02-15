'use strict';

// [ bar-chart ] start
var bar = document.getElementById("chart-bar-1").getContext('2d');
var theme_g1 = bar.createLinearGradient(0, 300, 0, 0);
theme_g1.addColorStop(0, '#1de9b6');
theme_g1.addColorStop(1, '#602bb6 ');
var theme_g2 = bar.createLinearGradient(0, 300, 0, 0);
theme_g2.addColorStop(0, '#899FD4');
theme_g2.addColorStop(1, '#A389D4');
var data1 = {
    labels: [0, 1, 2, 3],
    datasets: [{
        label: "Data 1",
        data: [25, 45, 74, 85],
        borderColor: theme_g1,
        backgroundColor: theme_g1,
        hoverborderColor: theme_g1,
        hoverBackgroundColor: theme_g1,
    }, {
        label: "Data 2",
        data: [30, 52, 65, 65],
        borderColor: theme_g2,
        backgroundColor: theme_g2,
        hoverborderColor: theme_g2,
        hoverBackgroundColor: theme_g2,
    }]
};
var myBarChart = new Chart(bar, {
    type: 'bar',
    data: data1,
    options: {
        barValueSpacing: 20
    }
});
// [ bar-chart ] end

// [ bar-stacked-chart ] start
var bar = document.getElementById("chart-bar-2").getContext('2d');
var theme_g1 = bar.createLinearGradient(0, 300, 0, 0);
theme_g1.addColorStop(0, '#1de9b6');
theme_g1.addColorStop(1, '#602bb6');
var theme_g2 = bar.createLinearGradient(0, 300, 0, 0);
theme_g2.addColorStop(0, '#899FD4');
theme_g2.addColorStop(1, '#A389D4');
var data1 = {
    labels: [0, 1, 2, 3],
    datasets: [{
        label: "Data 1",
        data: [25, 45, 74, 85],
        borderColor: theme_g1,
        backgroundColor: theme_g1,
        hoverborderColor: theme_g1,
        hoverBackgroundColor: theme_g1,
    }, {
        label: "Data 2",
        data: [30, 52, 65, 65],
        borderColor: theme_g2,
        backgroundColor: theme_g2,
        hoverborderColor: theme_g2,
        hoverBackgroundColor: theme_g2,
    }]
};
var myBarChart = new Chart(bar, {
    type: 'bar',
    data: data1,
    options: {
        barValueSpacing: 20,
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
    },
});
// [ bar-stacked-chart ] end

// [ bar-Horizontal-chart ] start
var bar = document.getElementById("chart-bar-3").getContext('2d');
var theme_g1 = bar.createLinearGradient(0, 300, 0, 0);
theme_g1.addColorStop(0, '#1de9b6');
theme_g1.addColorStop(1, '#602bb6');
var theme_g2 = bar.createLinearGradient(0, 300, 0, 0);
theme_g2.addColorStop(0, '#899FD4');
theme_g2.addColorStop(1, '#A389D4');
var data1 = {
    labels: [0, 1, 2, 3],
    datasets: [{
        label: "Data 1",
        data: [25, 45, 74, 85],
        borderColor: theme_g1,
        backgroundColor: theme_g1,
        hoverborderColor: theme_g1,
        hoverBackgroundColor: theme_g1,
    }, {
        label: "Data 2",
        data: [30, 52, 65, 65],
        borderColor: theme_g2,
        backgroundColor: theme_g2,
        hoverborderColor: theme_g2,
        hoverBackgroundColor: theme_g2,
    }]
};
var myBarChart = new Chart(bar, {
    type: 'bar',
    data: data1,
    options: {
        indexAxis: 'y',
        barValueSpacing: 20
    }
});
// [ bar-Horizontal-chart ] end

// [ line-chart ] start
var bar = document.getElementById("chart-line-1").getContext('2d');
var theme_g1 = bar.createLinearGradient(0, 0, 500, 0);
theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.4)');
theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.5)');
var theme_g2 = bar.createLinearGradient(0, 0, 500, 0);
theme_g2.addColorStop(0, '#899FD4');
theme_g2.addColorStop(1, '#A389D4');
var data1 = {
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [{
        label: "D1",
        data: [55, 70, 62, 81, 56, 70, 90],
        fill: false,
        borderWidth: 4,
        lineTension: 0,
        borderDash: [15, 10],
        borderColor: theme_g2,
        backgroundColor: theme_g2,
        hoverborderColor: theme_g2,
        hoverBackgroundColor: theme_g2,
    }, {
        label: "D2",
        data: [85, 55, 70, 50, 75, 45, 60],
        fill: true,
        cubicInterpolationMode: 'monotone',
        borderWidth: 0,
        borderColor: theme_g1,
        backgroundColor: theme_g1,
        hoverborderColor: theme_g1,
        hoverBackgroundColor: theme_g1,
    }, {
        label: "D3",
        data: [50, 75, 80, 70, 85, 80, 70],
        fill: false,
        borderWidth: 4,
        borderColor: "#602bb6",
        backgroundColor: "#602bb6",
        hoverborderColor: "#602bb6",
        hoverBackgroundColor: "#602bb6",
    }]
};
var myBarChart = new Chart(bar, {
    type: 'line',
    data: data1,
    responsive: true,
    options: {
        barValueSpacing: 20,
        maintainAspectRatio: false,
    }
});
// [ line-chart ] end

// [ area-origin-chart ] start
var bar = document.getElementById("chart-area-2").getContext('2d');
var theme_g1 = bar.createLinearGradient(0, 0, 500, 0);
theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.8)');
theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.8)');
var data1 = {
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [{
        label: "D1",
        data: [85, 55, 70, 50, 75, 45, 60],
        borderWidth: 1,
        borderColor: theme_g1,
        backgroundColor: theme_g1,
        hoverborderColor: theme_g1,
        hoverBackgroundColor: theme_g1,
        fill: 'origin',
    }]
};
var myBarChart = new Chart(bar, {
    type: 'line',
    data: data1,
    responsive: true,
    options: {
        barValueSpacing: 20,
        maintainAspectRatio: false,
    }
});
// [ area-origin-chart ] end

// [ area-end-chart ] start
var bar = document.getElementById("chart-area-3").getContext('2d');
var theme_g2 = bar.createLinearGradient(0, 0, 500, 0);
theme_g2.addColorStop(0, 'rgba(137, 159, 212, 0.8)');
theme_g2.addColorStop(1, 'rgba(163, 137, 212, 0.8)');
var data1 = {
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [{
        label: "D1",
        data: [85, 55, 70, 50, 75, 45, 60],
        borderWidth: 1,
        borderColor: theme_g2,
        backgroundColor: theme_g2,
        hoverborderColor: theme_g2,
        hoverBackgroundColor: theme_g2,
        fill: 'end',
    }]
};
var myBarChart = new Chart(bar, {
    type: 'line',
    data: data1,
    responsive: true,
    options: {
        barValueSpacing: 20,
        maintainAspectRatio: false,
    }
});
// [ area-end-chart ] end

// [ area-chart ] Start
var bar = document.getElementById("chart-area-1").getContext('2d');
var theme_g1 = bar.createLinearGradient(0, 0, 500, 0);
theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.6)');
theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.6)');
var theme_g2 = bar.createLinearGradient(0, 0, 500, 0);
theme_g2.addColorStop(0, 'rgba(137, 159, 212, 0.6)');
theme_g2.addColorStop(1, 'rgba(163, 137, 212, 0.6)');
var data1 = {
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [{
        label: "D1",
        data: [45, 60, 45, 80, 60, 80, 45],
        fill: true,
        borderWidth: 4,
        borderColor: theme_g1,
        backgroundColor: theme_g1,
        hoverborderColor: theme_g1,
        hoverBackgroundColor: theme_g1,
    }, {
        label: "D2",
        data: [45, 80, 45, 45, 60, 45, 80],
        fill: true,
        cubicInterpolationMode: 'monotone',
        borderWidth: 0,
        borderColor: "rgba(4, 169, 245, 0.6)",
        backgroundColor: "rgba(4, 169, 245, 0.6)",
        hoverborderColor: "rgba(4, 169, 245, 0.6)",
        hoverBackgroundColor: "rgba(4, 169, 245, 0.6)",
    }, {
        label: "D3",
        data: [83, 45, 60, 45, 45, 55, 45],
        fill: true,
        borderWidth: 4,
        borderColor: theme_g2,
        backgroundColor: theme_g2,
        hoverborderColor: theme_g2,
        hoverBackgroundColor: theme_g2,
    }]
};
var myBarChart = new Chart(bar, {
    type: 'line',
    data: data1,
    responsive: true,
    options: {
        barValueSpacing: 20,
        maintainAspectRatio: false,
    }
});
// [ area-chart ] end

// [ radar-chart1 ] Start
var bar = document.getElementById("chart-radar-1").getContext('2d');
var theme_g1 = bar.createLinearGradient(0, 0, 350, 0);
theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.9)');
theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.9)');
var theme_g2 = bar.createLinearGradient(0, 0, 350, 0);
theme_g2.addColorStop(0, 'rgba(137, 159, 212, 0.9)');
theme_g2.addColorStop(1, 'rgba(163, 137, 212, 0.9)');
var data1 = {
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [{
        label: "D1",
        data: [60, 60, 45, 80, 60, 80, 45],
        fill: true,
        borderWidth: 4,
        borderColor: theme_g1,
        backgroundColor: theme_g1,
        hoverborderColor: theme_g1,
        hoverBackgroundColor: theme_g1,
    }, {
        label: "D2",
        data: [40, 80, 40, 65, 60, 50, 95],
        fill: true,
        cubicInterpolationMode: 'monotone',
        borderWidth: 0,
        borderColor: "rgba(4, 169, 245, 0.9)",
        backgroundColor: "rgba(4, 169, 245, 0.9)",
        hoverborderColor: "rgba(4, 169, 245, 0.9)",
        hoverBackgroundColor: "rgba(4, 169, 245, 0.9)",
    }, {
        label: "D3",
        data: [20, 40, 80, 60, 85, 60, 20],
        fill: true,
        borderWidth: 4,
        borderColor: theme_g2,
        backgroundColor: theme_g2,
        hoverborderColor: theme_g2,
        hoverBackgroundColor: theme_g2,
    }]
};
var myBarChart = new Chart(bar, {
    type: 'radar',
    data: data1,
    responsive: true,
    options: {
        barValueSpacing: 20,
        maintainAspectRatio: false,
    }
});
// [ radar-chart1 ] end

// [ radar-chart2 ] Start
var bar = document.getElementById("chart-radar-2").getContext('2d');
var theme_g1 = bar.createLinearGradient(0, 0, 350, 0);
theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.4)');
theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.4)');
var theme_g2 = bar.createLinearGradient(0, 0, 350, 0);
theme_g2.addColorStop(0, 'rgba(137, 159, 212, 0.4)');
theme_g2.addColorStop(1, 'rgba(163, 137, 212, 0.4)');
var data1 = {
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [{
        label: "D1",
        data: [60, 60, 45, 80, 60, 80, 45],
        fill: true,
        borderWidth: 4,
        borderColor: theme_g1,
        backgroundColor: theme_g1,
        hoverborderColor: theme_g1,
        hoverBackgroundColor: theme_g1,
    }, {
        label: "D2",
        data: [40, 80, 40, 65, 60, 50, 95],
        fill: true,
        cubicInterpolationMode: 'monotone',
        borderWidth: 0,
        borderColor: "rgba(4, 169, 245, 0.4)",
        backgroundColor: "rgba(4, 169, 245, 0.4)",
        hoverborderColor: "rgba(4, 169, 245, 0.4)",
        hoverBackgroundColor: "rgba(4, 169, 245, 0.4)",
    }, {
        label: "D3",
        data: [20, 40, 80, 60, 85, 60, 20],
        fill: true,
        borderWidth: 4,
        borderColor: theme_g2,
        backgroundColor: theme_g2,
        hoverborderColor: theme_g2,
        hoverBackgroundColor: theme_g2,
    }]
};
var BarChart = new Chart(bar, {
    type: 'radar',
    data: data1,
    responsive: true,
    options: {
        barValueSpacing: 20,
        maintainAspectRatio: false,
    }
});
// [ radar-chart2 ] end

// [ radar-chart3 ] start
var bar = document.getElementById("chart-radar-3").getContext('2d');
var theme_g1 = bar.createLinearGradient(0, 0, 350, 0);
theme_g1.addColorStop(0, 'rgb(29, 233, 182)');
theme_g1.addColorStop(1, 'rgb(29, 196, 233)');
var theme_g2 = bar.createLinearGradient(0, 0, 350, 0);
theme_g2.addColorStop(0, 'rgb(137, 159, 212)');
theme_g2.addColorStop(1, 'rgb(163, 137, 212)');
var data1 = {
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [{
        label: "D1",
        data: [60, 60, 45, 80, 60, 80, 45],
        fill: true,
        borderWidth: 4,
        borderColor: theme_g1,
        backgroundColor: "transparent",
        hoverborderColor: theme_g1,
        hoverBackgroundColor: "transparent",
    }, {
        label: "D2",
        data: [40, 80, 40, 65, 60, 50, 95],
        fill: true,
        cubicInterpolationMode: 'monotone',
        borderWidth: 0,
        borderColor: "rgb(4, 169, 245)",
        backgroundColor: "transparent",
        hoverborderColor: "rgb(4, 169, 245)",
        hoverBackgroundColor: "transparent",
    }, {
        label: "D3",
        data: [20, 40, 80, 60, 85, 60, 20],
        fill: true,
        borderWidth: 4,
        borderColor: theme_g2,
        backgroundColor: "transparent",
        hoverborderColor: theme_g2,
        hoverBackgroundColor: "transparent",
    }]
};
var BarChart = new Chart(bar, {
    type: 'radar',
    data: data1,
    responsive: true,
    options: {
        barValueSpacing: 20,
        maintainAspectRatio: false,
    }
});
// [ radar-chart3 ] end

// [ pie-chart ] start
var bar = document.getElementById("chart-pie-1").getContext('2d');
var theme_g1 = bar.createLinearGradient(100, 0, 300, 0);
theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.9)');
theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.9)');
var theme_g2 = bar.createLinearGradient(100, 0, 300, 0);
theme_g2.addColorStop(0, 'rgba(137, 159, 212, 0.9)');
theme_g2.addColorStop(1, 'rgba(163, 137, 212, 0.9)');
var data4 = {
    labels: [
        "Data 1",
        "Data 2",
        "Data 3"
    ],
    datasets: [{
        data: [30, 30, 40],
        backgroundColor: [
            theme_g1,
            theme_g2,
            "#602bb6"
        ],
        hoverBackgroundColor: [
            theme_g1,
            theme_g2,
            "#602bb6"
        ]
    }]
};
var myPieChart = new Chart(bar, {
    type: 'pie',
    data: data4,
    responsive: true,
    options: {
        maintainAspectRatio: false,
    }
});
// [ pie-chart ] end

// [ Donut-chart ] start
var bar = document.getElementById("chart-donut-1").getContext('2d');
var theme_g1 = bar.createLinearGradient(100, 0, 300, 0);
theme_g1.addColorStop(0, 'rgba(29, 233, 182, 0.9)');
theme_g1.addColorStop(1, 'rgba(29, 196, 233, 0.9)');
var theme_g2 = bar.createLinearGradient(100, 0, 300, 0);
theme_g2.addColorStop(0, 'rgba(137, 159, 212, 0.9)');
theme_g2.addColorStop(1, 'rgba(163, 137, 212, 0.9)');
var data4 = {
    labels: [
        "Data 1",
        "Data 2",
        "Data 3"
    ],
    datasets: [{
        data: [30, 30, 40],
        backgroundColor: [
            theme_g1,
            theme_g2,
            "#602bb6"
        ],
        hoverBackgroundColor: [
            theme_g1,
            theme_g2,
            "#602bb6"
        ]
    }]
};
var myPieChart = new Chart(bar, {
    type: 'doughnut',
    data: data4,
    responsive: true,
    options: {
        maintainAspectRatio: false,
    }
});
// [ Donut-chart ] end