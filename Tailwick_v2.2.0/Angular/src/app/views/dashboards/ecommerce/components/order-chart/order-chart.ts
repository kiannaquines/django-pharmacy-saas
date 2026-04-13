import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { Apexchart } from "../../../../../components/apexchart/apexchart";
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-chart',
  imports: [Apexchart, NgIcon, RouterLink ],
  templateUrl: './order-chart.html',
  styles: ``
})
export class OrderChart {
   
  orderChartOptions: () => ApexOptions = () => ({
         series: [{
                name: 'Pending',
                data: [17, 16, 19, 22, 24, 29, 25, 20, 25, 31, 28, 35,]
            }, {
                name: 'New Orders',
                data: [30, 24, 32, 27, 16, 22, 32, 21, 24, 20, 38, 28]
            }],
            chart: {
                type: 'line',
                height: 275,
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ["#2b7fff", "#2b7fff"],
            dataLabels: {
                enabled: false
            },
            grid: {
                show: true,
                padding: {
                    top: -20,
                    right: 0,
                }
            },
            markers: {
                hover: {
                    sizeOffset: 4
                }
            }
  })

}
