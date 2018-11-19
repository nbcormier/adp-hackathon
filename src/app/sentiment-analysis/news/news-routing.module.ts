import { SearchComponent } from './search/search.component';
import { ArticleComponent } from './article/article.component';
import { NewsComponent } from './news.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: NewsComponent,
  children: [
    {
      path: '', redirectTo: 'headlines/all'
    },
    {
      path: 'headlines/:categoryId',
      component: HeadlinesComponent
    },
    {
      path: 'article',
      component: ArticleComponent
    },
    {
      path: 'search',
      component: SearchComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
