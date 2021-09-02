import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/Employee';
import { OptionRecord } from '../interfaces/OptionRecord';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  generateOptions (table: Employee[]) {
    console.log ('Table', table)
    let optionRecords: OptionRecord = {}
    const colNamesFilter: string[] =  ['department', 'gender', 'city']

    for (const row of table) {
      for (const colName of colNamesFilter) {
        const value = row[colName as keyof Employee]
        const uniqueName = colName + ',' + value
        if (!optionRecords[uniqueName]) {
          optionRecords[uniqueName] = { count: 1, isSelected: false }
        } else {
          optionRecords[uniqueName].count += 1
        }
      }
    }

    console.log('OptionRecords', optionRecords)
    return optionRecords
  }


  updateOptions (table: Employee[], optionRecord: OptionRecord): OptionRecord {
    // const updatedRecord: OptionRecord = {}
    console.log('Table to Update', table)
    console.log('Options to Update', optionRecord)

    for (const uniqueName in optionRecord) {
      optionRecord[uniqueName].count = 0
    }

    for (const row of table) {
      console.log('Row of Table', row)
      for (const colName in row) {
        console.log('ColName in Row', colName)
        const value = row[colName as keyof Employee]
        const uniqueName = colName + ',' + value
        if (!optionRecord[uniqueName]) continue
        optionRecord[uniqueName].count += 1

      }
    }

    console.log('Updated options', optionRecord)
    return optionRecord
  } 



  findSelected (optionRecord: OptionRecord) {
    const selectedColumns = new Set()
    const selectedOptions = new Set()

    for (const uniqueName in optionRecord) {
      if (!optionRecord[uniqueName].isSelected) continue
      const [colName] = uniqueName.split(',')
      
      selectedColumns.add(colName)
      selectedOptions.add(uniqueName)
    }


    console.log('Selected Find Options', {
      selectedColumns,
      selectedOptions
    })
    return {
      selectedColumns,
      selectedOptions
    }

  }

}
