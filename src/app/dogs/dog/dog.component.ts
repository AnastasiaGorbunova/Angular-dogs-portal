import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../shared/dog';

import {DogService} from '../shared/dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  @Input() dog: Dog;

  constructor(private dogService: DogService) { }

  ngOnInit() {
  }

  updateDog(): void {
    const { key, ...dog } = this.dog;
    this.dogService.setDog(key, dog);
  }
}
