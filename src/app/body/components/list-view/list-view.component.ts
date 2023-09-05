import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {

title= ["Area", "Active", "Confirmed", "Recovered","Home-obs", "Hospitl-obs", "Total-obs"]


     @Input('covidDatum') covidData =[]
}
