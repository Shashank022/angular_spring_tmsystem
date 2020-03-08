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
  public isVisible : boolean = false;

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
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

  getEventDetails(eventid){
    this.http.get(this.APP_URL + '/eventlist/').subscribe(
      data => {
        this.response = data;
        this.isVisible = true;
        console.log(data);
      },
      error => {
        console.log('Error occured', error);
      }
    );

  }

  deleteEvent(eventid){
    this.http.delete(this.APP_URL + '/eventlist/'+ eventid).subscribe(
      data => {
        this.response = data;
        console.log(data);
      },
      error => {
        console.log('Error occured', error);
      }
    );
    this.refreshPage();
  }

  refreshPage() {
   document.defaultView.location.reload();
  }


}
