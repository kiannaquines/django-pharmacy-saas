import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { Apexchart } from "../../../../../components/apexchart/apexchart";
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-satisfactionrate-chart',
  imports: [Apexchart, NgIcon, RouterLink],
  templateUrl: './satisfactionrate-chart.html',
  styles: ``
})
export class SatisfactionrateChart {
   
  satisfactionRateChartOptions: () => ApexOptions = () => ({
                series: [95.33],
            chart: {
                type: 'radialBar',
                height: 445,
                offsetY: -20,
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        strokeWidth: '97%',
                        margin: 5, // margin is in pixels
                    },

                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: -5,
                            fontSize: '22px',
                            fontWeight: '600'
                        }
                    }
                }
            },
            grid: {
                padding: {
                    top: -10
                }
            },
            colors: ["#2b7fff"],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    shadeIntensity: 0.4,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 53, 91]
                },
            },
            stroke: {
                dashArray: 4
            },
            labels: ['Average Results'],
  })

}
