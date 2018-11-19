import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {

  constructor(private http: HttpClient) { }

  /*
  AYLIEN configuration (removed)

  // Alyien headers
  private httpOptions = {
    headers: new HttpHeaders({
      'X-AYLIEN-TextAPI-Application-Key':  'c96f58500927f3aef0f5ec22eab91cb8',
      'X-AYLIEN-TextAPI-Application-ID': 'c97e0f22',
      'Access-Control-Allow-Origin': '*'
    })
  };

  getEntityLevelSentiment(text: string): Observable<any> {
    return this.http.post<any>('https://api.aylien.com/api/v1/elsa', {text: text}, this.httpOptions);
  }
  */

  // Cloudmersive configuration
  private httpOptions = {
    headers: new HttpHeaders({
      'Apikey':  'a3e81d74-abcb-4c8e-acd1-a97599e3af3e',
      'Content-Type': 'application/json'
    })
  };

  getEntityLevelSentiment(text: string): Observable<any> {
    return this.http.post<any>('https://api.cloudmersive.com/nlp/ExtractEntitiesString', text, this.httpOptions)
    .pipe(map(entities => {
      // process entities
      let rawEntities = entities.split(' ');
      let processedEntities = [];
      for (let entityPair of rawEntities) {
        let pairSplit = entityPair.split('/');
        if (pairSplit.length === 2 && pairSplit[1] !== 'O') {
          processedEntities.push({text: pairSplit[0], type: pairSplit[1].toLowerCase()});
        }
      }
      if (!processedEntities.length) {
        processedEntities.push({text: 'No entities were found.', type: ''});
      }
      return processedEntities;
    })
  );
  }
}
