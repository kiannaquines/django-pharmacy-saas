import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { Apexchart } from "../../../../../components/apexchart/apexchart";
import { ApexOptions } from 'ng-apexcharts';

type EmailMetric = {
  icon: string;
  label: string;
  value: string;
  unit?: string;
  chartOptions: string; 
  footer: string;
  borderClass: string;
  paddingClass: string;
};

@Component({
  selector: 'app-statistics-widget',
  imports: [NgIcon, Apexchart],
  templateUrl: './statistics-widget.html',
  styles: ``
})
export class StatisticsWidget {

  metrics: EmailMetric[] = [
    {
      icon: "lucideRocket",
      label: "Sent",
      value: "1,452",
      chartOptions: "emailChartOptions",
      footer: "238 Emails (Monthly)",
      borderClass: "md:border-e md:border-b-0 border-b border-default-200",
      paddingClass: "py-5 md:pe-5 pe-0"
    },
    {
      icon: "lucideMousePointerClick",
      label: "Open Rate",
      value: "92.74",
      unit: "%",
      chartOptions: "openRateChartOptions",
      footer: "60 Opened (Monthly)",
      borderClass: "md:border-e md:border-b-0 border-b border-default-200",
      paddingClass: "md:p-5 px-0 py-5"
    },
    {
      icon: "lucideSquareMousePointer",
      label: "Open Rate",
      value: "3.79",
      unit: "%",
      chartOptions: "clickRateChartOptions",
      footer: "29 Clicks (Monthly)",
      borderClass: "md:border-e md:border-b-0 border-b border-default-200",
      paddingClass: "md:p-5 px-0 py-5"
    },
    {
      icon: "lucideGoal",
      label: "Clicks Through",
      value: "4.06",
      unit: "%",
      chartOptions: "clickThroughChartOptions",
      footer: "29 Click Through (Monthly)",
      borderClass: "",
      paddingClass: "py-5 md:ps-5 ps-0"
    }
  ];

  emailChartOptions: () => ApexOptions = () => ({
    series: [{
      name: 'Sent',
      data: [
        14, 20, 10, 5, 11, 30, 24, 26, 33, 38, 34, 27, 22
      ]
    }],
    chart: {
      id: 'area-datetime',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      zoom: {
        autoScaleYaxis: true
      }
    },
    colors: ["#2b7fff", "#00c951"],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false
    },
  })

  openRateChartOptions: () => ApexOptions = () => ({
     series: [{
                name: 'Open Rate',
                data: [
                    38, 34, 27, 22, 14, 20, 10, 5, 11, 30, 24, 26, 33
                ]
            }],
            chart: {
                id: 'area-datetime',
                type: 'line',
                height: 80,
                sparkline: {
                    enabled: true
                },
                zoom: {
                    autoScaleYaxis: true
                }
            },
            colors: ["#00c951"],
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            dataLabels: {
                enabled: false
            },
  })

  clickRateChartOptions: () => ApexOptions = () => ({
     series: [{
                name: 'Click Rate',
                data: [
                    30, 24, 14, 20, 10, 5, 11, 26, 33, 38, 34, 27, 22
                ]
            }],
            chart: {
                id: 'area-datetime',
                type: 'line',
                height: 80,
                sparkline: {
                    enabled: true
                },
                zoom: {
                    autoScaleYaxis: true
                }
            },
            colors: ["#ff6900"],
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            dataLabels: {
                enabled: false
            },
  })

  clickThroughChartOptions: () => ApexOptions = () => ({
       series: [{
                name: 'Click Through',
                data: [
                    11, 30, 24, 26, 33, 38, 14, 20, 10, 5, 34, 27, 22
                ]
            }],
            chart: {
                id: 'area-datetime',
                type: 'line',
                height: 80,
                sparkline: {
                    enabled: true
                },
                zoom: {
                    autoScaleYaxis: true
                }
            },
            colors: ["#2b7fff"],
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            dataLabels: {
                enabled: false
            },
  })

}
