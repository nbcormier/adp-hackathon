import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../news.service';

import { Subscription }   from 'rxjs';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnDestroy {
  article: any;
  subscription: Subscription;

  constructor(private newsService: NewsService) {
    this.subscription = newsService.missionAnnounced$.subscribe(
      mission => {
        console.log('recieving', mission)
        this.article = mission;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
