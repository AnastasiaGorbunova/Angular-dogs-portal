import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { combineLatest, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { DogService } from '@app/dogs/shared/dog.service';
import { Dog } from '@app/dogs/shared/dog';

import { New } from './new';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private db: AngularFireDatabase,
    private dogService: DogService) {
  }

  getNewsList(): Observable<New[]> {
    return this.db.list<New>('/news')
      .snapshotChanges()
      .pipe(
        map(newsSnapshots => newsSnapshots.map((newsSnapshot) => ({
            newId: newsSnapshot.key,
            ...newsSnapshot.payload.val()
          }))
        )
      );
  }

  getNewById(newId: string): Observable<New> {
    return this.db.object<New>(`/news/${newId}`)
      .valueChanges()
      .pipe(
        mergeMap((news) => {
          console.log('news', news, newId);
          return combineLatest(of(news), this.dogService.getDogById(news.dogId));
        }),
        map(([news, dog]: [New, Dog]): any => {
          return {
            ...news,
            newId,
            dog
          };
        })
      );
  }
}
