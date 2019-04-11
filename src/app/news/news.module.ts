import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NewsComponent} from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewDetailsComponent } from './new-details/new-details.component';


@NgModule({
  declarations: [
    NewsComponent,
    NewsListComponent,
    NewDetailsComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})

export class NewsModule { }
