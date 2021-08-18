import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TABLE } from '../api/mock-api';
import { dynamicSort } from '../helpers/sortingHelpers';
import { Table } from '../interfaces/table';
import { FetchTableService } from './fetch-table.service';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  initialTable: Table[] = []
  constructor(
    private fetchService: FetchTableService,
  ) { }

  // ngOnInit() {
  //   this.getTable()
  // }

  getTable(): void {
    this.fetchService.getTable()
      .subscribe(table => this.initialTable = table)
    // this.filterService.applyOptionGroups(this.initialTable)
  }



  columnSortSettings: any = {name: 'none', age: 'ASC', gender: 'DESC', department: 'none'}
  sort(colName: string): void {
    if (this.columnSortSettings[colName] === 'none') {
      //  sort ('ASC')
      this.initialTable = dynamicSort(this.initialTable, 'age')
      this.columnSortSettings[colName] = 'ASC'
    } else if (this.columnSortSettings[colName] === 'DESC') {
      //  sort ('ASC')
      this.initialTable = dynamicSort(this.initialTable, colName)
      this.columnSortSettings[colName] = 'ASC'
    } else {
      //  sort ('DCS')
      this.initialTable = dynamicSort(this.initialTable, colName, -1)
      this.columnSortSettings[colName] = 'DESC'
    }
  }
}
