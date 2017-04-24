"use strict";
var homepage_component_1 = require('./homepage/homepage.component');
var aboutpage_component_1 = require('./aboutpage/aboutpage.component');
var not_found_component_1 = require('./notfound/not-found.component');
exports.leverageroutes = [
    {
        path: '',
        component: homepage_component_1.HomepageComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: aboutpage_component_1.AboutPageComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: not_found_component_1.NotFoundComponent
    }
];
//# sourceMappingURL=homepage.component.routes.js.map