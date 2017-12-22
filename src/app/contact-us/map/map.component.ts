import { Component, OnInit } from '@angular/core';
import { AgmCoreModule} from '@agm/core'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 39.953108;
  lng: number = -75.172442;
  constructor() { }

  ngOnInit() {
  }

}
