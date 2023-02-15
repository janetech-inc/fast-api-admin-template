'use strict';
    setTimeout(function() {
        // [ area-Chart ] Start
        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1000, 400],
                ['2014', 1170, 460],
                ['2015', 660, 1120],
                ['2016', 1030, 540]
            ]);
            var options = {
                vAxis: {
                    minValue: 0
                },
                colors: ['#1de9b6', '#602bb6']
            };
            var chart = new google.visualization.AreaChart(document.getElementById('chart-google-area'));
            chart.draw(data, options);
        }
        // [ area-Chart ] end

        // [ stacking-area-chart ] start
        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawChartStacking);

        function drawChartStacking() {
            var data = google.visualization.arrayToDataTable([
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1000, 400],
                ['2014', 1170, 460],
                ['2015', 660, 1120],
                ['2016', 1030, 540]
            ]);
            var options_stacked = {
                isStacked: true,
                height: 300,
                legend: {
                    position: 'top',
                    maxLines: 3
                },
                vAxis: {
                    minValue: 0
                },
                colors: ['#1de9b6', '#A389D4']
            };
            var chart = new google.visualization.AreaChart(document.getElementById('chart-google-stacking'));
            chart.draw(data, options_stacked);
        }
        // [ stacking-area-chart ] end

        // [ bar-chart ] Start
        google.charts.load('current', {
            packages: ['corechart', 'bar']
        });
        google.charts.setOnLoadCallback(drawStacked);

        function drawStacked() {
            var data = google.visualization.arrayToDataTable([
                ['City', '2010 Population', '2000 Population'],
                ['New York City, NY', 8175000, 8008000],
                ['Los Angeles, CA', 3792000, 3694000],
                ['Chicago, IL', 2695000, 2896000],
                ['Houston, TX', 2099000, 1953000],
                ['Philadelphia, PA', 1526000, 1517000]
            ]);
            var options = {
                title: 'Population of Largest U.S. Cities',
                chartArea: {
                    width: '50%'
                },
                isStacked: true,
                hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                },
                vAxis: {
                    title: 'City'
                },
                colors: ['#A389D4', '#602bb6']
            };
            var chart = new google.visualization.BarChart(document.getElementById('chart-google-bar'));
            chart.draw(data, options);
        }
        // [ bar-chart ] end

        // [ Bubble-chart ] start
        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawSeriesChart);

        function drawSeriesChart() {
            var data = google.visualization.arrayToDataTable([
                ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
                ['CAN', 80.66, 1.67, 'North America', 33739900],
                ['DEU', 79.84, 1.36, 'Europe', 81902307],
                ['DNK', 78.6, 1.84, 'Europe', 5523095],
                ['EGY', 72.73, 2.78, 'Middle East', 79716203],
                ['GBR', 80.05, 2, 'Europe', 61801570],
                ['IRN', 72.49, 1.7, 'Middle East', 73137148],
                ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
                ['ISR', 81.55, 2.96, 'Middle East', 7485600],
                ['RUS', 68.6, 1.54, 'Europe', 141850000],
                ['USA', 78.09, 2.05, 'North America', 307007000]
            ]);
            var options = {
                title: 'Correlation between life expectancy, fertility rate ' +
                    'and population of some world countries (2010)',
                hAxis: {
                    title: 'Life Expectancy'
                },
                vAxis: {
                    title: 'Fertility Rate'
                },
                bubble: {
                    textStyle: {
                        fontSize: 11
                    }
                },
                colors: ['#1de9b6', '#602bb6', '#A389D4']
            };
            var chart = new google.visualization.BubbleChart(document.getElementById('chart-google-bubble'));
            chart.draw(data, options);
        }
        // [ Bubble-chart ] end

        // [ Candlestick-charts ] start
        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawChartCandlestick);

        function drawChartCandlestick() {
            var dataCandlestick = google.visualization.arrayToDataTable([
                ['Mon', 20, 28, 38, 45],
                ['Tue', 31, 38, 55, 66],
                ['Wed', 50, 55, 77, 80],
                ['Thu', 77, 77, 66, 50],
                ['Fri', 68, 66, 22, 15]
                // Treat first row as data as well.
            ], true);
            var optionsCandlestick = {
                legend: 'none',
                colors: ['#602bb6']
            };
            var chart = new google.visualization.CandlestickChart(document.getElementById('chart-google-Candlestick'));
            chart.draw(dataCandlestick, optionsCandlestick);
        }

        // [ Candlestick-charts ] end

        // [ Waterfall-charts ] start
        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawChartWaterfall);

        function drawChartWaterfall() {
            var dataWaterfall = google.visualization.arrayToDataTable([
                ['Mon', 28, 28, 38, 38],
                ['Tue', 38, 38, 55, 55],
                ['Wed', 55, 55, 77, 77],
                ['Thu', 77, 77, 66, 66],
                ['Fri', 66, 66, 22, 22]
                // Treat the first row as data.
            ], true);

            var optionsWaterfall = {
                legend: 'none',
                bar: {
                    groupWidth: '100%'
                }, // Remove space between bars.
                candlestick: {
                    fallingColor: {
                        strokeWidth: 0,
                        fill: '#602bb6'
                    }, // red
                    risingColor: {
                        strokeWidth: 0,
                        fill: '#1de9b6'
                    } // green
                }
            };

            var chart = new google.visualization.CandlestickChart(document.getElementById('chart-google-Waterfall'));
            chart.draw(dataWaterfall, optionsWaterfall);
        }
        // [ Waterfall-charts ] end

        // [ combo-chart ] start
        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawVisualization);

        function drawVisualization() {
            // Some raw data (not necessarily accurate)
            var data = google.visualization.arrayToDataTable([
                ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
                ['2004/05', 165, 938, 522, 998, 450, 614.6],
                ['2005/06', 135, 1120, 599, 1268, 288, 682],
                ['2006/07', 157, 1167, 587, 807, 397, 623],
                ['2007/08', 139, 1110, 615, 968, 215, 609.4],
                ['2008/09', 136, 691, 629, 1026, 366, 569.6]
            ]);

            var options = {
                title: 'Monthly Coffee Production by Country',
                vAxis: {
                    title: 'Cups'
                },
                hAxis: {
                    title: 'Month'
                },
                seriesType: 'bars',
                series: {
                    5: {
                        type: 'line'
                    }
                },
                colors: ['#602bb6', '#1de9b6', '#f44236', '#602bb6', '#A389D4', '#3ebfea']
            };

            var chart = new google.visualization.ComboChart(document.getElementById('chart-google-Combo'));
            chart.draw(data, options);
        }
        // [ combo-chart ] end

        // [ Donut-chart ] Start
        google.charts.load("current", {
            packages: ["corechart"]
        });
        google.charts.setOnLoadCallback(drawChartDonut);

        function drawChartDonut() {
            var dataDonut = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ]);

            var optionsDonut = {
                title: 'My Daily Activities',
                pieHole: 0.4,
                colors: ['#602bb6', '#1de9b6', '#3ebfea', '#A389D4', '#899FD4']
            };

            var chart = new google.visualization.PieChart(document.getElementById('chart-google-Donut'));
            chart.draw(dataDonut, optionsDonut);
        }
        // [ Donut-chart ] end

        // [ Exploading-chart ] start
        google.charts.load("current", {
            packages: ["corechart"]
        });
        google.charts.setOnLoadCallback(drawChartExploading);

        function drawChartExploading() {
            var dataExploading = google.visualization.arrayToDataTable([
                ['Language', 'Speakers (in millions)'],
                ['Assamese', 13],
                ['Bengali', 83],
                ['Bodo', 1.4],
                ['Dogri', 2.3],
                ['Gujarati', 46],
                ['Hindi', 300],
                ['Kannada', 38],
                ['Kashmiri', 5.5],
                ['Konkani', 5],
                ['Maithili', 20],
                ['Malayalam', 33],
                ['Manipuri', 1.5],
                ['Marathi', 72],
                ['Nepali', 2.9],
                ['Oriya', 33]
            ]);
            var optionsExploading = {
                title: 'Language',
                legend: 'none',
                pieSliceText: 'label',
                slices: {
                    4: {
                        offset: 0.2
                    },
                    12: {
                        offset: 0.3
                    },
                    14: {
                        offset: 0.4
                    },
                    15: {
                        offset: 0.5
                    },
                },
                colors: ['#04a9f5', '#1de9b6', '#602bb6', '#FE8A7D', '#A389D4', '#3ebfea']
            };

            var chart = new google.visualization.PieChart(document.getElementById('chart-google-Exploading'));
            chart.draw(dataExploading, optionsExploading);
        }
        // [ Exploading-chart ] end

        // [ Slice-chart ] Start
        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawChartThreshold);

        function drawChartThreshold() {

            var dataThreshold = new google.visualization.DataTable();
            dataThreshold.addColumn('string', 'Pizza');
            dataThreshold.addColumn('number', 'Populartiy');
            dataThreshold.addRows([
                ['Pepperoni', 33],
                ['Hawaiian', 26],
                ['Mushroom', 22],
                ['Sausage', 10], // Below limit.
                ['Anchovies', 9] // Below limit.
            ]);

            var optionsThreshold = {
                title: 'Popularity of Types of Pizza',
                sliceVisibilityThreshold: .2,
                colors: ['#04a9f5', '#1de9b6', '#A389D4', '#899FD4']
            };
            var chart = new google.visualization.PieChart(document.getElementById('chart-google-Threshold'));
            chart.draw(dataThreshold, optionsThreshold);
        }
        // [ Slice-chart ] end
    }, 700);
