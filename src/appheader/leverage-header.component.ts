import { Component } from '@angular/core';
import { LeverageHeaderService } from '../appheader/service/leverageheader.service';
import { Nav } from '../models/common/nav.model';

@Component({
  selector: 'leverage-header',
  template: `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav"> 
            <li *ngFor="let item of leverageMenu"
              class="dropdown"
              [routerLink]="item.link"
              [routerLinkActive]="item.linkactive"
              [routerLinkActiveOptions]="{ exact: item.exact }">
              <a class="dropdown-toggle" data-toggle="dropdown" role="button">
                {{item.name}}
              </a>
              <ul *ngIf="item.subMenuItem" class="dropdown-menu">
                <li *ngFor="let subMenuItems of item.subMenuItem">
                  <a routerLink={{subMenuItems.link}} href="javascript:void(0)">
                    {{subMenuItems.name}}
                  </a>
                </li>
              </ul>
            </li>       
          </ul>
        </div>
      </div>
    </nav>
    `,
    providers: [LeverageHeaderService]
})
export class HeaderComponent {
  leverageMenu: Nav[]; 
  constructor(private leverageHeaderService: LeverageHeaderService) {
    this.leverageMenu = this.leverageHeaderService.loadMenu();
   }

  ngOnInit() {
    this.leverageMenu = this.leverageHeaderService.loadMenu();
  }

}
