import { HeadlinesComponent } from './headlines/headlines.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from 'src/app/shared.module';
import { NewsComponent } from './news.component';
import { ArticleComponent } from './article/article.component';
import { NewsService } from './news.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [NewsComponent, HeadlinesComponent, ArticleComponent, SearchComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }
