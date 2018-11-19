# AdpHackathon

## Background
 48 hour challenge to create an Angular application utilizing a public JSON API (for example https://github.com/toddmotto/public-apis).
 
### Requirements
Requirements:
- Use Angular components (Typescript)
- Use Angular Router, Forms, Form Validations, Observables and Pipes to manipulate the data.
- Make sure your code has a good test coverage.
- Use SASS to define the style sheets for the application

### The Application
The concept of the application was to use natural language processing to analyze web content (news articles, Tweets, etc.). The user is able to browse for content within the app and select content to analyze. The content will be scored for overall sentiment as well as entity level sentiment.

### The Process
The first challenge was to come up with a concept for the application. I started by browsing through a large list of public API's to find inspiration. One of the genres, natural language processros, drew my attention. After conidering other API's and concepts, I finally decided to go forward with natural language processing, using [Aylien](https://docs.aylien.com/).

I knew I would need content to analyze. Therefore, I decided to try to incorporate another API. I thought analyzing Tweets would be interesting. I also thought analyzing news articles would be equally interesting. After doing more concentrated research, I decided to use the [Twitter API](https://developer.twitter.com/en/docs) and [News API](https://newsapi.org/). After signing up for development accounts and getting the API keys, I set about testing their capabilities in Postman.

In Postman, I was able to set up and successfully make all my intended API calls with Alyien. I was satisfied I could move forward with the Alyien API. 

I then turned to Twitter. I immediately hit a road block. I intended to use the Twitter API to allow the user to search for users, and then get an analysis on Tweets from that account. However, using only [application level authentication](https://developer.twitter.com/en/docs/basics/authentication/overview/application-only), the Twitter API does not allow searching for users. I decided to come back to researching the Twitter API and focus on incorporating news content.

The News API was straightforward, so I began to layout my application. I used this challenge as an opportunity to work with the [Clarity Design System](https://vmware.github.io/clarity/) for the first time. After the application was scaffolded out and I was consuming the news content, I started to incorporate the Aylien language processing API. I met my second road block.

Even though I had succeeded in making API calls from Postman, I could not make Aylien API calls from my app. The Aylien API does not support CORS, with no 'Access-Control-Allow-Origin' header present. I could not find a workaround suitable in the context of this challenge.

### Roadblocks and Challenges
- 

## Technical Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
