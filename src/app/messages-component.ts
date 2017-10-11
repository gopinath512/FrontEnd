import { Component } from '@angular/core'
import { WebService } from './web.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'messages',
    styleUrls: ['app.component.css'],
    template: `

    
  <mat-card class="example-card" *ngFor="let message of webService.messages | async"  >
  <a  [routerLink]="['/message',message.id]">
  <mat-card-header>
    <div md-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Sub Title</mat-card-subtitle>
  </mat-card-header>
  
  <img md-card-image src={{this.BASE_URL}}{{message.imgId}}  alt="Photo of a Shiba Inu"  class="example-card_size">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button md-button>LIKE</button>
    <button md-button>SHARE</button>
  </mat-card-actions>
  </a>
 </mat-card>
  

    
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