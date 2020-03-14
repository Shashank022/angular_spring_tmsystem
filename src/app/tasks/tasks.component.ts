import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private http:HttpClient) { }

  private APP_URL : string = "http://localhost:3000/api/";
  public response: any;

  ngOnInit(): void {
    this.http.get(this.APP_URL + 'tasks').subscribe(
      data => {
        this.response = data;
        console.log(data);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  getTaskDetails(taskid){
    this.http.get(this.APP_URL ).subscribe(
      data => {
        this.response = data;
        console.log(data);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  deleteTask(taskid){
    this.http.delete(this.APP_URL + taskid).subscribe(
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
