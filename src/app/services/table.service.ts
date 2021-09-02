import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../api/url';
import { Employee } from '../interfaces/Employee';
import { map, catchError } from 'rxjs/operators';
import { OptionRecord } from '../interfaces/OptionRecord';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  tableUrl = URL
  constructor(private http: HttpClient) { }

  fetchTable(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.tableUrl)
      .pipe(
        map((data: Employee[]) => {
          console.log(data)
          const transformedData  = data.map((row: any) => {
            return {
              id: row.id,
              name: row.name,
              age: row.age,
              gender: row.gender,
              department: row.department,
              city: row.address.city,
              street: row.address.street
            }
          })
          return transformedData 
        })
      )
  }



  filterTable (table: Employee[], selected: any): Employee[] {
    console.log('Filter Arguments', selected)
    return table.filter((row) => {
      for (const colName in row) {
        if (!selected.selectedColumns.has(colName)) continue

        const value = row[colName as keyof Employee] 
        const uniqueName = colName + ',' + value

        if (!selected.selectedOptions.has(uniqueName)) return false
        
        continue
      }

      return true
    })
  }


  sortTable (table: Employee[], sortedColumn: any): Employee[] {
    const compare = (a:Employee, b:Employee)  => {
      let pair = [a[sortedColumn.colName as keyof Employee], b[sortedColumn.colName as keyof Employee]]
      if ( pair[0] < pair[1] ) {
        return -1 * sortedColumn.order;
      } else if ( pair[0] > pair[1] ){
        return 1 * sortedColumn.order;
      }
      console.log('... sorting ...')
      return 0;
    }
  
    return table.sort( compare )
  }
}
