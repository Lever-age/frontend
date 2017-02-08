import { Component } from '@angular/core';

@Component({
  selector: 'leverage-footer',
  template: `
  <div class="footer-container navbar-fixed-bottom">

  </div>
  `,
  styles: [`
.footer-container {
    width: 100%;
    background-color: gray;
    height: 50px;
}
`]
})
export class FooterComponent  { 
    constructor() {
    }    

}
