import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { Apexchart } from "../../../../../components/apexchart/apexchart";

@Component({
  selector: 'app-subscription',
  imports: [Apexchart],
  templateUrl: './subscription.html',
  styles: ``
})
export class Subscription {

  subscriptionOptions: () => ApexOptions = () => ({
    series: [44, 55, 41, 17, 15],
    labels: ['Beginner', 'Intermediate', 'Enterprise', 'VIP', 'Professional'],
    chart: {
      height: 290,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        donut: {
          size: '75%'
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
    },
    colors: ["#2b7fff", "#f97316", "#00c951", "#facc15", "#a855f7"],
    legend: {
      position: 'bottom',
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      }
    }

  })

}
