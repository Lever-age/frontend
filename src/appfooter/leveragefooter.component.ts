import { Component } from '@angular/core';

@Component({
  selector: 'leverage-footer',
  template: `
  <div class="footer-container navbar-fixed-bottom">
    <div class="pull-left"><p class="footer-text">Leverage</p></div>
    <div class="pull-right"><p class="footer-text">Contact Us</p></div>
  </div>
  `,
  styles: [`
.footer-container {
    width: 100%;
    background-color: gray;
    height: 50px;
}
.footer-text {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #fff;
    padding-left: 20px;
    padding-right: 20px;
}
`]
})
export class FooterComponent  { 
    constructor() {
    }    

}
