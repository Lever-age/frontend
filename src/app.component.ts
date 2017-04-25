import { Component } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './aboutpage/about-page.component';
import { FooterComponent } from './appfooter/leverage-footer.component';
import { HeaderComponent } from './appheader/leverage-header.component';
import { CandidateListComponent } from './candidatelist/candidatelist.component';
import { CandidateDetailComponent } from './candidateDetail/candidatedetail.component';

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
