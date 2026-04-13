import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { PerspectiveChart } from "./components/perspective-chart/perspective-chart";
import { LocationChart } from "./components/location-chart/location-chart";
import { InteractionChart } from "./components/interaction-chart/interaction-chart";
import { UserdeviceChart } from "./components/userdevice-chart/userdevice-chart";
import { SatisfactionrateChart } from "./components/satisfactionrate-chart/satisfactionrate-chart";
import { VisitinsightsChart } from "./components/visitinsights-chart/visitinsights-chart";
import { ProductStatistic } from "./components/product-statistic/product-statistic";
import { AnalyticsReport } from "./components/analytics-report/analytics-report";
import { Subscription } from "./components/subscription/subscription";
import { TrafficSource } from "./components/traffic-source/traffic-source";
import { MonthlyStatus } from "./components/monthly-status/monthly-status";
import { PageTitle } from "../../../components/page-title/page-title";

type CardsType = {
   title: string;
    value: string;
    icon: string;
    background: string;
    btnBg: string;
    textColor: string;
    cornerIcon: string;
    cornerColor: string;
}

@Component({
  selector: 'app-analytics',
  imports: [NgIcon, PerspectiveChart, LocationChart, InteractionChart, UserdeviceChart, SatisfactionrateChart, VisitinsightsChart, ProductStatistic, AnalyticsReport, Subscription, TrafficSource, MonthlyStatus, PageTitle],
  templateUrl: './analytics.html',
  styles: ``
})
export class Analytics {
   cards: CardsType[] = [
    {
      title: 'Total Users',
      value: '15,876',
      icon: 'lucideUsers',
      background: 'bg-success/15',
      btnBg: 'bg-green-800',
      textColor: 'text-green-50',
      cornerIcon: 'lucideKanban',
      cornerColor: 'text-success/10'
    },
    {
      title: 'Sessions',
      value: '103.15k',
      icon: 'lucideCog',
      background: 'bg-danger/15',
      btnBg: 'bg-danger',
      textColor: 'text-white',
      cornerIcon: 'lucideListFilter',
      cornerColor: 'text-danger/10'
    },
    {
      title: 'Avg. Visit Duration',
      value: '0M 0sec',
      icon: 'lucideCoins',
      background: 'bg-secondary/15',
      btnBg: 'bg-secondary',
      textColor: 'text-sky-50',
      cornerIcon: 'lucideListFilter',
      cornerColor: 'text-secondary/10'
    },
    {
      title: 'Bounce Rate',
      value: '49.77%',
      icon: 'lucideCoins',
      background: 'bg-info/15',
      btnBg: 'bg-info',
      textColor: 'text-purple-50',
      cornerIcon: 'lucideKanban',
      cornerColor: 'text-info/10'
    }
  ];
}
