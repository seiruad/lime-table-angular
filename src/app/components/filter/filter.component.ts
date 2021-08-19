import { Component, Input, OnInit } from '@angular/core';
import { Option } from 'src/app/interfaces/option';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor(public filterService: FilterService) { }

  ngOnInit(): void {
    this.filterService.setOptionGroups()
  }

  toggleOption(option: Option, colName: string) {
    this.filterService.filter({colName: colName, value: option.value})
  }
}
