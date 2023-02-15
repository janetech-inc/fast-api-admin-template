'use strict';
// [ Stack-age ] start
(function () {
    var options = {
        chart: {
            type: 'bar',
            height: 200,
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
        colors: ['#1de9b6', '#a389d4', '#1de9b6', '#a389d4', '#1de9b6', '#a389d4', ],
        fill: {
            type: 'gradient',
            opacity: 1,
            gradient: {
                shade: 'dark',
                type: 'vertical',
                gradientToColors: ['#602bb6', '#899ed4', '#602bb6', '#899ed4', '#602bb6', '#899ed4', ],
                stops: [0, 100]
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '30%',
                distributed: true,
            }
        },
        series: [{
            data: [30, 35, 40, 30, 32, 38]
        }],
        legend: {
            show: false,
        },
        xaxis: {
            categories: ["<20", "30", "40", "50", "60", ">70"],
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

})();
// [ Stack-age ] end
// [ bar-chart2 ] start
(function () {
    var options = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            }
        },
        series: [ {
            name: 'Followers',
            data: [1120, 1380, 1460, 1590]
        }, {
            name: 'Unfollows',
            data: [30, 50, 60, 140]
        }],

        colors: ['#955df1', '#fc0a7e'],
        fill: {
            type: 'gradient',
            opacity: 1,
            gradient: {
                shade: 'dark',
                type: 'vertical',
                gradientToColors: ['#955df1', '#b32e6e'],
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
            categories: ["October", "November", "December", "January"],
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#bar-chart2"), options);
    chart.render();
})();
// [ bar-chart2 ] end
// [ Statistics-sale ] start
(function () {
    var options = {
        chart: {
            type: 'line',
            height: 245,
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
        colors: ["#fff"],
        fill: {
            type: 'solid',
        },
        plotOptions: {
            bar: {
                columnWidth: '30%',
            }
        },
        series: [{
            data: [45, 30, 55]
        }],
        xaxis: {
            categories: ["2019", "2020", "2021"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#fff"
                }
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
            size: 5,
            colors: '#602bb6',
            strokeColors: '#fff',
            opacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 7,
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

})();
// [ Statistics-sale ] end
// [ transactions ] start
(function () {
    var options = {
        chart: {
            type: 'bar',
            height: 75,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#602bb6"],
        plotOptions: {
            bar: {
                columnWidth: '40%'
            }
        },
        series: [{
            data: [48, 30, 25, 30, 20, 40, 30]
        }],
        xaxis: {
            crosshairs: {
                width: 1
            },
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
                        return 'Amount Spent :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

})();
// [ transactions ] end
// [ transactions1 ] start
(function () {
    var options = {
        chart: {
            type: 'bar',
            height: 45,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#a389d4"],
        plotOptions: {
            bar: {
                columnWidth: '40%'
            }
        },
        series: [{
            data: [48, 30, 25, 30, 20, 40, 30]
        }],
        xaxis: {
            crosshairs: {
                width: 1
            },
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
                        return 'Amount Spent :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

})();
// [ transactions1 ] end
// [ transactions2 ] start
(function () {
    var options = {
        chart: {
            type: 'bar',
            height: 45,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#602bb6"],
        plotOptions: {
            bar: {
                columnWidth: '40%'
            }
        },
        series: [{
            data: [44, 26, 22, 35, 28, 35, 28]
        }],
        xaxis: {
            crosshairs: {
                width: 1
            },
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
                        return 'Amount Spent :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

})();
// [ transactions2 ] end
// [ transactions3 ] start
(function () {
    var options = {
        chart: {
            type: 'bar',
            height: 75,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#602bb6"],
        plotOptions: {
            bar: {
                columnWidth: '40%'
            }
        },
        series: [{
            data: [48, 30, 25, 30, 20, 40, 30]
        }],
        xaxis: {
            crosshairs: {
                width: 1
            },
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
                        return 'Amount Spent :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

})();
// [ transactions3 ] end