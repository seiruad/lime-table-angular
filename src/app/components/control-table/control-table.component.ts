import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/Employee';
import { OptionGroup } from 'src/app/interfaces/OptionGroup';
import { OptionRecord } from 'src/app/interfaces/OptionRecord';
import { FilterFormattingService } from 'src/app/services/filter-formatting.service';
import { FilterService } from 'src/app/services/filter.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.scss']
})
export class ControlTableComponent implements OnInit {
  immutableTable: Employee[]= []
  table: Employee[] = []
  optionGroups?: OptionGroup[] = []
  sortedColumn: any = {
    colName: '',
    order: 0
  }


  constructor(
    private tableService: TableService,
    private filterService: FilterService,
    private filterFormattingService: FilterFormattingService,
  ) { }

  ngOnInit(): void {
    this.getTable()
  }

  getTable(): void {
    this.tableService.fetchTable()
      .subscribe(table => {
        this.immutableTable = [...table]
        this.table = table
        this.optionGroups = this.filterFormattingService.fromOptionRecord(this.filterService.generateOptions(this.table))
      })
  }


  receiveSelected ($event: any) {
    if (!this.optionGroups) return

    const uniqueName: string = $event
    const [colName, value] = uniqueName.split(',')

    let optionRecord: OptionRecord = this.filterFormattingService.toOptionRecord(this.optionGroups)

    optionRecord[uniqueName].isSelected = !optionRecord[uniqueName].isSelected

    const selectedOptions = this.filterService.findSelected(optionRecord)
    this.table = this.tableService.filterTable(this.immutableTable, selectedOptions)
    optionRecord = this.filterService.updateOptions(this.table, optionRecord)
    this.optionGroups = this.filterFormattingService.fromOptionRecord(optionRecord)

    this.sort(this.sortedColumn.colName, this.sortedColumn.order)
  }


  sort ($event: any, order=0) {
    console.log($event)
    if (!this.table) return
    const colName: string = $event
    
    if (order !== 0) order = order * -1
    else order = this.sortedColumn.order
    if (order === 0 || this.sortedColumn.colName !== colName) order = -1
    
    this.sortedColumn = { 
      colName,
      order: order * -1
     }

     console.log()
    
    this.table = this.tableService.sortTable(this.table, this.sortedColumn)
  }
}
