import { Component, Input, OnInit } from '@angular/core';
import { Option } from 'src/app/interfaces/option';
import { FilterService } from 'src/app/services/filter.service';
import { TableControlService } from 'src/app/services/table-control.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor(public filterService: FilterService, private tableControlServise: TableControlService) { }

  ngOnInit(): void {
    this.filterService.setOptionGroups()
  }

  toggleOption(option: Option, colName: string) {
    this.filterService.filter({colName: colName, value: option.value})
  }

  reset() {
    this.tableControlServise.resetTable()
  }

  sort (colName: string) {
    this.tableControlServise.sort(colName, {[colName]: -1})
  }
}
