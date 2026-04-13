import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { ApexOptions } from 'ng-apexcharts';
import { Apexchart } from "../../../../../components/apexchart/apexchart";

type MetricCard = {
  title: string;
  tooltip: string;
  value: string;
  options: string;
}

@Component({
  selector: 'app-email-rate',
  imports: [NgIcon, Apexchart],
  templateUrl: './email-rate.html',
  styles: ``
})
export class EmailRate {

  metricsData: MetricCard[] = [
  {
    title: "Delivered Rate",
    tooltip:
      "Taking the number of delivered emails and dividing it by the total number of emails sent",
    value: "100",
    options: "deliveredOptions",
  },
  {
    title: "Hard Bounce Rate",
    tooltip:
      "Taking the number of delivered emails and dividing it by the total number of emails sent",
    value: "89",
    options: "hardBounceRateOptions",
  },
  {
    title: "Unsubscribed Rate",
    tooltip:
      "Taking the number of delivered emails and dividing it by the total number of emails sent",
    value: "33",
    options: "unsubscribedRateOptions",
  },
  {
    title: "Spam Report Rate",
    tooltip:
      "Taking the number of delivered emails and dividing it by the total number of emails sent",
    value: "11.8",
    options: "spanReportRateOptions",
  },
];

  deliveredOptions: () => ApexOptions = () => ({
    series: [{
      name: 'Delivered Rate',
      data: [
        11, 30, 24, 26, 33, 38, 14, 20, 10, 9, 34, 27, 22
      ]
    }],
    chart: {
      id: 'area-datetime',
      type: 'bar',
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
      width: 1,
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false
    },
  })

  hardBounceRateOptions: () => ApexOptions = () => ({
    series: [{
      name: 'Hard Bounce Rate',
      data: [
        14, 20, 10, 5, 11, 30, 24, 26, 33, 38, 34, 27, 22
      ]
    }],
    chart: {
      id: 'area-datetime',
      type: 'bar',
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

  unsubscribedRateOptions: () => ApexOptions = () => ({
    series: [{
      name: 'Unsubscribed Rate',
      data: [
        38, 34, 27, 22, 14, 20, 10, 5, 11, 30, 24, 26, 33
      ]
    }],
    chart: {
      id: 'area-datetime',
      type: 'bar',
      height: 80,
      sparkline: {
        enabled: true
      },
      zoom: {
        autoScaleYaxis: true
      }
    },
    colors: ["var(--color-yellow-500)"],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false
    },
  })

  spanReportRateOptions: () => ApexOptions = () => ({
    series: [{
      name: 'Spam Report Rate',
      data: [
        30, 24, 14, 20, 10, 13, 11, 26, 33, 38, 34, 27, 22
      ]
    }],
    chart: {
      id: 'area-datetime',
      type: 'bar',
      height: 80,
      sparkline: {
        enabled: true
      },
      zoom: {
        autoScaleYaxis: true
      }
    },
    colors: ["var(--color-purple-500)"],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false
    },
  })

}
