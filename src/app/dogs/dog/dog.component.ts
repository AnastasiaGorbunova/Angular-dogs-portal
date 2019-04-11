import { Component, OnInit, Input } from '@angular/core';

import { DogService } from '@app/dogs/shared/dog.service';
import { Dog } from '@app/dogs/shared/dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  @Input() dog: Dog;

  constructor(private dogService: DogService) {
  }

  ngOnInit() {
  }

  updateDog(): void {
    const { key, ...dog } = this.dog;
    this.dogService.setDog(key, dog);
  }
}
