import { Component } from '@angular/core';
import { PageTitle } from '../../../../components/page-title/page-title';
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';

type LeaveRecord = {
  title: string;   
  value: string;  
};

@Component({
  selector: 'app-create-hr-leave',
  imports: [PageTitle, FlatpickrDirective],
  templateUrl: './create-hr-leave.html',
  providers: [provideFlatpickrDefaults()],
  styles: ``
})
export class CreateHrLeave {
 leaveRecordData: LeaveRecord[] = [
  {
    title: "Medical Leave",
    value: '04'
  },
  {
    title: "Casual Leave",
    value: '08'
  },
  {
    title: "Sick Leave",
    value: '03'
  },
  {
    title: "Annual Leave",
    value: '12'
  },
  {
    title: "Use Leave",
    value: '09'
  },
  {
    title: "Remaining Leave",
    value: '18'
  }
];
}
