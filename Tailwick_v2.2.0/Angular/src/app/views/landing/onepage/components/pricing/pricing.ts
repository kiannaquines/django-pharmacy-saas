import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";

type PlanFeature = {
  label: string;
  highlight?: string;
  available: boolean;
}

type Plan = {
  title: string;
  description: string;
  price: string;
  period: string;
  icon: string;
  iconColor: string;
  buttonText: string;
  saleBadge?: string;
  features: PlanFeature[];
}

@Component({
  selector: 'app-pricing',
  imports: [NgIcon],
  templateUrl: './pricing.html',
  styles: ``
})

export class Pricing {
  
  plans: Plan[] = [
  {
    title: "Lite",
    description: "Perfect plan for Lite",
    price: "9.99",
    period: "/Monthly",
    icon: "lucideGoal",
    iconColor: "text-success",
    buttonText: "Purchase Now",
    features: [
      { label: "Projects", highlight: "3", available: true },
      { label: "Customers", highlight: "299", available: true },
      { label: "Scalable Bandwidth", available: true },
      { label: "No Team Account", highlight: "0", available: true },
      { label: "In app messaging", available: false },
      { label: "5 FTP Login", available: false },
      { label: "Detailed Analytics", available: false },
      { label: "Custom Domain", available: false },
      { label: "Smart Workflow", available: false },
      { label: "IQ test", available: false }
    ]
  },
  {
    title: "Professional",
    description: "For users who want to do more.",
    price: "29.99",
    period: "/Monthly",
    icon: "lucideGraduationCap",
    iconColor: "text-secondary",
    buttonText: "Purchase Now",
    features: [
      { label: "Projects", highlight: "3", available: true },
      { label: "Customers", highlight: "299", available: true },
      { label: "Scalable Bandwidth", available: true },
      { label: "No Team Account", highlight: "3", available: true },
      { label: "In app messaging", available: true },
      { label: "5 FTP Login", available: false },
      { label: "Detailed Analytics", available: false },
      { label: "Custom Domain", available: false },
      { label: "Smart Workflow", available: false },
      { label: "IQ test", available: false }
    ]
  },
  {
    title: "Enterprise",
    description: "Run your company on your teams",
    price: "39.99",
    period: "/Monthly",
    icon: "lucideCrown",
    iconColor: "text-primary",
    buttonText: "Purchase Now",
    saleBadge: "25% Sale",
    features: [
      { label: "Projects", highlight: "3", available: true },
      { label: "Customers", highlight: "299", available: true },
      { label: "Scalable Bandwidth", available: true },
      { label: "No Team Account", highlight: "3", available: true },
      { label: "In app messaging", available: true },
      { label: "5 FTP Login", available: true },
      { label: "Detailed Analytics", available: true },
      { label: "Custom Domain", available: false },
      { label: "Smart Workflow", available: false },
      { label: "IQ test", available: false }
    ]
  },
  {
    title: "Unlimited",
    description: "Your entire team in one place",
    price: "49.99",
    period: "/Monthly",
    icon: "lucideLuggage",
    iconColor: "text-danger",
    buttonText: "Purchase Now",
    features: [
      { label: "Projects", highlight: "3", available: true },
      { label: "Customers", highlight: "299", available: true },
      { label: "Scalable Bandwidth", available: true },
      { label: "No Team Account", highlight: "3", available: true },
      { label: "In app messaging", available: true },
      { label: "5 FTP Login", available: true },
      { label: "Detailed Analytics", available: true },
      { label: "Custom Domain", available: true },
      { label: "Smart Workflow", available: true },
      { label: "IQ test", available: true }
    ]
  }
];

}
