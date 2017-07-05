import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AboutPageComponent } from './aboutpage/about-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './appfooter/leverage-footer.component';
import { HeaderComponent } from './appheader/leverage-header.component';
import { MayorListComponent } from './candidatelist/mayorlist.component';
import { CouncilListComponent } from './candidatelist/councilatlargelist.component';
import { CandidateDetailComponent } from './candidateDetail/candidatedetail.component';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
