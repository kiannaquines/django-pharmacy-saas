import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { ApexOptions } from 'ng-apexcharts';
import { Apexchart } from "../../../../../components/apexchart/apexchart";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';

@Component({
  selector: 'app-sales-revenue-chart',
  imports: [NgIcon, Apexchart, FlatpickrDirective],
  templateUrl: './sales-revenue-chart.html',
    providers: [provideFlatpickrDefaults()],
  styles: ``
})
export class SalesRevenueChart {
   
  salesRevenueOptions: () => ApexOptions = () => ({
    series: [{
                name: 'Total Sales',
                data: [44, 55, 41, 67, 22, 43, 21, 49, 20, 41, 67, 22,]
            }, {
                name: 'Total Profit',
                data: [11, 17, 15, 15, 21, 14, 15, 13, 5, 15, 15, 21,]
            }],
            chart: {
                type: 'bar',
                height: 310,
                stacked: true,
                stackType: '100%',
                parentHeightOffset: 0,
                toolbar: {
                    show: false,
                },
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$" + val + "k"
                    }
                }
            },
            grid: {
                show: true,
                padding: {
                    top: -20,
                    right: -10,
                    bottom: -10,
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%',
                },
            },
            colors: ["#2b7fff", "#2b7fff", "var(--color-teal-500)"],
            fill: {
                opacity: 1
            },
            legend: {
                position: 'bottom',
            },
  })

}
