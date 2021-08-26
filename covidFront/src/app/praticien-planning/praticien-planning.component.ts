import { Component, OnInit } from '@angular/core';
import {Calendar, CalendarOptions} from '@fullcalendar/angular'; // useful for typechecking
import { formatDate } from '@fullcalendar/angular';
@Component({
  selector: 'app-praticien-planning',
  templateUrl: './praticien-planning.component.html',
  styleUrls: ['./praticien-planning.component.scss']
})
export class PraticienPlanningComponent implements OnInit {

  constructor()
  {
  }
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',

    dateClick: this.handleDateClick.bind(this), // bind is important!
    weekends: false, // initial value
    events: [
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick() {
    alert('date click! ');
  }
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
  ngOnInit(): void {
    let str = formatDate(new Date(), {
      month: 'long',
      year: 'numeric',
      day: 'numeric'
    });

    console.log("Date du jour  "+str);
  }

}
