import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { Apexchart } from "../../../../../components/apexchart/apexchart";

@Component({
  selector: 'app-hr-metrics',
  imports: [Apexchart],
  templateUrl: './hr-metrics.html',
  styles: ``
})
export class HrMetrics {

  totalEmployeeOptions: () => ApexOptions = () => ({
    series: [10],
    chart: {
      height: 110,
      type: 'radialBar',
      parentHeightOffset: 0,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '50%',
        },
        track: {
          margin: 2,
        },
        dataLabels: {
          show: false
        }
      }
    },
    grid: {
      padding: {
        top: -15,
        bottom: -15
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Total Employee'],
    colors: ['#2b7fff']

  })

  totalApplicationOptions: () => ApexOptions = () => ({
    series: [60],
    chart: {
      height: 110,
      type: 'radialBar',
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '50%',
        },
        track: {
          margin: 2,
        },
        dataLabels: {
          show: false
        }
      }
    },
    grid: {
      padding: {
        top: -15,
        bottom: -15
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Total Employee'],
    colors: ['#ad46ff']
  })

  hiredCandidatesOptions: () => ApexOptions = () => ({
    series: [25],
    chart: {
      height: 110,
      type: 'radialBar',
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '50%',
        },
        track: {
          margin: 2,
        },
        dataLabels: {
          show: false
        }
      }
    },
    grid: {
      padding: {
        top: -15,
        bottom: -15
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Total Employee'],
    colors: ['#00c951']

  })

  rejectedCandidatesOptions: () => ApexOptions = () => ({
    series: [75],
                    chart: {
                        height: 110,
                        type: 'radialBar',
                        sparkline: {
                            enabled: true
                        }
                    },
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                margin: 0,
                                size: '50%',
                            },
                            track: {
                                margin: 2,
                            },
                            dataLabels: {
                                show: false
                            }
                        }
                    },
                    grid: {
                        padding: {
                            top: -15,
                            bottom: -15
                        }
                    },
                    stroke: {
                        lineCap: 'round'
                    },
                    labels: ['Total Employee'],
                    colors: ['#ff6900']
  })

}
