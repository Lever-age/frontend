import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { leverageroutes } from './homepage.component.routes';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './aboutpage/aboutpage.component';
import { FooterComponent } from './appfooter/leveragefooter.component';
import { HeaderComponent } from './appheader/leverageheader.component';
import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule,
  RouterModule.forRoot([
    {
      path: 'homepagecomponent',
      component: HomepageComponent
    }
  ]) ],
  declarations: [ AppComponent, HomepageComponent, AboutPageComponent, 
  FooterComponent, HeaderComponent ],
  bootstrap:    [ AppComponent  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
