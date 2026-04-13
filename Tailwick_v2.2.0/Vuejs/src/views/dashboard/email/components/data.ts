import type { ApexOptions } from 'apexcharts'

export const emailDataChartseries = [
  {
    name: 'Open Rate',
    data: [28, 29, 31, 36, 32, 32, 33, 40, 37]
  },
  {
    name: 'Click Rate',
    data: [26, 41, 40, 51, 49, 62, 69, 52, 58]
  }
]

export const emailDataChartOptions: ApexOptions = {
  chart: {
    height: 333,
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
  colors: ['#2b7fff', 'var(--color-purple-500)'],
  stroke: {
    curve: 'smooth',
    width: 3
  },
  legend: {
    show: true
  },
  markers: {
    size: 5,
    hover: {
      sizeOffset: 1
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
  }
  // legend: {
  //   position: 'top',
  //   horizontalAlign: 'right',
  //   floating: true,
  //   offsetY: -15
  //   // offsetX: -5
  // }
}

export const emailMarketingChartseries = [44, 55, 67]

export const emailMarketingChartOptions: ApexOptions = {
  chart: {
    height: 370,
    type: 'radialBar'
  },
  legend: {
    show: false
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px'
        },
        value: {
          fontSize: '16px'
        },
        total: {
          show: true,
          label: 'Total'
          // formatter: function (w) {
          //     return 249
          // }
        }
      },
      track: {
        margin: 14
      }
    }
  },
  colors: ['#2b7fff', '#00c951', '#ff6900'],
  labels: ['Sent', 'Opened', 'Not Opened']
}

export type PerformanceType = {
  email: string
  date: string
  openRate: string
  through: string
  clickRate: string
  unsubscribed: string
  bounce: string
  spam: string
}

export const performance: PerformanceType[] = [
  {
    email: 'Adverting & Marketing Agencies',
    date: '05 Aug, 2023',
    openRate: '18.65%',
    through: '2.66%',
    clickRate: '14.14%',
    unsubscribed: '0.19%',
    bounce: '1.29%',
    spam: '0.03%'
  },
  {
    email: 'Automotive & Aerospace',
    date: '20 Sep, 2023',
    openRate: '20.13%',
    through: '3.44%',
    clickRate: '18.03%',
    unsubscribed: '0.18%',
    bounce: '1.18%',
    spam: '0.00%'
  },
  {
    email: 'Education',
    date: '04 Jun, 2023',
    openRate: '18.74%',
    through: '2.80%',
    clickRate: '14.94%',
    unsubscribed: '0.17%',
    bounce: '1.35%',
    spam: '0.02%'
  },
  {
    email: 'Financial Services',
    date: '11 Feb, 2023',
    openRate: '18.23%',
    through: '2.72%',
    clickRate: '14.79%',
    unsubscribed: '0.16%',
    bounce: '1.30%',
    spam: '0.00%'
  },
  {
    email: 'Food & Beverage',
    date: '26 Nov, 2023',
    openRate: '15.48%',
    through: '1.69%',
    clickRate: '10.69%',
    unsubscribed: '0.11%',
    bounce: '0.63%',
    spam: '0.00%'
  },
  {
    email: 'Healthcare Services',
    date: '19 Jul, 2023',
    openRate: '19.12%',
    through: '2.98%',
    clickRate: '15.11%',
    unsubscribed: '0.17%',
    bounce: '1.08%',
    spam: '0.00%'
  },
  {
    email: 'Professional Services',
    date: '14 Jun, 2023',
    openRate: '18.14%',
    through: '2.39%',
    clickRate: '12.92%',
    unsubscribed: '0.17%',
    bounce: '1.10%',
    spam: '0.00%'
  },
  {
    email: 'Logistics & Wholesale',
    date: '03 Dec, 2023',
    openRate: '18.50%',
    through: '0.20%',
    clickRate: '14.84%',
    unsubscribed: '0.15%',
    bounce: '1.40%',
    spam: '0.00%'
  },
  {
    email: 'Real Estate Agents & Brokers',
    date: '03 Dec, 2023',
    openRate: '18.06%',
    through: '2.02%',
    clickRate: '11.51%',
    unsubscribed: '0.22%',
    bounce: '1.18%',
    spam: '0.00%'
  },
  {
    email: 'Nonprofit',
    date: '03 Dec, 2023',
    openRate: '20.39%',
    through: '2.66%',
    clickRate: '12.99%',
    unsubscribed: '0.17%',
    bounce: '1.09%',
    spam: '0.01%'
  },
  {
    email: 'Retail',
    date: '03 Dec, 2023',
    openRate: '14.98%',
    through: '2.25%',
    clickRate: '14.82%',
    unsubscribed: '0.12%',
    bounce: '0.69%',
    spam: '0.01%'
  }
]

export const sentEmailseries = [
  {
    name: 'Sent',
    data: [14, 20, 10, 5, 11, 30, 24, 26, 33, 38, 34, 27, 22]
  }
]

export const sendEmailChartOptions: ApexOptions = {
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
  colors: ['#2b7fff', '#00c951'],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  dataLabels: {
    enabled: false
  }
}

export const openRateseries = [
  {
    name: 'Open Rate',
    data: [38, 34, 27, 22, 14, 20, 10, 5, 11, 30, 24, 26, 33]
  }
]

export const openRateChartOptions: ApexOptions = {
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
  colors: ['#00c951'],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  dataLabels: {
    enabled: false
  }
}

export const clickRateseries = [
  {
    name: 'Click Rate',
    data: [30, 24, 14, 20, 10, 5, 11, 26, 33, 38, 34, 27, 22]
  }
]

export const clickRateChartOptions: ApexOptions = {
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
  colors: ['#ff6900'],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  dataLabels: {
    enabled: false
  }
}

export const clickThroughseries = [
  {
    name: 'Click Through',
    data: [11, 30, 24, 26, 33, 38, 14, 20, 10, 5, 34, 27, 22]
  }
]

export const clickThroughChartOptions: ApexOptions = {
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
  colors: ['#2b7fff'],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  dataLabels: {
    enabled: false
  }
}

export const deliveredRateseries = [
  {
    name: 'Delivered Rate',
    data: [11, 30, 24, 26, 33, 38, 14, 20, 10, 9, 34, 27, 22]
  }
]

export const deliveredRateChartOptions: ApexOptions = {
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
  colors: ['#2b7fff'],
  stroke: {
    width: 1,
    curve: 'smooth'
  },
  dataLabels: {
    enabled: false
  }
}

export const hardBounceRateseries = [
  {
    name: 'Hard Bounce Rate',
    data: [14, 20, 10, 5, 11, 30, 24, 26, 33, 38, 34, 27, 22]
  }
]

export const hardBounceRateChartOptions: ApexOptions = {
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
  colors: ['#00c951'],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  dataLabels: {
    enabled: false
  }
}

export const unsubscribedRateseries = [
  {
    name: 'Unsubscribed Rate',
    data: [38, 34, 27, 22, 14, 20, 10, 5, 11, 30, 24, 26, 33]
  }
]

export const unsubscribedRateChartOptions: ApexOptions = {
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
  colors: ['var(--color-yellow-500)'],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  dataLabels: {
    enabled: false
  }
}

export const spanReportRateseries = [
  {
    name: 'Spam Report Rate',
    data: [30, 24, 14, 20, 10, 13, 11, 26, 33, 38, 34, 27, 22]
  }
]

export const spanReportRateChartOptions: ApexOptions = {
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
  colors: ['var(--color-purple-500)'],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  dataLabels: {
    enabled: false
  }
}
