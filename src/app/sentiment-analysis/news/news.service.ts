import { Headlines } from './headlines';
import { Article } from './article';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class NewsService {
  private apiKey = '5398158955e34fc69bc476beb125f1bb'

  constructor(private http: HttpClient) { }

  // Observable sources
  private articleSource = new BehaviorSubject<Article>(new Article);
  
  // Observable streams
  articleUpdated$ = this.articleSource.asObservable();
  
  // Service commands
  updateArticle(article: Article) {
    this.articleSource.next(article);
  }

  // get list of all categories
  getCategories() {
    return this.categories;
  }

  // return category given by id
  getCategory(id) {
    for(let category of this.categories) {
      if(category.id === id) {
        return category;
      }
    }
    // category not found
    return {};
  }

  getHeadlines(categoryId?: string): Observable<Article[]> {
    console.log('category: ' + categoryId);
    if (categoryId === 'all') {
      // 'all' category is internal to this app
      categoryId = '';
    }
    const options = {
      params: {
        'apiKey': this.apiKey,
        'country': 'us',
        'category': categoryId ? categoryId : ''
      }
    }

    return this.http.get<Headlines>('https://newsapi.org/v2/top-headlines', options)
      .pipe(map(headlines => {
        // only return articles
        return headlines.articles;
      })
    );
  }

  // category options (https://newsapi.org/docs/endpoints/top-headlines)
  private categories = [{
    id: 'all',
    display: 'All',
    color: ''
  }, {
    id: 'business',
    display: 'Business',
    color: 'purple'
  }, {
    id: 'entertainment',
    display: 'Entertainment',
    color: 'purple'
  }, {
    id: 'general',
    display: 'General',
    color: 'blue'
  }, {
    id: 'health',
    display: 'Health',
    color: 'blue'
  }, {
    id: 'science',
    display: 'Science',
    color: 'light-blue'
  }, {
    id: 'sports',
    display: 'Sports',
    color: 'orange'
  }, {
    id: 'technology',
    display: 'Technology',
    color: 'light-blue'
  }]
}
