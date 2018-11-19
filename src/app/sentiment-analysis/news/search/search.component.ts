import { Headlines } from './../headlines';
import { Article } from './../article';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  articles: Article[];
  headlines: Headlines;
  query: string;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.newsService.searchNews(this.query)
        .subscribe(articles => this.articles = articles);
  }



  updateArticle(article) {
    // let subscribers know the current article has changed
    this.newsService.updateArticle(article);
  }

}
