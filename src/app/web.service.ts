import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx'

import { AuthService } from './auth.service';

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:10801/api';

    private messageStore = [];

    private messageSubjet = new Subject();
    
    messages = this.messageSubjet.asObservable();

    constructor(private http: Http, private auth: AuthService) {
        this.getMessages('');
    }

    getMessages(user) {
        user = (user) ? '/' + user : '';
        this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
            this.messageStore = response.json();
            this.messageSubjet.next(this.messageStore);
        }, error => {
            this.handleError("Unable to get messages");
        });
    }

    getMessagesById(id) {
        id = (id) ? '/' + id : '';
        this.http.get(this.BASE_URL + '/messages/message' + id).subscribe(response => {
            this.messageStore = response.json();
            this.messageSubjet.next(this.messageStore);
        }, error => {
            this.handleError("Unable to get messages");
        });
    }
    async postMessage(message:any,file:any) {
        try {
             var fileresponse = await this.http.post(this.BASE_URL + '/messages/upload', file).toPromise();
             console.log("Hello");
            console.log(fileresponse.json());
            if(fileresponse.json().success)
            {
              console.log(fileresponse.json());
              message.ImgId=fileresponse.json().imageID;
              var response = await this.http.post(this.BASE_URL + '/messages', message,this.auth.tokenHeader).toPromise();
               this.messageStore.push(response.json());
               this.messageSubjet.next(this.messageStore);
            }
           
        } catch (error) {
            this.handleError("Unable to post message");
        }

    }

    getUser() {
        return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeader).map(res => res.json());
    }

    saveUser(userData) {
        return this.http.post(this.BASE_URL + '/users/me', userData,this.auth.tokenHeader).map(res => res.json());
    }

    private handleError(error) {
        console.error(error);
        //this.sb.open(error, 'close', { duration: 2000 });
    }
}