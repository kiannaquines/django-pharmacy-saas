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

//simple pie
var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
        height: 350,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    colors: getChartColorsArray("simplePie"),
    legend: {
        position: 'bottom'
    }
};

var chart = new ApexCharts(document.querySelector("#simplePie"), options);
chart.render();

//Simple Donut
var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 350,
        type: 'donut',
    },
    colors: getChartColorsArray("simpleDonut"),
    legend: {
        position: 'bottom'
    },
};

var chart = new ApexCharts(document.querySelector("#simpleDonut"), options);
chart.render();

//Donut Update
var options = {
    series: [44, 55, 13, 33],
    chart: {
        width: 380,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false
            }
        }
    }],
    colors: getChartColorsArray("updatingDonutChart"),
    legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
    }
};

var chart = new ApexCharts(document.querySelector("#updatingDonutChart"), options);
chart.render();


function appendData() {
    var arr = chart.w.globals.series.slice()
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
    return arr;
}

function removeData() {
    var arr = chart.w.globals.series.slice()
    arr.pop()
    return arr;
}

function randomize() {
    return chart.w.globals.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1
    })
}

function reset() {
    return options.series
}

document.querySelector("#randomize").addEventListener("click", function () {
    chart.updateSeries(randomize())
})

document.querySelector("#add").addEventListener("click", function () {
    chart.updateSeries(appendData())
})

document.querySelector("#remove").addEventListener("click", function () {
    chart.updateSeries(removeData())
})

document.querySelector("#reset").addEventListener("click", function () {
    chart.updateSeries(reset())
})

//Monochrome Pie
var options = {
    series: [25, 15, 44, 55, 41, 17],
    chart: {
        height: 300,
        width: '100%',
        type: 'pie',
    },
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    theme: {
        monochrome: {
            enabled: true
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                offset: -5
            }
        }
    },
    dataLabels: {
        formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + '%']
        }
    },
    theme: {
        monochrome: {
            enabled: true,
            color: getChartColorsArray("monochromePieChart")[0],
            shadeTo: 'light',
            shadeIntensity: 0.6
        }
    },
    legend: {
        show: false
    }
};

var chart = new ApexCharts(document.querySelector("#monochromePieChart"), options);
chart.render();

//Gradient Donut
var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 280,
        type: 'donut',
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 270
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'gradient',
    },
    colors: getChartColorsArray("gradientDonut"),
    legend: {
        formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
    },
    legend: {
        position: 'bottom'
    }
};

var chart = new ApexCharts(document.querySelector("#gradientDonut"), options);
chart.render();

//Semi Donut
var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 280,
        type: 'donut'
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 5
        }
    },
    grid: {
        padding: {
            bottom: -80
        }
    },
    colors: getChartColorsArray("semiDonut"),
    legend: {
        position: 'bottom'
    }
};

var chart = new ApexCharts(document.querySelector("#semiDonut"), options);
chart.render();

//Donut with Pattern
var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 350,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        width: 0,
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    total: {
                        showAlways: true,
                        show: true
                    }
                }
            }
        }
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
        dropShadow: {
            blur: 3,
            opacity: 0.8
        }
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
        },
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    colors: getChartColorsArray("donutWithPattern"),
    theme: {
        palette: 'palette2'
    },
    legend: {
        position: 'bottom'
    }
};

var chart = new ApexCharts(document.querySelector("#donutWithPattern"), options);
chart.render();

// //Pie with Image
// var options = {
//     series: [44, 33, 54, 45],
//     chart: {
//         height: 350,
//         type: 'pie',
//     },
//     colors: getChartColorsArray("pieWithImage"),
//     fill: {
//         type: 'image',
//         opacity: 0.85,
//         image: {
//             src: ['../  assets/images/small/img-1.jpg', '../  assets/images/small/img-2.jpg', '../  assets/images/small/img-6.jpg', '../  assets/images/small/img-4.jpg'],
//             width: 25,
//             imagedHeight: 25
//         },
//     },
//     stroke: {
//         width: 4
//     },
//     dataLabels: {
//         enabled: true,
//         style: {
//             colors: ['#111']
//         },
//         background: {
//             enabled: true,
//             foreColor: '#fff',
//             borderWidth: 0
//         }
//     },
//     legend: {
//         position: 'bottom'
//     }
// };

// var chart = new ApexCharts(document.querySelector("#pieWithImage"), options);
// chart.render();