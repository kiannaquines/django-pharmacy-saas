import { Component } from '@angular/core';

type CounterItem = {
  value: number;
  label: string;
}

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styles: ``
})

export class Counter {
  counterItems: CounterItem[] = [
  {
    value: 4,
    label: 'Multiple Layouts'
  },
  {
    value: 12,
    label: 'Multi Languages'
  },
  {
    value: 7,
    label: 'Apps & Dashboard'
  },
  {
    value: 4,
    label: 'Multiple Modes'
  },
  {
    value: 36500,
    label: 'Happy Customers'
  }
];
}
