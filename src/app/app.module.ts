import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './core/interceptors/api.interceptors';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    NgApexchartsModule,
    FormsModule,
    CoreModule,
    HttpClientModule 

  ],
  providers:[
    { provide: HTTP_INTERCEPTORS,
       useClass: ApiInterceptor,
        multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
