import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bus } from './bus';
//import { StarBus } from './starBus';
import { Observable } from 'rxjs';
import { element } from 'protractor';

export interface StarBus {
  nhits : number;
  parameters;
  records: Array<{
      datasetid : String;
      recordid : String;
      fields: Fields;
      geometry: Geometry;
      record_timestamp : String;
  }>;
}

export interface Fields {
  sens : string;
  numerobus : number;
  idbus : string;
  idligne : string;
  etat : string;
  destination : string;
  nomcourtligne : string;
  ecartsecondes : string;
  coordonnees : number[];
}

export interface Geometry {
  type : String;
  coordinates : number[];
}

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private url = 'https://data.explore.star.fr/api/records/1.0/search/?dataset=tco-bus-vehicules-position-tr&q=&facet=numerobus&facet=nomcourtligne&facet=sens&facet=destination&refine.etat=En+ligne';
  private nbBus : number;
  private data: StarBus;
  busList : bus[];
  i : number;


  constructor(private http: HttpClient) { }

  public getBuses(): Observable<StarBus>{
      return this.http.get<StarBus>(this.url);
  }

}  
