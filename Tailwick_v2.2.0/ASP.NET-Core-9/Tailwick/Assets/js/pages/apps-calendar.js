/*
Template Name: Tailwik - TailwindCSS Admin & Dashboard Template
Author: Themesdesign
Website: https://themesdesign.in/
Contact: themesdesign.in@gmail.com
File: Calendar js
*/

import {Calendar} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, {Draggable} from '@fullcalendar/interaction';

class CalendarApp {
    constructor() {
        // Instance variables
        this.selectedEvent = null;
        this.newEventData = null;
    }

    init() {
        const getElement = (id) => document.getElementById(id);

        // Elements
        const calendarEl = getElement('calendar');
        const checkbox = getElement('drop-remove');
        const businessHoursCheckbox = getElement('businessCalendar');
        const weekNumberCalendar = getElement('weekNumberCalendar');
        const modalTitle = getElement('modal-title');
        const formEvent = getElement('form-event');
        const eventTitleInput = getElement('event-title');
        const externalEventContainerEl = getElement('external-events');
        const eventCategoryInput = getElement('event-category');
        const deleteEventBtn = getElement('btn-delete-event');
        const saveEventBtn = getElement('btn-save-event');

        // Helpers
        const initializeDraggable = () => {
            new Draggable(externalEventContainerEl, {
                itemSelector: '.external-event',
                eventData: (eventEl) => ({
                    title: eventEl.innerText,
                    classNames: eventEl.getAttribute('data-class'),
                }),
            });
        };

        const getDefaultEvents = () => {
            const date = new Date();
            const d = date.getDate();
            const m = date.getMonth();
            const y = date.getFullYear();
            return [
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d - 3, 16, 0),
                    allDay: false,
                    className: '!text-warning'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 4, 16, 0),
                    allDay: false,
                    className: '!text-primary'
                },
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    className: '!text-success'
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d - 5),
                    end: new Date(y, m, d - 2),
                    className: '!text-info'
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false,
                    className: '!text-danger'
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false,
                    className: '!text-success'
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false, className: '!text-info'
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/',
                    className: '!text-primary'
                }
            ];
        };

        const addNewEvent = (info) => {
            formEvent.classList.remove('was-validated');
            formEvent.reset();
            this.selectedEvent = null;
            modalTitle.innerText = 'Add Event';
            this.newEventData = info;
        };

        const getInitialView = () => {
            const w = window.innerWidth;
            if (w >= 768 && w < 1200) return 'timeGridWeek';
            else if (w <= 768) return 'listMonth';
            return 'dayGridMonth';
        };

        const getBusinessHours = () => (businessHoursCheckbox.checked ? {
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: '10:00',
            endTime: '18:00'
        } : []);

        const weekNumber = () => weekNumberCalendar.checked;

        // Listeners
        businessHoursCheckbox.addEventListener('change', () =>
            this.calendarObj.setOption('businessHours', getBusinessHours())
        );
        weekNumberCalendar.addEventListener('change', () =>
            this.calendarObj.setOption('weekNumbers', weekNumber())
        );

        // Calendar instance
        this.calendarObj = new Calendar(calendarEl, {
            timeZone: 'local',
            editable: true,
            droppable: true,
            selectable: true,
            weekNumbers: weekNumber(),
            initialView: getInitialView(),
            themeSystem: 'tailwindcss',
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
            headerToolbar: {
                left: 'prev,next,today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },
            drop: (info) => checkbox.checked && info.draggedEl.parentNode.removeChild(info.draggedEl),
            businessHours: getBusinessHours(),
            windowResize: (arg) => arg.view.calendar.changeView(getInitialView()),
            eventClick: (info) => {
                HSOverlay.open('#event-modal');
                formEvent.reset();
                eventTitleInput.value = '';
                this.selectedEvent = info.event;
                eventTitleInput.value = this.selectedEvent.title;
                eventCategoryInput.value = this.selectedEvent.classNames[0];
                deleteEventBtn.classList.remove('hidden');
                this.newEventData = null;
                saveEventBtn.innerText = 'Edit Event';
            },
            dateClick: (info) => {
                HSOverlay.open('#event-modal');
                addNewEvent(info);
                deleteEventBtn.classList.add('hidden');
            },
            events: getDefaultEvents(),
        });


        self.formEvent?.addEventListener('submit', (ev) => {
            ev.preventDefault();
            const updatedTitle = eventTitleInput.value;
            const updatedCategory = eventCategoryInput.value;
            if (!updatedTitle) return;

            if (this.selectedEvent) {
                this.selectedEvent.setProp('title', updatedTitle);
                this.selectedEvent.setProp('classNames', [updatedCategory]);
            } else {
                this.calendarObj.addEvent({
                    title: updatedTitle,
                    start: this.newEventData.date,
                    allDay: this.newEventData.allDay,
                    className: updatedCategory,
                });
            }
            HSOverlay.close('#event-modal');
        });

        self.deleteEventBtn?.addEventListener('click', () => {
            if (this.selectedEvent) {
                this.selectedEvent.remove();
                this.selectedEvent = null;
                HSOverlay.close('#event-modal');
            }
        });

        // Render and init external drag
        this.calendarObj.render();
        initializeDraggable();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    new CalendarApp().init();
});