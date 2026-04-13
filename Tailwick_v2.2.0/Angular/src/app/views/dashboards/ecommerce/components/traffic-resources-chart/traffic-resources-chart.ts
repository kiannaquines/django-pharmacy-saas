import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { Apexchart } from "../../../../../components/apexchart/apexchart";
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-traffic-resources-chart',
  imports: [Apexchart, NgIcon, RouterLink ],
  templateUrl: './traffic-resources-chart.html',
  styles: ``
})
export class TrafficResourcesChart {

  trafficResourcesOptions: () => ApexOptions = () => ({
    series: [44, 34, 22],
    chart: {
      height: 222,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              return '875';

            }
          }
        }
      }
    },
    grid: {
      show: true,
      padding: {
        top: -8,
        bottom: -15,
        left: 0,
        right: 0,
      }
    },
    colors: ["#2b7fff", "#facc15", "#4ade80", "#f87171"],
    labels: ['Direct', 'Referrals', 'Search Engine'],
  })

}
