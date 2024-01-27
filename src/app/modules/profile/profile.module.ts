import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { AboutCardComponent } from 'src/app/modules/profile/about-card/about-card.component';
import { SkillsCardComponent } from 'src/app/modules/profile/skills-card/skills-card.component';
import { SocialCardComponent } from 'src/app/modules/profile/social-card/social-card.component';
import { WelcomCardComponent } from 'src/app/modules/profile/welcom-card/welcom-card.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    RouterModule
 
  ],
  declarations: [
    ProfileComponent,
    AboutCardComponent,
    SkillsCardComponent,
    SocialCardComponent,
    WelcomCardComponent 
  ]

})
export class ProfileModule { }
