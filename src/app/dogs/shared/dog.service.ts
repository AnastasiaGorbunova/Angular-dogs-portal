import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Dog} from './dog';


@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private db: AngularFireDatabase) {
  }

  getDogsList(): Observable<Dog[]> {
    return this.db.list<Dog>('/dogs')
      .snapshotChanges()
      .pipe(
        map(dogsSnapshots => dogsSnapshots.map((dogsSnapshot) => ({
            key: dogsSnapshot.key,
            ...dogsSnapshot.payload.val()
          }))
        )
      );
  }

  addDog(dog: Dog): Promise<any> {
    return this.db.list('/dogs')
      .push(dog);
  }

  setDog(dogId: string, dog: Dog): Promise<any> {
    return this.db.object(`/dogs/${dogId}`)
      .update(dog);
  }
}
