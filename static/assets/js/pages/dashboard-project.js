'use strict';
// [ bar-chart1 ] start
(function () {
    var options = {
        series: [{
            name: "News",
            data: [53, 13, 30, 4]
        }],
        chart: {
            height: 250,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        colors: ['#1de9b6', '#a389d4', '#602bb6', '#f44236'],
        fill: {
            type: 'gradient',
            opacity: 1,
            gradient: {
                shade: 'dark',
                type: 'vertical',
                gradientToColors: ['#602bb6', '#899ed4', '#049df5', '#f48f36'],
                stops: [0, 100]
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '65%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: true,
        },
        legend: {
            show: false
        },
        grid: {
            show: false,
        },
        yaxis: {
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            categories: [
                'Sport',
                'Music',
                'Travel',
                'News',
            ],
        }
    };
    var chart = new ApexCharts(document.querySelector("#bar-chart1"), options);
    chart.render();
})();
// [ bar-chart1 ] end
// [ chart-percent ] start
(function () {
    var options = {
        chart: {
            height: 250,
            type: 'donut',
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '85%',
                }
            }
        },
        series: [23, 14, 35, 28],
        colors: ["#1de9b6", "#f4c22b", "#a389d4", "#602bb6"],
        labels: ["page done", "page progress", "page outstanding", "page started"],
        legend: {
            show: false
        }
    }
    var chart = new ApexCharts(document.querySelector("#chart-percent"), options);
    chart.render();
})();
// [ chart-percent ] end