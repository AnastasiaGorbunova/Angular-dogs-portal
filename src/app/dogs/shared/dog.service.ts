import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})

export class DogService {

  constructor(private db: AngularFireDatabase) {}

  getDogsList(): Observable<Dog[]> {
    return this.db.list<Dog>('/dogs')
      .valueChanges();
  }

  setDog(): Promise<any> {
    return  this.db.list('/dogs')
      .push({name: 'fdfdf', breed: 'kek'});
  }

  getDogById(dogId: string): Observable<Dog> {
    return this.db.object<Dog>(`/dogs/${dogId}`)
      .valueChanges();
  }
}
