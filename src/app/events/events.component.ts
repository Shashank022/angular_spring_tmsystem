import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  private APP_URL : string = "http://localhost:5020";
  public response: any;
  public isVisible : boolean;

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
  }

  getListofAllEvents(){
    this.http.get(this.APP_URL + '/eventlist').subscribe(
      data => {
        this.response = data;
        console.log(data);
      },
      error => {
        console.log('Error occured', error);
      }
    );


  }


 

}
