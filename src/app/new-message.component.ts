import { Component , ViewChild} from '@angular/core'
import { WebService } from './web.service'
import { AuthService } from './auth.service'
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'new-message',
    template: `
        <md-card class="card">
            <md-card-content>
                <md-input-container>
                    <textarea [(ngModel)]="message.text" mdInput placeholder="Message"></textarea>
                  
                     </md-input-container>
                     <input type="file"  #fileInput placeholder="Upload file..." />
                <md-card-actions>
                    <button (click)="post()" md-button color="primary">POST</button>
                </md-card-actions>
            </md-card-content>
        </md-card>
    `
})
export class NewMessageComponent {
    @ViewChild('fileInput') fileInput;
    constructor(private webService : WebService, private auth: AuthService) {}

    message = {
        owner: this.auth.name,
        text: "",
         CatId:1,
        Type:1,
        ImgId:"",
        File:new FormData()      
    }

    post() {
        let fileBrowser = this.fileInput.nativeElement;
        if (fileBrowser.files && fileBrowser.files[0]) {
          const formData = new FormData();
          formData.append("File", fileBrowser.files[0]);
          this.webService.postMessage(this.message,formData);
            }
             
}
         
}