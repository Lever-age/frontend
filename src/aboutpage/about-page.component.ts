import { Component } from '@angular/core';
import { FooterComponent } from '../appfooter/leverage-footer.component';
import { HeaderComponent } from '../appheader/leverage-header.component';

@Component({
  selector: 'leverage-about-page',
  template: `
  <div class="container">
      <div class="row">
        <div class="page-header">
          <h1>About Leverage</h1>
        </div>
        <p>Leverage takes Philadelphia campaign finance data, analyzes it, and makes it easy for anyone to consume. Our goal is to empower citizens of Philadelphia to use campaign finance data when making informed decisions about who they donate to, who they support, and who they vote for.</p>

        <p>The foundation of Leverage is the campaign finance data published by the City of Philadelphia. We apply machine learning techniques to the data to pull out trends and patterns. Finally, we add a layer of simple visualization on top of the analyzed data, allowing any citizen to access the information and understand how candidates are funded.</p>
      </div>
      <div class="row">
        <h2>Our Guiding Principles</h2>
        <ul>
          <li>Empower citizens to make informed decisions.</li>
          <li>Don't single out individual donors; don't facilitate punitive actions.</li>
          <li>Design visualizations so they can be consumed by anyone.</li>
        </ul>
      </div>
      <div class="row">
        <h2>About the Team</h2>
        <p>The team is group of volunteers that strives to create positive social and political change through technology. We come from a variety of backgrounds, industries, and professions.</p>

        <p>The team formed during the Code for Philly Democracy Hackathon in March 2016.</p>
      </div>
      <div class="row">
        <h2>Thank you</h2>
        <p>Special thanks for support and assistance goes to:</p>
        <ul>
          <li><a src="https://codeforphilly.org/">Code for Philly</a></li>
        </ul>
      </div>
      </div>
  `
})
export class AboutPageComponent  { 
    private about: string = 'about';
    
    constructor() {}
}
