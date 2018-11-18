import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories = [{
    id: 'all',
    display: 'All'
  }, {
    id: 'business',
    display: 'Business'
  }, {
    id: 'entertainment',
    display: 'Entertainment'
  }, {
    id: 'general',
    display: 'General'
  }, {
    id: 'health',
    display: 'Health'
  }, {
    id: 'science',
    display: 'Science'
  }, {
    id: 'sports',
    display: 'Sports'
  }, {
    id: 'technology',
    display: 'Technology'
  }]
}
