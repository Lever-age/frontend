"use strict";
var homepage_component_1 = require('./homepage/homepage.component');
var about_page_component_1 = require('./aboutpage/about-page.component');
var not_found_component_1 = require('./notfound/not-found.component');
var candidatelist_component_1 = require('./candidatelist/candidatelist.component');
var candidatedetail_component_1 = require('./candidateDetail/candidatedetail.component');
exports.leverageroutes = [
    {
        path: '',
        component: homepage_component_1.HomepageComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: about_page_component_1.AboutPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'candidatelist',
        component: candidatelist_component_1.CandidateListComponent,
        pathMatch: 'full'
    },
    {
        path: 'candidatedetail',
        component: candidatedetail_component_1.CandidateDetailComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: not_found_component_1.NotFoundComponent
    }
];
//# sourceMappingURL=homepage.component.routes.js.map