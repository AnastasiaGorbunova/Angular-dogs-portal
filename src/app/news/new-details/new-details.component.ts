import { Component, OnInit, Input } from '@angular/core';

import { New } from '@app/news/shared/new';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.css']
})

export class NewDetailsComponent implements OnInit {
  @Input() new: New;

  constructor() {
  }

  ngOnInit() {
  }
}
