import { BusService } from './../bus.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';
import { StarBus } from './../bus.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: L.Map;
  constructor(private busService: BusService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initMap()
    this.printBus()
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

  private printBus() :void{
    //console.log(this.busService.getBuses())
    this.busService.getBuses().subscribe(uselessdata => {
      this.busService.getBusesGoodnumbers(uselessdata.nhits).subscribe(data => {
        data.records.forEach(bus => {
      
          L.marker([bus.fields.coordonnees[0],bus.fields.coordonnees[1]]).addTo(this.map).bindPopup("Ligne : "+bus.fields.nomcourtligne +"\nDirection : "+bus.fields.destination).addTo(this.map);
        });
      })

     
    })
    
   
  }
  

}
