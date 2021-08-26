import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CalendarOptions, DateSelectArg, EventApi, FullCalendarComponent} from "@fullcalendar/angular";
import {EventClickArg} from "@fullcalendar/core";
import {createEventId, INITIAL_EVENTS} from "./event-utils";

@Component({
  selector: 'app-praticien-planning',
  templateUrl: './praticien-planning.component.html',
  styleUrls: ['./praticien-planning.component.scss']
})
export class PraticienPlanningComponent implements OnInit {

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'//listWeek
    },
    initialView: 'timeGridWeek',
 //   initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

 // handleCalendarToggle() {
  //  this.calendarVisible = !this.calendarVisible;
 // }

//  handleWeekendsToggle() {
//    const { calendarOptions } = this;
//    calendarOptions.weekends = !calendarOptions.weekends;
//  }


  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Entrez le nom de votre rendez-vous : ');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title:title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        extendedProps{
          
        }
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Etes-vous vraiment sûr de vouloir supprimer le rendez-vous ? '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  ngOnInit(): void {
  }


}
