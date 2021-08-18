import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TABLE } from '../api/mock-api';
import { Table } from '../interfaces/table';

@Injectable({
  providedIn: 'root'
})
export class FetchTableService {

  constructor() { }

  getTable(): Observable<Table[]> {
    const table = of(TABLE) 
    return table
  }
}
