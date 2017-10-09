import { Component } from '@angular/core'
import { WebService } from './web.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'messageDetail',
    template: `

 <div>Test Application</div>
    
    `

})
export class MessageDetailComponent {
  BASE_URL = 'http://localhost:10801/images/';
    constructor(private webService : WebService, private route: ActivatedRoute) {}

    ngOnInit(){
        var id = this.route.snapshot.params['id'];
        this.webService.getMessagesById(id);
        this.webService.getUser().subscribe();
    }
}