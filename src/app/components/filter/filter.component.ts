import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OptionGroup } from 'src/app/interfaces/OptionGroup'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() optionGroups?: OptionGroup[];

  @Output() selectEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  handleOptionSelect (colName: string, value: string) {
    this.selectEvent.emit(colName + ',' + value)
  }

  
}
