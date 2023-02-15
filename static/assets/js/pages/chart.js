'use strict';
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        floatchart()
    }, 700);
});

function floatchart() {
    // [ Comments chart ] start
    (function () {
        var options = {
            chart: {
                type: 'area',
                height: 190,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#04a9f5"],
            fill: {
                type: 'solid',
                opacity: 1,
            },
            markers: {
                size: 0,
                opacity: 0.9,
                colors: "#fff",
                strokeColor: "#04a9f5",
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            stroke: {
                width: 3,
            },
            series: [{
                name: 'series1',
                data: [30, 55, 80, 60, 100, 70]
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
                            return 'Comments :'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#command-card-chart1"), options);
        chart.render();
    })();
    // [ Comments chart ] end
    // [ chart-sale ] start
    (function () {
        var options = {
            series: [85],
            chart: {
                height: 220,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    startAngle: 0,
                    endAngle: 360,
                    hollow: {
                        margin: 0,
                        size: '70%',
                        background: '#fff',
                        image: undefined,
                        imageOffsetX: 0,
                        imageOffsetY: 0,
                        position: 'front',
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            show: false,
                        },
                        value: {
                            formatter: function (val) {
                                return parseInt(val);
                            },
                            color: '#111',
                            fontSize: '36px',
                            show: true,
                        }
                    }
                }
            },
            colors: ["#602bb6"],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#1de9b6'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#chart-sale"), options);
        chart.render();
    })();
    // [ chart-sale ] end
    // [ Stack-bar ] start
    (function () {
        var options = {
            chart: {
                type: 'bar',
                height: 260,
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
            colors: ["#1de9b6"],
            fill: {
                type: 'gradient',
                opacity: 1,
                gradient: {
                    shade: 'dark',
                    type: 'vertical',
                    gradientToColors: ['#602bb6'],
                    stops: [0, 100]
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '30%',
                }
            },
            series: [{
                data: [10, 13, 20, 28, 25, 4]
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
        var chart = new ApexCharts(document.querySelector("#Stack-bar"), options);
        chart.render();
    })();
    // [ Stack-bar ] end
    // [ line-area2 ] start
    (function () {
        var options = {
            chart: {
                height: 320,
                type: 'line',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2,
            },
            series: [{
                name: 'Market Days',
                data: [5, 30, 25, 55, 45, 65, 60, 105, 80, 110, 120, 150]
            }, {
                name: 'Market Days ALL',
                data: [80, 95, 87, 155, 140, 147, 130, 180, 160, 175, 165, 200]
            }],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            colors: ['#1de9b6', '#10adf5'],
            fill: {
                type: 'solid',
            },
            markers: {
                size: 5,
                colors: ['#1de9b6', '#10adf5'],
                opacity: 0.9,
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            grid: {
                borderColor: '#e2e5e885',
            },
        };
        var chart = new ApexCharts(document.querySelector("#line-area2"), options);
        chart.render();
    })();
    // [ line-area2 ] end
    // [ Chartline ] start
    (function () {
        var options = {
            chart: {
                type: 'line',
                height: 210,
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
                colors: '#fff',
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
        var chart = new ApexCharts(document.querySelector("#Chartline"), options);
        chart.render();
    })();
    // [ Chartline ] end
    // [ bar-chart ] start
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
    // [ line-chart1 ] start
    (function () {
        var options = {
            chart: {
                height: 350,
                type: 'line',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            series: [{
                name: 'Market Days',
                data: [65, 105, 145, 105, 145, 185]
            }, {
                name: 'Market Days2',
                data: [125, 80, 30, 70, 110, 150]
            }, {
                name: 'Market Days ALL',
                data: [175, 190, 160, 190, 140, 100]
            }],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
            },
            colors: ['#1de9b6', '#10adf5', '#fdda08'],
            fill: {
                type: 'solid',
            },
            markers: {
                size: 5,
                colors: ['#1de9b6', '#10adf5', '#fdda08'],
                opacity: 0.9,
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            grid: {
                borderColor: '#e2e5e885',
            },
        };
        var chart = new ApexCharts(document.querySelector("#line-chart1"), options);
        chart.render();
    })();
    // [ line-chart1 ] end
    // [ line-chart2 ] start
    (function () {
        var options = {
            chart: {
                height: 250,
                type: 'line',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            series: [{
                name: 'Car',
                data: [160, 140, 150, 95, 130, 55, 75, 65, 140, 120, 110, 180]
            }, {
                name: 'Bike',
                data: [85, 95, 90, 125, 105, 120, 110, 140, 100, 95, 130, 80]
            }],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            colors: ['#a389d4', '#1ddcc8'],
            fill: {
                type: 'solid',
            },
            markers: {
                size: 5,
                colors: '#fff',
                strokeColors: ['#a389d4', '#1ddcc8'],
                opacity: 0.9,
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            grid: {
                borderColor: '#e2e5e885',
            },
        };
        var chart = new ApexCharts(document.querySelector("#line-chart2"), options);
        chart.render();
    })();
    // [ line-chart2 ] end
    // [ Widget-line-chart ] start
    (function () {
        var options = {
            chart: {
                type: 'line',
                height: 210,
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
                colors: '#fff',
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
        var chart = new ApexCharts(document.querySelector("#Widget-line-chart"), options);
        chart.render();
    })();
    // [ Widget-line-chart ] end
    // [ Widget-line-chart1 ] start
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
            colors: ["#1de9b6", "#f4c22b", "#a389d4", "#04a9f5"],
            labels: ["page done", "page progress", "page outstanding", "page started"],
            legend: {
                show: false
            }
        }
        var chart = new ApexCharts(document.querySelector("#chart-percent"), options);
        chart.render();
    })();
    // [ chart-percent ] end
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
            series: [{
                name: 'Net Profit',
                data: [20, 40, 20, 45]
            }, {
                name: 'Revenue',
                data: [40, 70, 30, 60]
            }, {
                name: 'Free Cash Flow',
                data: [30, 50, 40, 40]
            }],
            colors: ['#1de9b6', '#a389d4', '#04a9f5'],
            fill: {
                type: 'gradient',
                opacity: 1,
                gradient: {
                    shade: 'dark',
                    type: 'vertical',
                    gradientToColors: ['#602bb6', '#899ed4', '#049df5'],
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
                categories: ["2014", "2015", "2016", "2017"],
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
    // [ device-chart ] start
    (function () {
        var options = {
            chart: {
                height: 220,
                type: 'pie',
            },
            dataLabels: {
                enabled: false,
            },
            series: [23, 35, 28],
            colors: ["#1de9b6", "#a389d4", "#04a9f5"],
            labels: ["Desktop", "Mobile", "Tablet"],
            legend: {
                show: false
            }
        }
        var chart = new ApexCharts(document.querySelector("#device-chart"), options);
        chart.render();
    })();
    // [ device-chart ] end
    // [ chart-percent1 ] start
    (function () {
        var options = {
            chart: {
                height: 180,
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
            series: [23, 35, 28],
            colors: ["#1de9b6", "#a389d4", "#04a9f5"],
            labels: ["Desktop", "Mobile", "Tablet"],
            legend: {
                show: false
            }
        }
        var chart = new ApexCharts(document.querySelector("#chart-percent1"), options);
        chart.render();
    })();
    // [ chart-percent1 ] end
    // [ bar-chart3 ] start
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
    // [ bar-chart3 ] end
    // [ processed-bar ] start
    (function () {
        var options = {
            chart: {
                type: 'area',
                height: 200,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            color: "#602bb6",
            fill: {
                type: 'gradient',
                gradient: {
                    inverseColors: true,
                    opacityFrom: 0.5,
                    opacityTo: 0.7,
                }
            },
            markers: {
                size: 0,
                opacity: 0.9,
                colors: "#fff",
                strokeColor: "#04a9f5",
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            stroke: {
                width: 0,
                curve: 'straight'
            },
            series: [{
                name: 'series1',
                data: [10, 45, 35, 55, 40]
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
                            return 'Sale :'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#processed-bar"), options);
        chart.render();
    })();
    // [ processed-bar ] end
    // [ chart-statistics ] start
    (function () {
        var options = {
            chart: {
                height: 200,
                type: 'donut',
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '90%',
                    }
                }
            },
            series: [24.7, 36.3, 23.5, 15.5],
            colors: ["#1de9b6", "#a389d4", "#04a9f5", "#ecedef"],
            labels: ["page  Views", "page Clicks", "page Likes", "pages"],
            legend: {
                show: false
            }
        }
        var chart = new ApexCharts(document.querySelector("#chart-statistics"), options);
        chart.render();
    })();
    // [ chart-statistics ] end
    // [ chart-activity ] start
    (function () {
        var options = {
            chart: {
                height: 200,
                type: 'donut',
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '90%',
                    }
                }
            },
            series: [550, 237],
            colors: ["#1de9b6", "#ecedef"],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'vertical',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#1de9b6', "#ecedef"],
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            labels: ["MAX", "MIN"],
            legend: {
                show: false
            }
        }
        var chart = new ApexCharts(document.querySelector("#chart-activity"), options);
        chart.render();
    })();
    // [ chart-activity ] end
    // [ Earnings-chart ] start
    (function () {
        var options = {
            chart: {
                type: 'area',
                height: 230,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#602bb6"],
            fill: {
                colors: undefined,
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: "vertical",
                    gradientToColors: ["#A389D4"],
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 70, 100],
                    colorStops: []
                }
            },
            stroke: {
                width: 3,
            },
            series: [{
                name: 'series1',
                data: [30, 55, 80, 60, 70, 70, 110, 90, 130]
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
                            return 'Statistics :'
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#Earnings-chart"), options);
        chart.render();
    })();
    // [ Earnings-chart ] end
    // [ sales-render ] start
    (function () {
        var options = {
            series: [{
                name: 'Series 1',
                data: [100, 60, 100, 100, 100, 80],
            }, {
                name: 'Series 2',
                data: [80, 90, 80, 110, 40, 115],
            }],
            chart: {
                height: 230,
                type: 'radar',
                toolbar: {
                    show: false,
                }
            },
            stroke: {
                width: 2
            },
            colors: ["#a389d4", "#1de9b6"],
            fill: {
                opacity: 1,
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    gradientToColors: ['#899ed4', '#602bb6'],
                    shadeIntensity: 0.5,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                },
            },
            markers: {
                size: 0
            },
            legend: {
                show: false,
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
            }
        };
        var chart = new ApexCharts(document.querySelector("#sales-render"), options);
        chart.render();
    })();
    // [ sales-render ] end
    // [ webchart ] start
    (function () {
        var options = {
            series: [{
                name: 'Series 1',
                data: [15, 13, 11.1, 15],
            }],
            chart: {
                height: 270,
                type: 'radar',
                toolbar: {
                    show: false,
                }
            },
            stroke: {
                width: 2
            },
            colors: ["#1de9b6"],
            fill: {
                opacity: 1,
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    gradientToColors: ['#602bb6'],
                    shadeIntensity: 0.5,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                },
            },
            markers: {
                size: 0
            },
            legend: {
                show: false,
            },
            xaxis: {
                categories: ["Sales", "Visits", "Views", "Clicks"]
            }
        };
        var chart = new ApexCharts(document.querySelector("#webchart"), options);
        chart.render();
    })();
    // [ webchart ] end
    // [ Statistics-line ] start
    (function () {
        var options = {
            chart: {
                type: 'line',
                height: 420,
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
                data: [10, 60, 45, 72]
            }],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr"],
                tickPlacement: 'between',
            },
            grid: {
                padding: {
                    bottom: 0,
                    left: 10,
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
        var chart = new ApexCharts(document.querySelector("#Statistics-line"), options);
        chart.render();
    })();
    // [ Statistics-line ] end
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
        var chart = new ApexCharts(document.querySelector("#transactions1"), options);
        chart.render();
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
        var chart = new ApexCharts(document.querySelector("#transactions2"), options);
        chart.render();
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
        var chart = new ApexCharts(document.querySelector("#transactions3"), options);
        chart.render();
    })();
    // [ transactions3 ] end
    // [ sitevisite-chart ] start
    (function () {
        var options = {
            chart: {
                type: 'area',
                height: 170,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#fff"],
            fill: {
                type: 'gradient'
            },
            markers: {
                size: 0,
                opacity: 0.9,
                color: "#ffffff",
                strokeColor: "#a389d4",
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            stroke: {
                width: 5,
                color: '#ffffff'
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
        var chart = new ApexCharts(document.querySelector("#sitevisite-chart"), options);
        chart.render();
    })();
    // [ sitevisite-chart ] end
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
                colors: '#04a9f5',
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
        var chart = new ApexCharts(document.querySelector("#Statistics-sale"), options);
        chart.render();
    })();
    // [ Statistics-sale ] end
    // [ power-card-chart ] start
    (function () {
        var options = {
            chart: {
                height: 100,
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
                curve: 'smooth',
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
        var chart = new ApexCharts(document.querySelector("#power-card-chart"), options);
        chart.render();
    })();
    // [ power-card-chart ] end
    // [ world-low ] start
    (function () {
        var map = new jsVectorMap({
            selector: "#world-low",
            map: "world",
            markersSelectable: true,
            markers: [{
                coords: [-14.2350, -51.9253]
            },
            {
                coords: [35.8617, 104.1954]
            },
            {
                coords: [61, 105]
            },
            {
                coords: [26.8206, 30.8025]
            }
            ],
            markerStyle: {
                initial: {
                    fill: '#323232',

                },
                hover: {
                    fill: '#04a9f5',
                },
            },
            markerLabelStyle: {
                initial: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    fill: '#323232',
                },
            },
        });
    })();
    // [ world-low ] end
    // [ sadball & happyball ] start
    (function () {
        var options = {
            chart: {
                height: 110,
                type: 'donut',
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '70%',
                    }
                }
            },
            series: [26, 74],
            colors: ["#f44236", "#ecedef"],
            labels: ["NEGATIVE", "All"],
            legend: {
                show: false
            }
        }
        var chart = new ApexCharts(document.querySelector("#sadball"), options);
        chart.render();
        var options1 = {
            chart: {
                height: 110,
                type: 'donut',
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '70%',
                    }
                }
            },
            series: [74, 26],
            colors: ["#1de9b6", "#ecedef"],
            labels: ["POSITIVE", "All"],
            legend: {
                show: false
            }
        }
        var chart1 = new ApexCharts(document.querySelector("#happyball"), options1);
        chart1.render();
    })();
    // [ sadball & happyball ] end
    // [ call-chart ] start
    (function () {
        var options = {
            chart: {
                type: 'area',
                height: 320,
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
    // [ Stack-age ] start
    (function () {
        var options = {
            chart: {
                type: 'bar',
                height: 260,
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
            colors: ['#1de9b6', '#a389d4', '#1de9b6', '#a389d4', '#1de9b6', '#a389d4',],
            fill: {
                type: 'gradient',
                opacity: 1,
                gradient: {
                    shade: 'dark',
                    type: 'vertical',
                    gradientToColors: ['#602bb6', '#899ed4', '#1de9b6', '#a389d4', '#1de9b6', '#a389d4',],
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
        var chart = new ApexCharts(document.querySelector("#Stack-age"), options);
        chart.render();
    })();
    // [ Stack-age ] end
}