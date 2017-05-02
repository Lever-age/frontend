"use strict";
var homepage_component_1 = require("./homepage/homepage.component");
var about_page_component_1 = require("./aboutpage/about-page.component");
var not_found_component_1 = require("./notfound/not-found.component");
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
        path: '**',
        component: not_found_component_1.NotFoundComponent
    }
];
//# sourceMappingURL=homepage.component.routes.js.map