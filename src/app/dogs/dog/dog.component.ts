import { Component, OnInit, Input } from '@angular/core';

import { Dog } from '@app/dogs/shared/dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})

export class DogComponent implements OnInit {
  @Input() dog: Dog;

  constructor() {
  }

  ngOnInit() {
  }
}
