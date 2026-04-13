import { Component } from '@angular/core';
import { PageTitle } from "../../../../components/page-title/page-title";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';

type LeaveSummary = {
  type: string;  
  days: number;   
}

@Component({
  selector: 'app-create-employe-leave',
  imports: [PageTitle, FlatpickrDirective],
  templateUrl: './create-employe-leave.html',
  providers: [provideFlatpickrDefaults()],
  styles: ``
})
export class CreateEmployeLeave {
leaveSummary: LeaveSummary[] = [
  { type: "Medical Leave",    days: 4 },
  { type: "Casual Leave",     days: 8 },
  { type: "Sick Leave",       days: 3 },
  { type: "Annual Leave",     days: 12 },
  { type: "Use Leave",        days: 9 },
  { type: "Remaining Leave",  days: 18 }
];
}
