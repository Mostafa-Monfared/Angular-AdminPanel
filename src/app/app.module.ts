import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    AppComponent,
     ],
=======
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import {EventsComponent} from './modules/dashboard/events/events.component'

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent  ],
>>>>>>> 5186438 (Add apexchart)
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
<<<<<<< HEAD
=======
    SharedModule,
    DashboardModule,
    NgApexchartsModule,
    

>>>>>>> 5186438 (Add apexchart)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
