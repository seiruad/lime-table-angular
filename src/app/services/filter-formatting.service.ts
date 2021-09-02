import { Injectable } from '@angular/core';
import { Option } from '../interfaces/Option';
import { OptionGroup } from '../interfaces/OptionGroup';
import { OptionPayload } from '../interfaces/OptionPayload';
import { OptionRecord } from '../interfaces/OptionRecord';

@Injectable({
  providedIn: 'root'
})
export class FilterFormattingService {

  constructor() { }

  fromOptionRecord (optionRecord: OptionRecord) {
    

    const tmp: Record<string, Option[]> = {}
    for (const uniqueName in optionRecord) {
      const [colName, value] = uniqueName.split(',')

      if (!tmp[colName]) tmp[colName] = []
      tmp[colName].push({
        value, 
        isSelected: optionRecord[uniqueName].isSelected,
        count: optionRecord[uniqueName].count
      })
    }


    const optionGroups: OptionGroup[] = []
    for (const colName in tmp) {
      optionGroups.push({
        colName,
        options: tmp[colName] 
      })
    }

    console.log(optionGroups)
    return optionGroups
  }



  toOptionRecord (optionGroups: OptionGroup[]): OptionRecord {
    const optionRecord: OptionRecord = {}

    for (const group of optionGroups) {
      for (const option of group.options) {
        const uniqueName = group.colName + ',' +  option.value
        optionRecord[uniqueName] = {isSelected: option.isSelected, count: option.count}
      }
    }

    return optionRecord
    
  }
}
