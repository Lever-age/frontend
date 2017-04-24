import { Component } from '@angular/core';
import {DropdownModule} from "ngx-dropdown";

import { Nav } from '../models/common/nav.model';

@Component({
  selector: 'leverage-header',
  template: `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
         <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" 
            data-target="#navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav"> 

            <!-- Dynamically generates header links from the nav array -->
            <!-- Add new navigation objects to the nav array -->
            <li
              *ngFor="let item of nav"
              class="dropdown" dropdown
              [routerLink]="item.link"
              [routerLinkActive]="item.linkactive"
              [routerLinkActiveOptions]="{ exact: item.exact }">

              <!-- Generates non-dropdown navigation links -->
              <a *ngIf="item.dropdown === false" class="nav-link">
                {{ item.name }}
              </a>

              <!-- Generates dropdown navigation links -->
              <a *ngIf="item.dropdown === true" dropdown-open>
                {{ item.name }} <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li 
                  *ngFor="let link of item.dropdownlinks">
                  <a> {{ link }} </a></li>
              </ul>

            </li>       
          </ul>
        </div>
      </div>
    </nav>
    `
})
export class HeaderComponent  { 
  constructor() {
  }    

  nav: Nav[] = [   // Add header navigation objects here. For dropdown omit 'link' and include 'dropdownlinks'.
    {
      link: '/',
      name: 'Home',
      exact: true,
      linkactive: 'active',
      dropdown: false
    },
    {
      name: 'Current Elections',
      exact: true,
      linkactive: 'inactive',
      dropdown: true,
      dropdownlinks: ['District Attorney Elections', 'City Controller Elections'],
    },
    {
      link: '/about',
      name: 'About',
      exact: true,
      linkactive: 'active',
      dropdown: false
    }
  ];
}
