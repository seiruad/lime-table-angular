

export const dynamicSort = (array: any[], property: string, order=1) => {
  console.log({array, property, order})
  const compare = (a:any, b:any)  => {
    console.log({a, b, property, ELEMENT: a[property]})
    if ( a[property] < b[property] ) {
      return -1 * order;
    } else if ( a[property] > b[property] ){
      return 1 * order;
    }
    return 0;
  }

  console.log({sortedArray: array.sort( compare )})
  return array.sort( compare )
}


export const sortTable = (table: any[], colName: string, order: number) => {
  return dynamicSort(table, colName, order)
}
