/*
Template Name: Tailwick - Admin & Dashboard Template
Author: Themesdesign
Version: 1.1.0
Website: https://themesdesign.in/
Contact: Themesdesign@gmail.com
File: charts apex bar init Js File
*/



import ApexCharts from "apexcharts";

import moment from "moment"

window.moment = moment


function oklchToHex(oklch) {
    // Match OKLCH components like oklch(0.75 0.25 120)
    const match = oklch.match(/oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)/i);
    if (!match) {
        throw new Error("Invalid OKLCH format. Expected: oklch(L C H)");
    }

    let [_, l, c, h] = match.map(Number);

    // Convert OKLCH → sRGB (approximation)
    // Step 1: Convert OKLCH → OKLab
    const a = c * Math.cos((h * Math.PI) / 180);
    const b = c * Math.sin((h * Math.PI) / 180);

    // Step 2: OKLab → Linear RGB
    let L = l;
    const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
    const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
    const s_ = L - 0.0894841775 * a - 1.291485548 * b;

    const l3 = l_ ** 3;
    const m3 = m_ ** 3;
    const s3 = s_ ** 3;

    const r = 4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
    const g = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
    const b2 = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3;

    // Step 3: Clamp values and convert to 0–255
    const clamp = (x) => Math.max(0, Math.min(1, x));
    const R = Math.round(clamp(r) * 255);
    const G = Math.round(clamp(g) * 255);
    const B = Math.round(clamp(b2) * 255);

    // Step 4: Convert to HEX
    const toHex = (v) => v.toString(16).padStart(2, "0").toUpperCase();
    return `#${toHex(R)}${toHex(G)}${toHex(B)}`;
}


// common function to get charts colors from class
function getChartColorsArray(chartId) {
    const chartElement = document.getElementById(chartId);
    if (chartElement) {
        const colors = chartElement.dataset.chartColors;
        if (colors) {
            const parsedColors = JSON.parse(colors);
            const mappedColors = parsedColors.map((value) => {
                const newValue = value.replace(/\s/g, "");
                if (!newValue.includes("#")) {
                    const element = document.querySelector(newValue);
                    if (element) {
                        const styles = window.getComputedStyle(element);
                        const backgroundColor = styles.backgroundColor;
                        return backgroundColor || newValue;
                    } else {
                        const divElement = document.createElement('div');
                        divElement.className = newValue;
                        document.body.appendChild(divElement);

                        const styles = window.getComputedStyle(divElement);
                        const backgroundColor = styles.backgroundColor.includes("#") ? styles.backgroundColor : oklchToHex(styles.backgroundColor);
                        return backgroundColor || newValue;
                    }
                } else {
                    return newValue;
                }
            });
            return mappedColors;
        } else {
            console.warn(`chart-colors attribute not found on: ${chartId}`);
        }
    }
}

//Line Column
var options = {
    series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    stroke: {
        width: [0, 4]
    },
    colors: getChartColorsArray("lineColumnChart"),
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
        type: 'datetime'
    },
    yaxis: [{
        title: {
            text: 'Website Blog',
        },

    }, {
        opposite: true,
        title: {
            text: 'Social Media'
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#lineColumnChart"), options);
chart.render();

//Multiple Y-Axis
var options = {
    series: [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
    }],
    chart: {
        height: 350,
        type: 'line',
        stacked: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1, 1, 4]
    },
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    colors: getChartColorsArray("multipleYaxisChart"),
    yaxis: [
        {
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: getChartColorsArray("multipleYaxisChart")[0]
            },
            title: {
                text: "Income (thousand crores)",
            },
            tooltip: {
                enabled: true
            }
        },
        {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: getChartColorsArray("multipleYaxisChart")[1]
            },
            title: {
                text: "Operating Cashflow (thousand crores)",
            },
        },
        {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: getChartColorsArray("multipleYaxisChart")[2]
            },
            title: {
                text: "Revenue (thousand crores)",
            }
        },
    ],
    tooltip: {
        fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
        },
    },
    legend: {
        horizontalAlign: 'left',
        offsetX: 40
    }
};

var chart = new ApexCharts(document.querySelector("#multipleYaxisChart"), options);
chart.render();

//Line & Area
var options = {
    series: [{
        name: 'TEAM A',
        type: 'area',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
    }, {
        name: 'TEAM B',
        type: 'line',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    stroke: {
        curve: 'smooth'
    },
    colors: getChartColorsArray("lineAreaChart"),
    labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
    markers: {
        size: 0
    },
    yaxis: [
        {
            title: {
                text: 'Series A',
            },
        },
        {
            opposite: true,
            title: {
                text: 'Series B',
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#lineAreaChart"), options);
chart.render();

//Line Column Area
var options = {
    series: [{
        name: 'TEAM A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'TEAM B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'TEAM C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    chart: {
        height: 350,
        type: 'line',
        stacked: false,
    },
    stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },

    fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
    ],
    colors: getChartColorsArray("lineColumnAreaChart"),
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        title: {
            text: 'Points',
        },
        min: 0
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;

            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#lineColumnAreaChart"), options);
chart.render();

//Line Scatter
var options = {
    series: [{
        name: 'Points',
        type: 'scatter',

        //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
        data: [{
            x: 1,
            y: 2.14
        }, {
            x: 1.2,
            y: 2.19
        }, {
            x: 1.8,
            y: 2.43
        }, {
            x: 2.3,
            y: 3.8
        }, {
            x: 2.6,
            y: 4.14
        }, {
            x: 2.9,
            y: 5.4
        }, {
            x: 3.2,
            y: 5.8
        }, {
            x: 3.8,
            y: 6.04
        }, {
            x: 4.55,
            y: 6.77
        }, {
            x: 4.9,
            y: 8.1
        }, {
            x: 5.1,
            y: 9.4
        }, {
            x: 7.1,
            y: 7.14
        }, {
            x: 9.18,
            y: 8.4
        }]
    }, {
        name: 'Line',
        type: 'line',
        data: [{
            x: 1,
            y: 2
        }, {
            x: 2,
            y: 3
        }, {
            x: 3,
            y: 4
        }, {
            x: 4,
            y: 5
        }, {
            x: 5,
            y: 6
        }, {
            x: 6,
            y: 7
        }, {
            x: 7,
            y: 8
        }, {
            x: 8,
            y: 9
        }, {
            x: 9,
            y: 10
        }, {
            x: 10,
            y: 11
        }]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    fill: {
        type: 'solid',
    },
    markers: {
        size: [6, 0]
    },
    colors: getChartColorsArray("lineScatterChart"),
    tooltip: {
        shared: false,
        intersect: true,
    },
    legend: {
        show: false
    },
    xaxis: {
        type: 'numeric',
        min: 0,
        max: 12,
        tickAmount: 12
    }
};

var chart = new ApexCharts(document.querySelector("#lineScatterChart"), options);
chart.render();