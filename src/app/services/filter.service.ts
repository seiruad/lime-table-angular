import { Injectable } from '@angular/core';
import { generateOptionGroups } from '../helpers/filterHelpers';
import { FilterParam } from '../interfaces/filterParam';
import { Option } from '../interfaces/option';
import { OptionGroups } from '../interfaces/optionGroup';
import { TableElement } from '../interfaces/tableElement';
import { FetchTableService } from './fetch-table.service';
import { TableControlService } from './table-control.service';
import { TableService } from './table.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  optionGroups?: OptionGroups[] = []

  constructor(public tableControlService: TableControlService) { }

  filter (element: TableElement) {
    this.tableControlService.filter(element)
  }

  setOptionGroups(): void {
    this.tableControlService.getTable()
      .subscribe(table => this.optionGroups = generateOptionGroups(table))
  }

}
