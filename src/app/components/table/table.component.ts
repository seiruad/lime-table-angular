import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/interfaces/Employee';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() table?: Employee[]
  @Input() sortedColumn: any

  @Output() sortEvent = new EventEmitter<string>()
  

  constructor() { }

  ngOnInit(): void {
  }


  handleSortEvent(colName: string) {
     this.sortEvent.emit(colName)
  }
}
