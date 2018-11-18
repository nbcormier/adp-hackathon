import { Article } from './../article';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../news.service';

import { Subscription }   from 'rxjs';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnDestroy {
  article: Article;
  subscription: Subscription;

  constructor(private newsService: NewsService) {
    this.subscription = newsService.articleUpdated$.subscribe(
      article => {
        console.log('recieving', article)
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
