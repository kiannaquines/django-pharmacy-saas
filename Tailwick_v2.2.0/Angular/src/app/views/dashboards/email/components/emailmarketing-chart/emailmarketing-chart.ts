import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { Apexchart } from "../../../../../components/apexchart/apexchart";
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

@Component({
  selector: 'app-emailmarketing-chart',
  imports: [Apexchart, RouterLink, NgIcon],
  templateUrl: './emailmarketing-chart.html',
  styles: ``
})

export class EmailmarketingChart {
    
    emailMarketingOptions: () => ApexOptions = () => ({
     series: [44, 55, 67],
            chart: {
                height: 370,
                type: 'radialBar',
            },
            legend: {
                show: false,
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                return '249';
                            }
                        }
                    },
                    track: {
                        margin: 14,
                    }
                }
            },
            colors: ["#2b7fff", "#00c951", "#ff6900"],
            labels: ['Sent', 'Opened', 'Not Opened'],
    })
}
