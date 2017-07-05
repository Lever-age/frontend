import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// import {DropdownModule} from "ngx-dropdown";

import { leverageroutes } from './homepage.component.routes';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './aboutpage/about-page.component';
import { FooterComponent } from './appfooter/leverage-footer.component';
import { HeaderComponent } from './appheader/leverage-header.component';
import { NotFoundComponent } from './notfound/not-found.component';
import { MayorListComponent } from './candidatelist/mayorlist.component';
import { CouncilListComponent } from './candidatelist/councilatlargelist.component';
import { CandidateDetailComponent } from './candidateDetail/candidatedetail.component';
import { AppComponent }  from './app.component';
import { LeverageApiProxy } from './proxies/common/leverage-api.proxy';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { campaignSlice } from './reducers/campaignreducer';

// import { CouncilListActions } from './common/enum';


@NgModule({
  imports: [ 
    BrowserModule,
    /*DropdownModule,*/
    RouterModule.forRoot(leverageroutes),
    StoreModule.provideStore({ campaignSlice }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    HttpModule
    ],
  declarations: [ AppComponent, HomepageComponent, AboutPageComponent, MayorListComponent,
  CouncilListComponent, CandidateDetailComponent,
  FooterComponent, HeaderComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, LeverageApiProxy]
})
export class AppModule { }
