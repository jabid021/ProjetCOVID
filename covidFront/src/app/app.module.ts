import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import {AppComponent} from "./app.component";
import {PraticienPlanningComponent} from "./praticien-planning/praticien-planning.component";
import {AccueilComponent} from "./accueil/accueil.component"; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    PraticienPlanningComponent,
    AccueilComponent,

  ],
  imports: [
    BrowserModule,
    FullCalendarModule, // register FullCalendar with you app
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
