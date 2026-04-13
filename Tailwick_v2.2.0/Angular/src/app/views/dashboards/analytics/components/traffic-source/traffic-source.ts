import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type TrafficSourceType = {
  name: string;
  value: string;
  percent: string;
  colorClass: string;
};

@Component({
  selector: 'app-traffic-source',
  imports: [RouterLink],
  templateUrl: './traffic-source.html',
  styles: ``
})
export class TrafficSource {

  trafficSources: TrafficSourceType[] = [
    { name: 'Google', value: '54,963', percent: '89%', colorClass: 'bg-primary' },
    { name: 'Meta', value: '30,478', percent: '55%', colorClass: 'bg-sky-500' },
    { name: 'Social Media', value: '54,963', percent: '81%', colorClass: 'bg-warning' },
    { name: 'Direct Message', value: '54,963', percent: '63%', colorClass: 'bg-success' },
    { name: 'Others', value: '54,963', percent: '25%', colorClass: 'bg-default-600' },
  ];
  
}
