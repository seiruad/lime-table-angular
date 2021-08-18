


/* export const compare = ( a: any, b:any, property='' ) => {

  if ( a.gender < b.gender ){
    return -1;
  }
  if ( a.gender > b.gender ){
    return 1;
  }
  return 0;
}

// 

export const sort = (array, compareFunction) => {
  return array.sort( compareFunction )
}
 */



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
