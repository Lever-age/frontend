import { Component } from '@angular/core';

@Component({
  selector: 'leverage-about-page',
  template: `
  <h1>Hello {{ about }}</h1>`,
})
export class AboutPageComponent  { 
    private about: string;
    
    constructor() {}    

}
