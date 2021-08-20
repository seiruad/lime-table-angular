import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { URL } from '../api/url';


@Injectable({
  providedIn: 'root'
})
export class FetchTableService {
  constructor(private http: HttpClient) { }

  fetchTable(): Observable<any[]> {
    return this.http.get<any[]>(URL)
  }
}
