import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { Apexchart } from "../../../../../components/apexchart/apexchart";

@Component({
  selector: 'app-analytics-report',
  imports: [Apexchart],
  templateUrl: './analytics-report.html',
  styles: ``
})
export class AnalyticsReport {
   
  analyticsReportsOptions: () => ApexOptions = () => ({
    series: [
                {
                    name: "Income - 2023",
                    data: [28, 29, 33, 36, 32]
                },
                {
                    name: "Expense - 2023",
                    data: [20, 17, 21, 29, 23]
                }
            ],
            chart: {
                height: 260,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                toolbar: {
                    show: false
                }
            },
            colors: ["#2b7fff", "#00c951"],

            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: 'smooth',
                size: 2,
            },
            markers: {
                size: 1
            },
            yaxis: {
                show: false
            },
            xaxis: {
                categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul'],
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            },
            grid: {
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                },
                padding: {
                    top: -25,
                }
            },
  })

}
