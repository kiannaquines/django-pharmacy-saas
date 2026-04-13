'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});
const ApexChartClient = ({
  type,
  height,
  width = '100%',
  getOptions,
  series,
  className
}) => {
  const options = useMemo(() => getOptions(), []);
  return <ReactApexChart type={type} height={height} width={width} options={options} series={series} className={className} />;
};
export default ApexChartClient;