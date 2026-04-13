import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { Apexchart } from "../../../../../components/apexchart/apexchart";
import { NgIcon } from "@ng-icons/core";

@Component({
  selector: 'app-location-chart',
  imports: [Apexchart, NgIcon],
  templateUrl: './location-chart.html',
  styles: ``
})
export class LocationChart {
   
  locationChartOptions:() =>  ApexOptions = () => ({
      series: [{
                name: "Response Times",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
                margin: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'butt',
                width: 2,
                dashArray: 0,
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#2b7fff"],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],

            }
    });

}
