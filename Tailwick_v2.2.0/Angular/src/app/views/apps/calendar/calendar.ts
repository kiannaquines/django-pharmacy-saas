import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventApi, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { FormsModule } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import { PageTitle } from "../../../components/page-title/page-title";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule, FormsModule, NgIcon, PageTitle],
  templateUrl: './calendar.html',
  styles: ``,
})
export class Calendar implements OnInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  currentEventTitle = '';
  currentEventVariant = '';
  currentEditingEvent: EventApi | null = null;
  selectedDate: Date | null = null;

  calendarOptions!: CalendarOptions;
  defaultEvents: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.defaultEvents = [
      { title: 'Repeating Event', start: this.offsetDate(-3), allDay: false, className: ['!text-warning'] },
      { title: 'Repeating Event', start: this.offsetDate(4), allDay: false, className: ['!text-primary'] },
      { title: 'All Day Event', start: this.offsetDate(0), className: ['!text-success'] },
      { title: 'Long Event', start: this.offsetDate(-5), end: this.offsetDate(-2), className: ['!text-info'] },
      { title: 'Meeting', start: this.offsetDate(0, 10, 30), allDay: false, className: ['!text-danger'] },
      { title: 'Lunch', start: this.offsetDate(0, 12, 0), end: this.offsetDate(0, 14, 0), allDay: false, className: ['!text-success'] },
      { title: 'Birthday Party', start: this.offsetDate(1, 19, 0), end: this.offsetDate(1, 22, 30), allDay: false, className: ['!text-info'] },
      { title: 'Click for Google', start: this.offsetDate(28), end: this.offsetDate(29), url: 'http://google.com/', className: ['!text-primary'] },
    ];

    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
      initialView: this.getInitialView(),
      themeSystem: 'tailwindcss',
      editable: true,
      droppable: true,
      selectable: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
      },
      events: this.defaultEvents,
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      drop: (info) => {
        const checkbox = document.getElementById('drop-remove') as HTMLInputElement;
        if (checkbox?.checked && info.draggedEl?.parentNode) {
          info.draggedEl.parentNode.removeChild(info.draggedEl);
        }
      },
      eventDidMount: (info) => {
        if (info.event.classNames?.length) {
          info.el.classList.add(...info.event.classNames);
        }
      },
    };
  }

  ngAfterViewInit(): void {
    const externalEl = document.getElementById('external-events');
    if (externalEl) {
      new Draggable(externalEl, {
        itemSelector: '.external-event',
        eventData: (eventEl) => ({
          title: eventEl.innerText.trim(),
          className: [eventEl.getAttribute('data-class') || '!text-primary'],
        }),
      });
    }
  }

  offsetDate(days: number, hour: number = 0, min: number = 0): Date {
    const date = new Date();
    date.setDate(date.getDate() + days);
    date.setHours(hour, min, 0, 0);
    return date;
  }

  getInitialView(): string {
    const w = window.innerWidth;
    if (w >= 768 && w < 1200) return 'timeGridWeek';
    if (w <= 768) return 'listMonth';
    return 'dayGridMonth';
  }

  handleDateClick(arg: any): void {
    this.selectedDate = arg.date;
    this.currentEditingEvent = null;
    this.currentEventTitle = '';
    this.currentEventVariant = '!text-primary';

    this.cdr.detectChanges(); 
    this.openHSModal('#event-modal');
  }

  handleEventClick(arg: EventClickArg): void {
    this.currentEditingEvent = arg.event;
    this.currentEventTitle = arg.event.title;
    this.currentEventVariant = arg.event.classNames?.[0] || '!text-primary';

    this.cdr.detectChanges(); 
    this.openHSModal('#event-modal');
  }

  openHSModal(id: string) {
    const el = document.querySelector(id) as HTMLElement;
    if (el && (window as any).HSOverlay) {
      (window as any).HSOverlay.open(el);
    }
  }

  closeHSModal(id: string) {
    const el = document.querySelector(id) as HTMLElement;
    if (el && (window as any).HSOverlay) {
      (window as any).HSOverlay.close(el);
    }
  }

  saveEvent(): void {
    if (!this.currentEventTitle || !this.currentEventVariant) return;

    const calendarApi = this.calendarComponent.getApi();

    if (this.currentEditingEvent) {
      const oldEvent = this.currentEditingEvent.toPlainObject();
      this.currentEditingEvent.remove();
      calendarApi.addEvent({
        ...oldEvent,
        title: this.currentEventTitle,
        className: [this.currentEventVariant],
      });
    } else {
      calendarApi.addEvent({
        id: String(Date.now()),
        title: this.currentEventTitle,
        start: this.selectedDate ?? new Date(),
        allDay: true,
        className: [this.currentEventVariant],
      });
    }

    this.closeHSModal('#event-modal');
    this.resetForm();
  }

  deleteEvent(): void {
    this.currentEditingEvent?.remove();
    this.closeHSModal('#event-modal');
    this.resetForm();
  }

  private resetForm() {
    this.selectedDate = null;
    this.currentEventTitle = '';
    this.currentEventVariant = '';
    this.currentEditingEvent = null;
  }
}
