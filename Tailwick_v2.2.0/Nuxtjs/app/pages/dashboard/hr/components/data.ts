import type { ApexOptions } from 'apexcharts'
import avatar10 from '~/assets/images/user/avatar-10.png'
import avatar2 from '~/assets/images/user/avatar-2.png'
import avatar3 from '~/assets/images/user/avatar-3.png'
import avatar4 from '~/assets/images/user/avatar-4.png'

export const applicationReceivedChartseries = [
  {
    name: 'Total Application',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  },
  {
    name: 'Hired Candidates',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }
]

export const applicationReceivedChartOptions: ApexOptions = {
  chart: {
    height: 315,
    type: 'line',
    stacked: false,
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: [2, 2],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },

  fill: {
    opacity: [0.03, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: 'vertical',
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  colors: ['#2b7fff', '#00c951'],
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: -15,
      right: 0
    }
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== 'undefined') {
          return y.toFixed(0) + ' points'
        }
        return y
      }
    }
  }
}

export const totalEmployeeseries = [10]

export const totalEmployeeOptions: ApexOptions = {
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
        size: '50%'
      },
      track: {
        margin: 2
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
}

export const totalApplicationseries = [60]

export const totalApplicationOptions: ApexOptions = {
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
        size: '50%'
      },
      track: {
        margin: 2
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
  colors: ['#bc2bffff']
}

export const hiredCandidatesseries = [25]

export const hiredCandidatesOptions: ApexOptions = {
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
        size: '50%'
      },
      track: {
        margin: 2
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
}

export const rejectedCandidatesseries = [75]

export const rejectedCandidatesOptions: ApexOptions = {
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
        size: '50%'
      },
      track: {
        margin: 2
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
}

export const totalProjectChartseries = [
  {
    name: 'New',
    data: [44, 55, 41, 67, 22, 43, 14, 55, 41]
  },
  {
    name: 'Pending',
    data: [13, 23, 20, 8, 13, 27, 8, 20, 8]
  },
  {
    name: 'Completed',
    data: [11, 17, 15, 15, 21, 14, 24, 11, 17]
  },
  {
    name: 'Rejected',
    data: [21, 7, 25, 13, 22, 8, 13, 7, 25]
  }
]

export const totalProjectChartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 353,
    stacked: true,
    zoom: {
      enabled: true
    },
    toolbar: {
      show: false
    },
    parentHeightOffset: 0
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 2,
      columnWidth: '25%'
    }
  },
  grid: {
    padding: {
      top: -15,
      bottom: 5,
      right: 0
    }
  },
  xaxis: {
    categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09']
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#2b7fff', '#facc15', '#4ade80', '#f87171'],
  legend: {
    position: 'bottom'
  },
  fill: {
    opacity: 1
  }
}

export type Employee = {
  id: string
  name: string
  email: string
  designation: string
  textcolor: 'text-green-700' | 'text-danger'
  performance: 'Good' | 'Low'
  status: 'Active' | 'Disabled'
  statusColor: string
  avatar: string
}

export const employees: Employee[] = [
  {
    id: 'TW-1001',
    name: 'Kristen Redden',
    email: 'kredden@tailwick.com',
    designation: 'Designer',
    performance: 'Good',
    textcolor: 'text-green-700',
    status: 'Active',
    statusColor: 'bg-success/10 text-success border border-success/30',
    avatar: avatar10
  },
  {
    id: 'TW-1002',
    name: 'Howard George',
    email: 'george@tailwick.com',
    designation: 'ASP.Net Developer',
    performance: 'Low',
    textcolor: 'text-danger',
    status: 'Active',
    statusColor: 'bg-success/10 text-success border border-success/30',
    avatar: avatar2
  },
  {
    id: 'TW-1003',
    name: 'Laura Dawson',
    email: 'laura@tailwick.com',
    designation: 'React Developer',
    performance: 'Good',
    textcolor: 'text-green-700',
    status: 'Active',
    statusColor: 'bg-success/10 text-success border border-success/30',
    avatar: avatar3
  },
  {
    id: 'TW-1004',
    name: 'Joseph Morgan',
    email: 'morgan@tailwick.com',
    designation: 'Angular Developer',
    performance: 'Good',
    textcolor: 'text-green-700',
    status: 'Disabled',
    statusColor: 'text-default-600 border border-default-200 rounded',
    avatar: avatar4
  },
  {
    id: 'TW-1005',
    name: 'Jeremy Rose',
    email: 'rose@tailwick.com',
    designation: 'UI / UX Designer',
    performance: 'Low',
    textcolor: 'text-danger',
    status: 'Disabled',
    statusColor: 'text-default-600 border border-default-200 rounded',
    avatar: avatar4
  }
]
