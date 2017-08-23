import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './aboutpage/about-page.component';
import { NotFoundComponent } from './notfound/not-found.component';
import { MayorListComponent } from './candidatelist/mayorlist.component';
import { CandidateDetailComponent } from './candidateDetail/candidatedetail.component';
import { CouncilListComponent } from './candidatelist/councilatlargelist.component';

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
        path: 'mayorlist',
        component: MayorListComponent,
        pathMatch: 'full'
    },
    {
        path: 'councilatlarge',
        component: CouncilListComponent,
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

