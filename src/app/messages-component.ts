import { Component } from '@angular/core'
import { WebService } from './web.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'messages',
    styleUrls: ['app.component.css'],
    template: `

    
  <md-card class="example-card" *ngFor="let message of webService.messages | async"  >
  <a  [routerLink]="['/message',message.id]">
  <md-card-header>
    <div md-card-avatar class="example-header-image"></div>
    <md-card-title>Shiba Inu</md-card-title>
    <md-card-subtitle>Sub Title</md-card-subtitle>
  </md-card-header>
  
  <img md-card-image src={{this.BASE_URL}}{{message.imgId}}  alt="Photo of a Shiba Inu"  class="example-card_size">
  <md-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </md-card-content>
  <md-card-actions>
    <button md-button>LIKE</button>
    <button md-button>SHARE</button>
  </md-card-actions>
  </a>
  </md-card>
  

    
    `

})
export class MessagesComponent {
  BASE_URL = 'http://localhost:10801/images/';
    constructor(private webService : WebService, private route: ActivatedRoute) {}

    ngOnInit(){
        var name = this.route.snapshot.params['id'];
        this.webService.getMessages(name);
        this.webService.getUser().subscribe();
    }
}