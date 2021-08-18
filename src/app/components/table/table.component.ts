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
  groups: any = []

  constructor(private tableService: TableService) { 
    
    // this.groups = [{
    //   name: 'Пол',
    //   params: [{
    //     value: 'female',
    //     count: 1
    //   }, {
    //     value: 'male',
    //     count: 2
    //   }]

    // }]
  }

  ngOnInit(): void {
    this.getTable()
    this.groups = makeGroups(this.table)
    // console.log({group: this.groups})
    // console.log({groupParams: this.groups[0].params})
  }

  getTable(): void {
    this.tableService.getTable()
      .subscribe(table => this.table = table)
  }
}
