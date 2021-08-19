import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/interfaces/table';
import { TableControlService } from 'src/app/services/table-control.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  table: any[] = []
  // optionGroups: any = []


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
  }, {
    name: 'address',
    publicName: 'Адрес'
  }]

  colSortOrder: any = {name: 0, age: 0, gender: 0, department: 0}

  sortableColumnName: string = ''
  

  constructor(public tableControlService: TableControlService) { }

  ngOnInit(): void {
    this.tableControlService.fetchTable()
    this.getTable()
  }

  getTable(): void {
    this.tableControlService.getTable()
      .subscribe(table => this.table = table)
  }

  sort (colName: string) {
    this.sortableColumnName = colName
    this.colSortOrder[colName] = this.tableControlService.sort(colName, this.colSortOrder)
  }


}
