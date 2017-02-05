import { Component } from '@angular/core';

@Component({
  selector: 'leverage-header',
  template: `
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <ul class="nav navbar-nav"> 
        <li class="active"><a href="/">Home</a></li>
        <li><a href="/">Data</a></li>
        <li><a href="/">About</a></li>
      </ul>
    </div>
  </nav>
  `
})
export class HeaderComponent  { 
    constructor() {
    }    

}
