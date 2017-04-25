import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './aboutpage/about-page.component';
import { NotFoundComponent } from './notfound/not-found.component';
import { CandidateListComponent } from './candidatelist/candidatelist.component';
import { CandidateDetailComponent } from './candidateDetail/candidatedetail.component';

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
        path: 'candidatelist',
        component: CandidateListComponent,
        pathMatch: 'full'
    },
    {
        path: 'candidatedetail',
        component: CandidateDetailComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

