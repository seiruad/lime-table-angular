import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TABLE } from '../api/mock-api';
import { sortTable } from '../helpers/sortingHelpers';
import { TableElement } from '../interfaces/tableElement';
import { FetchTableService } from './fetch-table.service';

@Injectable({
  providedIn: 'root'
})
export class TableControlService {
  immutableTable: any[] = []
  table: any[] = []
  
  constructor(private fetchService: FetchTableService) { 
    // this.immutableTable = TABLE
    // this.table = TABLE
  }

  fetchTable(): void {
    this.fetchService.fetchTable()
      .subscribe(table => this.immutableTable = table)
  }

  getTable (): Observable<any[]> {
    const table: any = of(this.immutableTable)
    return table
  }
  
  filter (element: TableElement) {
    console.log({in: 'filter()', element})
    this.immutableTable = this.immutableTable.filter((row) => {
      console.log({row, currElement: row[element.colName], needElement: element.value})
      return row[element.colName] === element.value
    })

    // const result = this.immutableTable.filter((row) => {
    //   row[element.colName] === element.value
    // })

    // console.log({result})
  } 

  
  sort(colName: string, colSortOrder: any): number {
    let order: number = colSortOrder[colName]
    if (order === 0) {
      this.immutableTable = sortTable(this.immutableTable, 'age', 1)
      order = 1
    } else if (order === -1) {
      this.immutableTable = sortTable(this.immutableTable, colName, 1)
      order = 1
    } else {
      this.immutableTable = sortTable(this.immutableTable, colName, -1)
      order = -1
    }

    return order
  }
}
