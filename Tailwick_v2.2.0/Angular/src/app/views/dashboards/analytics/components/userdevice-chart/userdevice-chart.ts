import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { Apexchart } from "../../../../../components/apexchart/apexchart";
import { ApexOptions } from 'ng-apexcharts';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-userdevice-chart',
  imports: [NgIcon, Apexchart, RouterLink ],
  templateUrl: './userdevice-chart.html',
  styles: ``
})
export class UserdeviceChart {
  
  userDeviceChartsOptions: () => ApexOptions = () => ({
    series: [{
                name: 'Desktop',
                data: [80, 50, 30, 40, 100, 20],
            }, {
                name: 'Mobile',
                data: [20, 30, 40, 80, 20, 80],
            }, {
                name: 'Others',
                data: [44, 76, 78, 13, 43, 10],
            }],
            chart: {
                height: 230,
                type: 'radar',
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                },
                toolbar: {
                    show: false,
                }
            },
            stroke: {
                width: 2
            },
            fill: {
                opacity: 0.1
            },
            markers: {
                size: 0
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        show: false
                    }
                }
            }],
            colors: ["#2b7fff", "#22c55e", "#f97316"],
            legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
            },
            xaxis: {
                categories: ['2018', '2019', '2020', '2021', '2022', '2023']
            }
  })
   
}
