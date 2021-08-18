import { Component, OnInit } from '@angular/core';
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

  
  

  constructor(public tableService: TableService) { }

  ngOnInit(): void {
    // this.tableService.sort()
    this.tableService.getTable()
    
    // this.optionGroups = makeGroups(this.table)
  }


}
