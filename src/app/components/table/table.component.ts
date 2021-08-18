import { Component, OnInit } from '@angular/core';
import { TABLE } from 'src/app/api/mock-api';
import { Table } from 'src/app/interfaces/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  table: Table[] = []


  constructor() { }

  ngOnInit(): void {
    this.table = TABLE
  }
}
