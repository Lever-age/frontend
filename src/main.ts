import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AboutPageComponent } from './aboutpage/aboutpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './appfooter/leveragefooter.component';
import { HeaderComponent } from './appheader/leverageheader.component';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
