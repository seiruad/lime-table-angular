import { Component, OnInit } from '@angular/core';
import { TABLE } from 'src/app/api/mock-api';
import { makeGroups } from 'src/app/helpers/filterHelpers';
import { Table } from 'src/app/interfaces/table';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  table: Table[] = []
  filteredTable: Table[] = []
  optionGroups: any = []


  columns: any = [{
    name: 'name',
    publicName: 'Имя'
  }, {
    name: 'age',
    publicName: 'Возраст'
  }, {
    name: 'gender',
    publicName: 'Пол'
  }, {
    name: 'department',
    publicName: 'Отдел'
  }]

  columnSortSettings: any = {name: 'none', age: 'ASC', gender: 'DESC', department: 'none'}
  

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.getTable()
    this.optionGroups = makeGroups(this.table)
  }

  getTable(): void {
    this.tableService.getTable()
      .subscribe(table => this.table = table)
  }

  sort(name: string): void {
    if (this.columnSortSettings[name] === 'none') {
      //  sort ('ASC')
      this.columnSortSettings[name] = 'ASC'
    } else if (this.columnSortSettings[name] === 'DESC') {
      //  sort ('ASC')
      this.columnSortSettings[name] = 'ASC'
    } else {
      //  sort ('DCS')
      this.columnSortSettings[name] = 'DESC'
    }

  }
}
