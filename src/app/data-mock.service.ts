import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IData } from './IData';
import { DATA } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataMockService {

  constructor() { }

  getAll(): Observable<IData[]>{
    return of(DATA);
  }

  getMonsters(): Observable<IData[]>{
    return of(DATA.filter(d => d.category == "monster"));
  }

  getCreatures(): Observable<IData[]>{
    return of(DATA.filter(d => (d.category == "creatureFood" || d.category == "creatureNoFood")));
  }

}
