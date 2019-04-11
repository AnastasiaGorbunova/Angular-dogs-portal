import { Component, OnInit } from '@angular/core';

import {New} from './shared/new';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  selectedNew: New;

  constructor() {
  }

  ngOnInit() {
  }

  onNewSelected(newDetails: New): void {
    this.selectedNew = newDetails;
  }
}
