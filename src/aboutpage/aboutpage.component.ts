import { Component } from '@angular/core';
import { FooterComponent } from '../appfooter/leveragefooter.component';
import { HeaderComponent } from '../appheader/leverageheader.component';

@Component({
  selector: 'leverage-about-page',
  template: `
  <leverage-header></leverage-header>
  <h1>Hello {{ about }}</h1>
  <leverage-footer></leverage-footer>`,
})
export class AboutPageComponent  { 
    private about: string = 'about';
    
    constructor() {}
}
