import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { Apexchart } from "../../../../../components/apexchart/apexchart";
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-total-project',
  imports: [Apexchart, NgIcon, RouterLink ],
  templateUrl: './total-project.html',
  styles: ``
})
export class TotalProject {
  
  totalProjectOptions: () => ApexOptions = () => ({
     series: [{
                name: 'New',
                data: [44, 55, 41, 67, 22, 43, 14, 55, 41,]
            }, {
                name: 'Pending',
                data: [13, 23, 20, 8, 13, 27, 8, 20, 8,]
            }, {
                name: 'Completed',
                data: [11, 17, 15, 15, 21, 14, 24, 11, 17,]
            }, {
                name: 'Rejected',
                data: [21, 7, 25, 13, 22, 8, 13, 7, 25,]
            }],
            chart: {
                type: 'bar',
                height: 353,
                stacked: true,
                zoom: {
                    enabled: true
                },
                toolbar: {
                    show: false,
                },
                parentHeightOffset: 0,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 2,
                    columnWidth: '25%',
                },
            },
            grid: {
                padding: {
                    top: -15,
                    bottom: 5,
                    right: 0,
                }
            },
            xaxis: {
                categories: ['01', '02', '03', '04',
                    '05', '06', '07', '08', '09'
                ],
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#2b7fff", "#facc15", "#4ade80", "#f87171"],
            legend: {
                position: 'bottom',
            },
            fill: {
                opacity: 1
            }
  })  

}
