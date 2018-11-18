import { Article } from './../article';
import { Headlines } from './../headlines';
import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  categoryId: string;
  category: object;
  Headlines: Headlines;
  articles$: Observable<Article[]>;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private newsService: NewsService
    ) { }

  ngOnInit() {
    // get headlines (optionally by category)
    this.articles$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.newsService.getHeadlines(params.get('categoryId'))
      )
    );

    // pull in category id from route params
    this.route.paramMap.subscribe(routeParams => {
      this.category = this.newsService.getCategory(routeParams.get('categoryId'));
    });
  }

  updateArticle(article) {
    // let subscribers know the current article has changed
    this.newsService.updateArticle(article);
  }
}
