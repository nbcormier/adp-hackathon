import { Headlines } from './headlines';
import { Article } from './article';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
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

  searchNews(query: string, categoryId?: string): Observable<Article[]> {
    const options = {
      params: {
        'apiKey': this.apiKey,
        'category': categoryId ? categoryId : '',
        'q': query
      }
    }

    return this.http.get<Headlines>('https://newsapi.org/v2/everything', options)
      .pipe(map(headlines => {
        // only return articles
        return headlines.articles;
      })
    );
  }

  getHeadlines(categoryId?: string): Observable<Article[]> {
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

    //return of(this.articles);

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

  private articles = [
      {
          "source": {
              "id": "cbs-news",
              "name": "CBS News"
          },
          "author": "Caroline Linton",
          "title": "Former Vice President Joe Biden adopts rescue dog named Major",
          "description": "The Bidens fostered Major before adopting him, the shelter said",
          "url": "https://www.cbsnews.com/news/joe-biden-adopts-german-shepherd-major-delaware-humane-soceity-today-2018-11-17/",
          "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2018/11/18/a1683953-8e60-439d-877d-635a60b2d897/thumbnail/1200x630/b13fa89883d187eb23531d9b1f0c0843/joe-biden-rescue-dog-2018-11-17.jpg",
          "publishedAt": "2018-11-18T03:53:00Z",
          "content": "Former Vice President Joe Biden adopted a rescue German shepherd named Major, the Biden family said in a statement that the Delaware Humane Society posted on Facebook. Major joins the Bidens' other German shepherd, named Champ. The Delaware Humane Society wro… [+1020 chars]"
      },
      {
          "source": {
              "id": "usa-today",
              "name": "USA Today"
          },
          "author": "Matt Eppers",
          "title": "76ers' Jimmy Butler hits game-winning 3 to spoil Kemba Walker's Hornets-record 60 points",
          "description": "Kemba Walker scored a team-record 60 points, but Jimmy Butler spoiled the show with the game-winning 3 to lift the 76ers over the Hornets 122-119.",
          "url": "https://www.usatoday.com/story/sports/nba/2018/11/17/kemba-walker-60-points-jimmy-butler-game-winner-sixers-hornets/2044829002/",
          "urlToImage": "https://www.gannett-cdn.com/presto/2018/11/18/USAT/ebc352a7-d1a5-4416-ac9a-c6507b9e3d6b-2018-11-17_Jimmy_Butler2.jpg?crop=5234,2944,x622,y0&width=3200&height=1680&fit=bounds",
          "publishedAt": "2018-11-18T03:35:00Z",
          "content": "Jimmy Butler hoists the game-winning 3 over Dwayne Bacon. (Photo: Chuck Burton, AP) On a night the Charlotte Hornets celebrated the best players in the franchise's 30-year history, Kemba Walker eclipsed them all. Then Jimmy Butler spoiled the show. Walker pou… [+1214 chars]"
      },
      {
          "source": {
              "id": "the-washington-post",
              "name": "The Washington Post"
          },
          "author": null,
          "title": "Trump speaks with CIA about Khashoggi killing",
          "description": null,
          "url": "https://www.washingtonpost.com/world/national-security/trump-says-hell-speak-with-cia-about-khashoggi-killing/2018/11/17/f5150774-ea72-11e8-bd89-eecf3b178206_story.html",
          "urlToImage": null,
          "publishedAt": "2018-11-18T03:11:15Z",
          "content": null
      },
      {
          "source": {
              "id": "the-washington-post",
              "name": "The Washington Post"
          },
          "author": null,
          "title": "Gillum concedes in Florida gubernatorial contest",
          "description": null,
          "url": "https://www.washingtonpost.com/politics/2018/11/17/gillum-concedes-florida-gubernatorial-contest/",
          "urlToImage": null,
          "publishedAt": "2018-11-18T02:48:45Z",
          "content": null
      },
      {
          "source": {
              "id": null,
              "name": "Espn.com"
          },
          "author": null,
          "title": "Villanova drops back-to-back games for first time since 2012-13 season",
          "description": "Defending national champion Villanova lost its second game in a row on Saturday, falling to Furman 76-68 in overtime three days after being blown out by No. 18 Michigan.",
          "url": "http://www.espn.com/mens-college-basketball/story/_/id/25306561/no-8-villanova-wildcats-lose-furman-paladins-ot-second-straight-loss",
          "urlToImage": "http://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F1117%2Fr465170_1296x729_16%2D9.jpg",
          "publishedAt": "2018-11-18T02:08:18Z",
          "content": "Defending national champion Villanova lost its second game in a row on Saturday, the first time the No. 8 Wildcats had dropped back-to-back contests since the end of the 2012-13 season. Three days after being blown out by No. 18 Michigan 73-46 in a rematch of… [+2703 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Yahoo.com"
          },
          "author": null,
          "title": "Michelle Obama Only Needed a Little Prodding to Admit That George Clooney Is Her \"Freebie\"",
          "description": null,
          "url": "https://www.yahoo.com/lifestyle/michelle-obama-only-needed-little-153847492.html",
          "urlToImage": null,
          "publishedAt": "2018-11-18T01:52:29Z",
          "content": null
      },
      {
          "source": {
              "id": null,
              "name": "Espn.com"
          },
          "author": null,
          "title": "Urban Meyer: Won't win vs. Michigan unless defense gets better",
          "description": "Buckeyes coach Urban Meyer said his team was fortunate to pull off an overtime win over Maryland on Saturday, but he said the defense has to improve \"or we won't win\" against Michigan next week.",
          "url": "http://www.espn.com/college-football/story/_/id/25306348/urban-meyer-calls-ohio-state-win-maryland-very-emotional",
          "urlToImage": "http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F1117%2Fr465144_1296x729_16%2D9.jpg",
          "publishedAt": "2018-11-18T00:57:28Z",
          "content": "Ohio State coach Urban Meyer, whose sideline frustration was captured on camera throughout a 52-51 overtime win at Maryland on Saturday, called the game \"very emotional\" but stopped short of labeling his team exasperating. The 10th-ranked Buckeyes improved to… [+3118 chars]"
      },
      {
          "source": {
              "id": "the-new-york-times",
              "name": "The New York Times"
          },
          "author": null,
          "title": "Trump, Touring Fire Ruins in California, Repeats Disputed Claim on Forest Management",
          "description": "In the incinerated remains of Paradise, the president suggested that forest management was a “very big problem” in California’s wildfire crisis.",
          "url": "https://www.nytimes.com/2018/11/17/us/trump-california-fires.html",
          "urlToImage": "https://static01.nyt.com/images/2018/11/18/us/politics/18DC-TRUMP1/18DC-TRUMP1-facebookJumbo.jpg",
          "publishedAt": "2018-11-18T00:34:56Z",
          "content": "Calling forest management “a very big problem,” he said he had discussed the topic with Mr. Brown. In a Twitter post last weekend, the president said that “there is no reason for these massive, deadly and costly forest fires in California except that forest m… [+2062 chars]"
      },
      {
          "source": {
              "id": "abc-news",
              "name": "ABC News"
          },
          "author": "The Associated Press",
          "title": "Governor: Official who said whites are 'master race' must go",
          "description": "Get breaking national and world news, broadcast video coverage, and exclusive interviews. Find the top news online at ABC news.",
          "url": "https://abcnews.go.com/Politics/wireStory/governor-official-whites-master-race-59270607",
          "urlToImage": "https://s.abcnews.com/images/Politics/WireAP_7fa824b45d5a4ef692aa7c7aa05205eb_16x9_992.jpg",
          "publishedAt": "2018-11-18T00:17:48Z",
          "content": "Kansas Gov. Jeff Colyer has called on a white county official to resign after the official said at a public meeting that he belongs to \"the master race.\" Leavenworth County Commissioner Louis Klemp cited the master race — the Nazi ideology of Aryan supremacy … [+580 chars]"
      },
      {
          "source": {
              "id": "the-new-york-times",
              "name": "The New York Times"
          },
          "author": null,
          "title": "Zuckerberg Defends Company in Friday Meeting With Employees",
          "description": "Facebook’s co-founder and other executives, including Sheryl Sandberg, answered employees’ questions after a New York Times investigation of the company.",
          "url": "https://www.nytimes.com/2018/11/17/technology/facebook-mark-zuckerberg.html",
          "urlToImage": "https://static01.nyt.com/images/2018/11/17/business/17facebook-1/17facebook-1-facebookJumbo.jpg",
          "publishedAt": "2018-11-17T23:54:52Z",
          "content": "Mr. Zuckerberg said much of the criticism of his company over the past 18 months — specifically regarding election security, content moderation and disinformation — had been fair and important. Ms. Sandberg, who also attended the session, added that “I fully … [+1290 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Espn.com"
          },
          "author": null,
          "title": "RB Devin Darrington's finger wag costs Harvard a TD vs. Yale",
          "description": "Harvard running back Devin Darrington was called for taunting after wagging his finger at a Yale defender while crossing the goal line, negating his touchdown and forcing the Crimson to settle for a field goal.",
          "url": "http://www.espn.com/college-football/story/_/id/25305876/finger-wag-negates-harvard-crimson-rb-devin-darrington-touchdown-vs-yale-bulldogs",
          "urlToImage": "http://a.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F1117%2Fr465133_1296x729_16%2D9.jpg",
          "publishedAt": "2018-11-17T23:46:34Z",
          "content": "In the fourth quarter of Harvard 's 45-27 win over Yale on Saturday, Crimson running back Devin Darrington went up the middle for a 27-yard score, but he wagged a finger as he outran a defender toward the goal line and was called for taunting. Tom Stewart thr… [+888 chars]"
      },
      {
          "source": {
              "id": "the-new-york-times",
              "name": "The New York Times"
          },
          "author": null,
          "title": "Mystery of Lost Argentine Submarine Ends a Year Later, Deep at Sea",
          "description": "The San Juan, which disappeared with 44 aboard, was found almost 2,600 feet below the ocean’s surface by a private company the government had hired.",
          "url": "https://www.nytimes.com/2018/11/17/world/americas/argentina-submarine-found.html",
          "urlToImage": "https://static01.nyt.com/images/2018/11/18/world/ALT18argentina/18argentina3-facebookJumbo.jpg",
          "publishedAt": "2018-11-17T22:18:45Z",
          "content": "Some relatives said the news, while painful, brought a measure of closure. “I had already assumed he died,” said María Itatí Leguizamón, the 33-year-old wife of Germán Oscar Suárez, a radar operator on the vessel who was 29 when the San Juan vanished. “But I … [+1196 chars]"
      },
      {
          "source": {
              "id": "the-new-york-times",
              "name": "The New York Times"
          },
          "author": null,
          "title": "Hundreds of Thousands in France Protest Taxes by Blocking Roads",
          "description": "The country’s “Yellow Vest” movement demonstrated nationwide, blocking roads and roundabouts, to register anger about fuel taxes and the loss of purchasing power.",
          "url": "https://www.nytimes.com/2018/11/17/world/europe/french-drivers-protest-fuel-taxes.html",
          "urlToImage": "https://static01.nyt.com/images/2018/11/18/world/18protest-france-1/18protest-france-1-facebookJumbo.jpg",
          "publishedAt": "2018-11-17T20:30:45Z",
          "content": "The demonstrations are unlike some past protests that pressed for higher salaries. Now, people are seeking a reduction in the gas tax as well as expressing frustration with payroll taxes, which are used for social services like health care and social security… [+1507 chars]"
      },
      {
          "source": {
              "id": "politico",
              "name": "Politico"
          },
          "author": "BEN WHITE",
          "title": "Xi, Pence trade barbs over trade war at APEC summit while selling visions for regional cooperation",
          "description": "&quot;China has taken advantage of the United States for many, many years and those days are over,” the vice president said.",
          "url": "https://www.politico.com/story/2018/11/17/xi-jinping-mike-pence-trade-apec-1000495",
          "urlToImage": "https://static.politico.com/6b/d6/01bcf6084d29a79e56907063c531/181117-pence-ap-773.jpg",
          "publishedAt": "2018-11-17T20:17:13Z",
          "content": "Vice President Mike Pence and Japanese Prime Minister Shinzo Abe arrive for a family photo with leaders and their spouses during the APEC Economic Leaders Meeting summit in Port Moresby, Papua New Guinea on Saturday. | Mark Schiefelbein/AP Photo This story is… [+5436 chars]"
      },
      {
          "source": {
              "id": "time",
              "name": "Time"
          },
          "author": "Associated Press",
          "title": "Entire Georgia Town Evacuated Due to Train Derailment",
          "description": "The small Georgia town of Byromville has been evacuated after a derailment of multiple railroad cars with no reported injuries.",
          "url": "http://time.com/5458065/georgia-evacuated-train-derailment/",
          "urlToImage": "https://timedotcom.files.wordpress.com/2018/11/georgia-train-derailment.jpg?quality=85",
          "publishedAt": "2018-11-17T17:57:27Z",
          "content": "(BYROMVILLE, Ga.) — A small Georgia town has been evacuated after a derailment of multiple railroad cars. CSX Railroad said the cars derailed around 7 a.m. Saturday in Byromville, roughly 55 miles south of Macon. The exact number of cars involved is unclear. … [+561 chars]"
      },
      {
          "source": {
              "id": "the-new-york-times",
              "name": "The New York Times"
          },
          "author": null,
          "title": "California Fire Hits 'Rehab Riviera,' Putting Addiction Care in Jeopardy",
          "description": "Malibu has one of the largest concentrations of rehabilitation centers and sober living homes in the United States. Several have had to evacuate clients.",
          "url": "https://www.nytimes.com/2018/11/16/business/fire-malibu-rehab-riviera.html",
          "urlToImage": "https://static01.nyt.com/images/2018/11/17/business/17REHAB-print/17REHAB-01-facebookJumbo.jpg",
          "publishedAt": "2018-11-17T14:31:32Z",
          "content": "Each of the 21 patients at Creative Care in Malibu was allowed one piece of luggage before fleeing the fire. They were bundled into 12-seater vans normally used for mini-golf outings or trips to addiction support meetings and taken to Airbnbs in the San Ferna… [+1448 chars]"
      },
      {
          "source": {
              "id": "the-hill",
              "name": "The Hill"
          },
          "author": "Chris Mills Rodrigo",
          "title": "Trump knocks 'phony' NYT report: I don't question Pence's loyalty at all",
          "description": "President Trump on Saturday blasted a New York Times report that said he was privately questioning Vice President Pence's loyalty, labeling it a \"phony story.\"",
          "url": "https://thehill.com/homenews/administration/417248-trump-knocks-phony-nyt-report-i-dont-question-pences-loyalty-at-all",
          "urlToImage": "https://thehill.com/sites/default/files/trumpdonaldwhitehouse4_111718getty.jpg",
          "publishedAt": "2018-11-17T14:11:27Z",
          "content": "President Trump Donald John Trump Mia Love pulls ahead in Utah race as judge dismisses her lawsuit Trump administration denies exploring extradition of Erdoğan foe for Turkey Trump congratulates Kemp, says Abrams will have 'terrific political future' MORE on … [+2262 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Abc7chicago.com"
          },
          "author": "Jessica D'Onofrio, Stacey Baca, Eric Horng",
          "title": "Father Pfleger calls for dismissal of officer who shot Robbins security guard",
          "description": "Father Michael Pfleger called the deadly shooting of a Robbins security guard murder and called for the dismissal of the police officer responsible Friday.",
          "url": "https://abc7chicago.com/father-pfleger-calls-for-dismissal-of-officer-who-shot-robbins-security-guard/4700975/",
          "urlToImage": "https://cdns.abclocal.go.com/content/wls/images/cms/automation/vod/111618-wls-roberson-10p-vid.jpg",
          "publishedAt": "2018-11-17T03:33:45Z",
          "content": "Friends of a Robbins security guard who was killed by Midlothian police over the weekend while working held a Friday night vigil at Lane Tech High School. Jemel Roberson, 26, graduated from Lane Tech eight years ago. \"He was my, he was my friend and I loved h… [+3098 chars]"
      },
      {
          "source": {
              "id": "cnn",
              "name": "CNN"
          },
          "author": "Jessica Schneider, CNN",
          "title": "Attorney petitions Supreme Court to declare Rod Rosenstein acting attorney general",
          "description": "In a highly unusual move, lawyer Tom Goldstein asked the US Supreme Court on Friday evening to declare Deputy Attorney General Rod Rosenstein as the acting attorney general, instead of Matthew Whitaker who currently holds the job.",
          "url": "https://www.cnn.com/2018/11/16/politics/rod-rosenstein-acting-attorney-general/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/180924104710-11-rod-rosenstein-lead-image-super-tease.jpg",
          "publishedAt": "2018-11-16T22:23:00Z",
          "content": "(CNN) In a highly unusual move, lawyer Tom Goldstein asked the US Supreme Court on Friday evening to declare Deputy Attorney General Rod Rosenstein as the acting attorney general, instead of Matthew Whitaker who currently holds the job. Goldstein also represe… [+4945 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Npr.org"
          },
          "author": "",
          "title": "The Faithful Are Angry As Catholic Church Fails To Unite On Addressing Clergy Abuse",
          "description": "This week's widely anticipated meeting of U.S. Catholic bishops ended without recommendation on how to deal with clergy abuse. Further action is now up to the Vatican and a global synod in February.",
          "url": "https://www.npr.org/2018/11/16/668737604/the-faithful-are-angry-as-catholic-church-fails-to-unite-on-addressing-clergy-ab",
          "urlToImage": "https://media.npr.org/include/images/facebook-default-wide.jpg?s=1400",
          "publishedAt": "2018-11-16T21:34:10Z",
          "content": "This week's widely anticipated meeting of U.S. Catholic bishops ended without recommendation on how to deal with clergy abuse. Further action is now up to the Vatican and a global synod in February. ARI SHAPIRO, HOST: This week, U.S. Catholic bishops were sup… [+4697 chars]"
      }
  ];
}