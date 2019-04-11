import { Component, OnInit } from '@angular/core';

import { Dog } from './shared/dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})

export class DogsComponent implements OnInit {
  selectedDog: Dog;

  constructor() {
  }

  onDogSelected(dog: Dog): void {
    this.selectedDog = dog;
  }

  ngOnInit() {
  }
}
