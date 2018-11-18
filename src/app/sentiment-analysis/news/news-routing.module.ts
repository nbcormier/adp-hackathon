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
      path: 'headlines/:category',
      component: HeadlinesComponent
    },
    {
      path: 'article',
      component: ArticleComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
