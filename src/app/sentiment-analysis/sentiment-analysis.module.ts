import { NgModule } from '@angular/core';

import { SentimentAnalysisRoutingModule } from './sentiment-analysis-routing.module';
import { SentimentAnalysisComponent } from './sentiment-analysis.component';
import { TwitterComponent } from './twitter/twitter.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [SentimentAnalysisComponent, TwitterComponent],
  imports: [
    SharedModule,
    SentimentAnalysisRoutingModule
  ]
})
export class SentimentAnalysisModule { }
