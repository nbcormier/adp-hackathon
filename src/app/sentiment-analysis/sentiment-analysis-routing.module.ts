import { HeadlinesComponent } from './news/headlines/headlines.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SentimentAnalysisComponent } from './sentiment-analysis.component';
import { TwitterComponent } from './twitter/twitter.component';

const routes: Routes = [{
    path: '',
    component: SentimentAnalysisComponent,
    children: [
      {
        path: '', redirectTo: 'news', pathMatch: 'full'
      },
      {
        path: 'twitter',
        component: TwitterComponent
      },
      {
        path: 'news',
        loadChildren: './news/news.module#NewsModule'
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SentimentAnalysisRoutingModule { }
