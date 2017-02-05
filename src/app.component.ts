import { Component } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './aboutpage/aboutpage.component';
import { FooterComponent } from './appfooter/leveragefooter.component';
import { HeaderComponent } from './appheader/leverageheader.component';

@Component({
  selector: 'my-app',
  template: `
  <leverage-homepage></leverage-homepage>`,
})
export class AppComponent  {


 }
