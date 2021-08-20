

export const dynamicSort = (array: any[], property: string, order=1) => {
  console.log({array, property, order})
  const compare = (a:any, b:any)  => {
    let pair = [a[property], b[property]]
    if (property === 'address') pair = [a.address.city, b.address.city]
    if ( pair[0] < pair[1] ) {
      return -1 * order;
    } else if ( pair[0] > pair[1] ){
      return 1 * order;
    }
    return 0;
  }

  return array.sort( compare )
}


export const sortTable = (table: any[], colName: string, order: number) => {
  return dynamicSort(table, colName, order)
}
