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


//basic polar
var options = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
        height: 350,
        type: 'polarArea',
    },
    stroke: {
        colors: ['#fff']
    },
    colors: getChartColorsArray("basicPolar"),
    fill: {
        opacity: 0.8
    },
    legend: {
        position: 'bottom'
    }
};

var chart = new ApexCharts(document.querySelector("#basicPolar"), options);
chart.render();

//Monochrome
var options = {
    series: [42, 47, 52, 58, 65],
    chart: {
        height: 350,
        type: 'polarArea'
    },
    labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
    fill: {
        opacity: 1
    },
    stroke: {
        width: 1,
        colors: undefined
    },
    yaxis: {
        show: false
    },
    legend: {
        position: 'bottom'
    },
    plotOptions: {
        polarArea: {
            rings: {
                strokeWidth: 0
            },
            spokes: {
                strokeWidth: 0
            },
        }
    },
    theme: {
        monochrome: {
            enabled: true,
            color: getChartColorsArray("monochromeChart")[0],
            shadeTo: 'light',
            shadeIntensity: 0.6
        }
    }
};

var chart = new ApexCharts(document.querySelector("#monochromeChart"), options);
chart.render();