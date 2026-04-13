import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { ApexOptions } from 'ng-apexcharts';
import { Apexchart } from "../../../../../components/apexchart/apexchart";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-visitinsights-chart',
  imports: [NgIcon, Apexchart, RouterLink ],
  templateUrl: './visitinsights-chart.html',
  styles: ``
})
export class VisitinsightsChart {

  visitInsightsChartOptions: () => ApexOptions = () => ({
    series: [
      {
        name: 'Male',
        data: [55, 41, 67, 22, 43, 21, 33, 45]
      },
      {
        name: 'Female',
        data: [55, 41, 67, 22, 43, 21, 33, 45]
      }
    ],
    annotations: {
      points: [{
        x: 'Bananas',
        seriesIndex: 0,
        label: {
          borderColor: "#2b7fff",
          offsetY: 0,
          style: {
            color: '#fff',
            background: "#2b7fff",
          },
          text: 'Bananas are good',
        }
      }]
    },
    colors: ["#00c951", "#a855f7"],
    chart: {
      height: 245,
      type: 'bar',
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '70%',
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2
    },
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      tickPlacement: 'on'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        top: -10,
        right: -10,
        left: -10
      }
    },
    yaxis: {
      show: false,
    }
  })

}
