import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { NewsService } from '@app/news/shared/news.service';
import { New } from '@app/news/shared/new';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})

export class NewsListComponent implements OnInit {
  @Output() newSelected: EventEmitter<New> = new EventEmitter();

  news$: Observable<New[]>;
  new: Observable<New>;

  constructor(
    private newsService: NewsService
  ) {
  }

  ngOnInit() {
    this.getNewsList();
  }

  getNewsList(): void {
    this.news$ = this.newsService.getNewsList();
  }

  getNewById(newId: string): Observable<New> {
    console.log(this.newsService.getNewById(newId).subscribe(value => console.log(value)));
    return this.newsService.getNewById(newId);
  }

  onSelect(newDetails: New): void {
    this.getNewById(newDetails.newId).subscribe(value => this.newSelected.emit(value));
  }
}
