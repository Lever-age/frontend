import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './aboutpage/about-page.component';
import { NotFoundComponent } from './notfound/not-found.component';

export const leverageroutes = [
    {
        path: '',
        component: HomepageComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutPageComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }    
];

