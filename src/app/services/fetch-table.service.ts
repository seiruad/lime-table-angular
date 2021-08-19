import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { TABLE } from '../api/mock-api';


@Injectable({
  providedIn: 'root'
})
export class FetchTableService {
  private dataUrl = 'http://localhost:5000/response.json'; 
  // private dataUrl = 'https://gist.githubusercontent.com/bunopus/f48fbb06578003fb521c7c1a54fd906a/raw/e5767c1e7f172c6375f064a9441f2edd57a79f15/test_users.json'
  constructor(private http: HttpClient) { }

  fetchTable(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl)
  }
}
