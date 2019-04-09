import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {DogComponent} from './dog/dog.component';
import {DogsListComponent} from './dogs-list/dogs-list.component';
import {DogsComponent} from './dogs.component';
import { DogsRoutingModule } from './dogs-routing.module';


@NgModule({
  declarations: [
    DogComponent,
    DogsListComponent,
    DogsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DogsRoutingModule,
  ]
})
export class DogsModule {}
