import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { DogService } from '@app/dogs/shared/dog.service';
import { Dog } from '@app/dogs/shared/dog';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {
  @Output() dogSelected: EventEmitter<Dog> = new EventEmitter();
  dogs$: Observable<Dog[]>;

  constructor(
    private dogService: DogService
  ) {
  }

  ngOnInit() {
    this.getDogsList();
  }

  getDogsList(): void {
    this.dogs$ = this.dogService.getDogsList();
  }

  onSelect(dog: Dog): void {
    this.dogSelected.next(dog);
  }
}
