import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { Apexchart } from "../../../../../components/apexchart/apexchart";


@Component({
  selector: 'app-perspective-chart',
  imports: [Apexchart],
  templateUrl: './perspective-chart.html',
  styles: ``
})
export class PerspectiveChart {

  platformPerspectiveOptions: () => ApexOptions = () => ({
    series: [
      {
        data: [
          {
            x: 'React',
            y: 218
          },
          {
            x: 'TailwindCSS',
            y: 187
          },
          {
            x: 'Angular',
            y: 134
          },
          {
            x: 'Vue Js',
            y: 55
          },
          {
            x: 'Laravel',
            y: 99
          },
          {
            x: 'PHP',
            y: 34
          },
          {
            x: 'ASP.Net',
            y: 86
          },
          {
            x: 'Django',
            y: 30
          },
          {
            x: 'CI',
            y: 44
          }
        ]
      }
    ],
    legend: {
      show: false
    },
    chart: {
      height: 252,
      type: 'treemap',
      toolbar: {
        show: false
      },
      parentHeightOffset: 0
    },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    grid: {
      show: false,
      padding: {
        top: -15,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    colors: ['#2b7fff']
  });


}
