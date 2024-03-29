import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardWidgetComponent } from './card-widget/card-widget.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRouterComponent } from './dashboard-router/dashboard-router.component';
import { EventsComponent } from './events/events.component';
import { OverviewComponent } from './overview/overview.component';
import { TableCalendarComponent } from './table-calendar/table-calendar.component';


@NgModule({
  declarations: [DashboardComponent, CardWidgetComponent, DashboardRouterComponent, EventsComponent, OverviewComponent, TableCalendarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
