import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: L.Map;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initMap()
  }

  private initMap() : void{
    this.map = L.map('map').setView([48.10986687174439, -1.679305428315449], 12);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

  }
  

}
