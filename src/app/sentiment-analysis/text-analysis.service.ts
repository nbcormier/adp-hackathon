import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {

  private httpOptions = {
    headers: new HttpHeaders({
      'X-AYLIEN-TextAPI-Application-Key':  'c96f58500927f3aef0f5ec22eab91cb8',
      'X-AYLIEN-TextAPI-Application-ID': 'c97e0f22',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }
  

  getEntityLevelSentiment(text: string): Observable<any> {
    return this.http.post<any>('https://api.aylien.com/api/v1/elsa', {text: text}, this.httpOptions);
  }
}
