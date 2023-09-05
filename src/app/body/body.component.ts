import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
view = 0;
  viewUpdated(viewChange:number){
this.view = viewChange
  }
  data: any = {};

  datum: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData().subscribe((res) => {
      this.data = res;
      console.log(this.data);
      console.log(this.data.summary);
      this.datum = Object.keys(this.data.summary).map((key) => {
        return { area: key, ...this.data.summary[key] };
      });
      console.log(this.datum);
    });
  }

  getData() {
    return this.http.get('https://keralastats.coronasafe.live/latest.json');
  }
}
