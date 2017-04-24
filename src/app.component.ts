import { Component } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './aboutpage/aboutpage.component';
import { FooterComponent } from './appfooter/leveragefooter.component';
import { HeaderComponent } from './appheader/leverageheader.component';

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <div>
  	<leverage-header></leverage-header>
  	<router-outlet></router-outlet>
  	<leverage-footer></leverage-footer>
  </div>`,
})
export class AppComponent  {


 }
