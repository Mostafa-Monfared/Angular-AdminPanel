import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { UserDataService } from './services/user-data.service';
import { HttpClientModule } from '@angular/common/http';

// import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule 
    // CoreRoutingModule
  ],
  providers:[UserDataService]
})
export class CoreModule { }
