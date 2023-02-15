'use strict';
// [ bar-chart ] start
(function () {
    var options = {
        chart: {
            type: 'bar',
            height: 255,
            toolbar: {
                show: false,
            }
        },
        series: [{
            name: 'Net Profit',
            data: [40, 70, 30, 60]
        }, {
            name: 'Revenue',
            data: [20, 40, 20, 45]
        }],
        colors: ['#1de9b6', '#a389d4'],
        fill: {
            type: 'gradient',
            opacity: 1,
            gradient: {
                shade: 'dark',
                type: 'vertical',
                gradientToColors: ['#602bb6', '#899ed4'],
                stops: [0, 100]
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ["Q1", "Q2", "Q3", "Q4"],
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#bar-chart3"), options);
    chart.render();
})();
// [  bar-chart ] end

// [ Widget-line-chart1 ] starts
(function () {
    var options = {
        chart: {
            type: 'line',
            height: 250,
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#23d3d7"],
        fill: {
            type: 'solid',
        },
        plotOptions: {
            bar: {
                columnWidth: '30%',
            }
        },
        series: [{
            data: [10, 60, 45, 72, 45, 86]
        }],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                width: 0
            },
            labels: {
                show: false,
            },
        },
        grid: {
            padding: {
                bottom: 0,
                left: 10,
            },
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        markers: {
            size: 2,
            colors: '#23d3d7',
            strokeColors: '#23d3d7',
            opacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 5,
            }
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return 'Statistics :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#Widget-line-chart1"), options);
    chart.render();
})();
// [ Widget-line-chart1 ] end