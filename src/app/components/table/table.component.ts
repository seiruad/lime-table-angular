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
  }]

  colSortOrder: any = {name: 0, age: 1, gender: -1, department: 0}
  

  constructor(public tableControlService: TableControlService) { }

  ngOnInit(): void {
    this.getTable()
  }

  getTable(): void {
    this.tableControlService.getTable()
      .subscribe(table => this.table = table)
  }

  sort (colName: string) {
    this.colSortOrder[colName] = this.tableControlService.sort(colName, this.colSortOrder)
  }


}
