import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['../../../node_modules/bootstrap/scss/bootstrap.scss',
  './contact-me.component.scss'
]
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}




// // import {Http} from "@angular/common/http";


// @Component({
//   selector: 'app-mailer',
//   template: '<button (click)="sendEmail()">Send the Email</button>'
// })
// export class MailerComponent implements OnInit {

//   email : string;
//   name : string;
//   message : string;
//   endpoint : string;

//   http : Http;

//   constructor(http : Http) {
//     this.http = http;
//   }

//   ngOnInit() {
//     //This data could really come from some inputs on the interface - but let's keep it simple.
//     this.email = "hpierce@example.com";
//     this.name = "Hayden Pierce";
//     this.message = "Hello, this is Hayden.";

//     //Start php via the built in server: $ php -S localhost:8000
//     this.endpoint = "http://localhost:8000/sendEmail.php";
//   }

//   sendEmail(){
//     let postVars = {
//       email : this.email,
//       name : this.name,
//       message : this.message
//     };

//     //You may also want to check the response. But again, let's keep it simple.
//     this.http.post(this.endpoint, postVars)
//         .subscribe(
//             response => console.log(response),
//             response => console.log(response)
//         )
//   }
// }