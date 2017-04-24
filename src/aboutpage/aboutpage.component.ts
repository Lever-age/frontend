import { Component } from '@angular/core';
import { FooterComponent } from '../appfooter/leveragefooter.component';
import { HeaderComponent } from '../appheader/leverageheader.component';

@Component({
  selector: 'leverage-about-page',
  template: `
  <h1>Hello {{ about }}</h1>
  `
})
export class AboutPageComponent  { 
    private about: string = 'about';
    
    constructor() {}
}
