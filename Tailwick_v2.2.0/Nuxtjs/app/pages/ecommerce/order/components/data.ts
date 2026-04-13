import type { ApexOptions } from 'apexcharts'

export type OrderType = {
  id: string
  orderDate: string
  deliveryDate: string
  customerName: string
  paymentMethod: string
  amount: number
  color?: string
  deliveryStatus: 'Delivered' | 'Shipping' | 'New' | 'Pending' | 'Cancelled' | 'Return'
}

export const orders: OrderType[] = [
  {
    id: '#TWT5015100365',
    orderDate: '08 Jun, 2023',
    deliveryDate: '15 Jun, 2023',
    customerName: 'Marie Prohaska',
    paymentMethod: 'Credit Card',
    amount: 541.32,
    deliveryStatus: 'Delivered',
    color: 'bg-success/10 text-success border border-success/30'
  },
  {
    id: '#TWT5015100366',
    orderDate: '11 July, 2023',
    deliveryDate: '20 July, 2023',
    customerName: 'Jaqueline Hammes',
    paymentMethod: 'Paypal',
    amount: 1876.33,
    deliveryStatus: 'Shipping',
    color: 'bg-secondary/10 text-secondary border border-secondary/30'
  },
  {
    id: '#TWT5015100367',
    orderDate: '21 Aug, 2023',
    deliveryDate: '24 Aug, 2023',
    customerName: 'Marlene Hirthe',
    paymentMethod: 'Visa Card',
    amount: 15023.99,
    color: 'bg-info/10 text-info border border-info/30',
    deliveryStatus: 'New'
  },
  {
    id: '#TWT5015100368',
    orderDate: '28 Nov, 2023',
    deliveryDate: '02 Dec, 2023',
    customerName: 'Reagan Larson',
    paymentMethod: 'American Express',
    amount: 783.56,
    deliveryStatus: 'Delivered',
    color: 'bg-success/10 text-success border border-success/30'
  },
  {
    id: '#TWT5015100369',
    orderDate: '11 Oct, 2023',
    deliveryDate: '16 Oct, 2023',
    customerName: 'Glennie Langosh',
    paymentMethod: 'American Express',
    amount: 986.49,
    deliveryStatus: 'Pending',
    color: 'bg-warning/10 text-warning border border-warning/30'
  },
  {
    id: '#TWT5015100370',
    orderDate: '16 Feb, 2023',
    deliveryDate: '22 Feb, 2023',
    customerName: 'Rickie Cremin',
    paymentMethod: 'COD',
    amount: 741.32,
    deliveryStatus: 'Delivered',
    color: 'bg-success/10 text-success border border-success/30'
  },
  {
    id: '#TWT5015100371',
    orderDate: '18 Apr, 2023',
    deliveryDate: '29 Apr, 2023',
    customerName: 'Domenic Tromp',
    paymentMethod: 'Credit Card',
    amount: 1386.49,
    deliveryStatus: 'Shipping',
    color: 'bg-secondary/10 text-secondary border border-secondary/30'
  },
  {
    id: '#TWT5015100372',
    orderDate: '21 Jan, 2024',
    deliveryDate: '24 Jan, 2023',
    customerName: 'Akeem Paucek',
    paymentMethod: 'PayPal',
    amount: 3487.21,
    deliveryStatus: 'New',
    color: 'bg-info/10 text-info border border-info/30'
  },
  {
    id: '#TWT5015100373',
    orderDate: '05 Oct, 2024',
    deliveryDate: '11 Oct, 2023',
    customerName: 'David Gaby',
    paymentMethod: 'COD',
    amount: 5986.11,
    deliveryStatus: 'Return',
    color: 'bg-default-100 text-default-800/80 border border-default-800/20'
  },
  {
    id: '#TWT5015100374',
    orderDate: '07 Oct, 2024',
    deliveryDate: '13 Oct, 2023',
    customerName: 'Joel Freeleagus',
    paymentMethod: 'American Express',
    amount: 9451.75,
    deliveryStatus: 'Cancelled',
    color: 'bg-danger/10 text-danger border border-danger/30'
  }
]

export const series = [
  {
    name: 'Orders',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 3.4, 5.5, 8.8]
  }
]

export const chartOptions: ApexOptions = {
  chart: {
    height: 190,
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      dataLabels: {
        position: 'top'
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + '%'
    },
    style: {
      fontSize: '12px'
    }
  },
  grid: {
    padding: {
      bottom: -10
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: true
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + '%'
      }
    }
  },
  colors: ['#2b7fff']
}
