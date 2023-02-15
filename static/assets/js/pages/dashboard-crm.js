'use strict';
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
    var chart = new ApexCharts(document.querySelector("#transactions"), options);
    chart.render();
})();
// [ transactions ] end
// [ bar-chart ] start
(function () {
    var options = {
        series: [{
            name: "News",
            data: [53, 13, 30, 4]
        }],
        chart: {
            height: 225,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        colors: ['#1de9b6', '#a389d4', '#04a9f5', '#f44236'],
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
                columnWidth: '35%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
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
    var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
    chart.render();
})();
// [ bar-chart ] end
// [ call-chart ] start
(function () {
    var options = {
        chart: {
            type: 'area',
            height: 390,
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#1de9b6"],
        fill: {
            opacity: 1,
            type: 'gradient',
            gradient: {
                shade: 'light',
                gradientToColors: ['#602bb6'],
                shadeIntensity: 0.5,
                type: 'vertical',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            },
        },
        markers: {
            size: 0,
            opacity: 0.9,
            color: "#1de9b6",
            strokeColor: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        stroke: {
            width: 0,
        },
        series: [{
            name: 'series1',
            data: [20, 25, 33, 28, 25, 35, 28]
        }],
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
                        return 'Visite :'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#call-chart"), options);
    chart.render();
})();
// [ call-chart ] end
// [ app-sale ] start
(function () {
    var options = {
        chart: {
            height: 40,
            type: 'line',
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 3,
        },
        series: [{
            name: 'Car',
            data: [85, 65, 140, 110, 180]
        }],
        colors: ['#04a9f5'],
        fill: {
            type: 'solid',
        },
        xaxis: {
            tickPlacement: 'between',
        },
        markers: {
            size: 0,
            colors: '#fff',
            strokeColors: ['#04a9f5'],
            opacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 4,
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#app-sale"), options);
    chart.render();
})();
(function () {
    var options = {
        chart: {
            height: 40,
            type: 'line',
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 3,
        },
        series: [{
            name: 'Car',
            data: [180, 110, 140, 65, 85]
        }],
        colors: ['#f44236'],
        fill: {
            type: 'solid',
        },
        xaxis: {
            tickPlacement: 'between',
        },
        markers: {
            size: 0,
            colors: '#fff',
            strokeColors: ['#f44236'],
            opacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 4,
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#app-sale1"), options);
    chart.render();
})();
(function () {
    var options = {
        chart: {
            height: 40,
            type: 'line',
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 3,
        },
        series: [{
            name: 'Car',
            data: [85, 65, 140, 110, 180]
        }],
        colors: ['#a389d4'],
        fill: {
            type: 'solid',
        },
        xaxis: {
            tickPlacement: 'between',
        },
        markers: {
            size: 0,
            colors: '#fff',
            strokeColors: ['#a389d4'],
            opacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 4,
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#app-sale2"), options);
    chart.render();
})();
(function () {
    var options = {
        chart: {
            height: 40,
            type: 'line',
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 3,
        },
        series: [{
            name: 'Car',
            data: [180, 110, 140, 65, 85]
        }],
        colors: ['#1de9b6'],
        fill: {
            type: 'solid',
        },
        xaxis: {
            tickPlacement: 'between',
        },
        markers: {
            size: 0,
            colors: '#fff',
            strokeColors: ['#1de9b6'],
            opacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 4,
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#app-sale3"), options);
    chart.render();
})();
// [ app-sale ] end