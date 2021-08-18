import { Injectable } from '@angular/core';
import { generateOptionGroups } from '../helpers/filterHelpers';
import { OptionGroups } from '../interfaces/optionGroup';
import { Table } from '../interfaces/table';
import { FetchTableService } from './fetch-table.service';
import { TableService } from './table.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  optionGroups?: OptionGroups[] = []

  constructor(
    private fetchService: FetchTableService
  ) { }


  applyOptionGroups(): void {
    this.fetchService.getTable()
      .subscribe(table => this.optionGroups = generateOptionGroups(table))
    // this.filterService.applyOptionGroups(this.initialTable)
  }

}
