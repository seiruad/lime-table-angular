
const toRequestedFormat = (result: any): any[] => {
  const reqFormat = []
  for (const [key, value] of Object.entries(result)) {
    reqFormat.push({
      value: key,
      count: value
    })
    // console.log({FORMAT: `${key}: ${value}`});
  }

  console.log({FORMAT: reqFormat});

  return reqFormat



} 


const countUniqueProperties = (objects: any, property: string): any => {
  // console.log({table})
  const result: any = {}
  for (const obj of objects) {
    let current = obj[property]

    if (property === 'city') { //   this is a very BAD solution
      current = obj.address[property]
    }

    // console.log({currentProperty, address: t.address})
    if (result[current]) {
      result[current] = result[current] + 1
    } else {
      result[current] = 1
    }
  }

  // console.log({INPUT: Object.entries(result)})

  return toRequestedFormat(result)
}

export const makeGroups = (table: any[]): any[] => {
  console.log({table})
  let groups = []
  const request = [{
    name: 'Пол',
    property: 'gender'
  }, {
    name: 'Департамент',
    property: 'department'
  }, {
    name: 'Город',
    property: 'city'
  }]

  for (const req of request) {
    const params = countUniqueProperties(table, req.property)
    groups.push({
      name: req.name,
      params
    })
  }


  console.log({RESULT_GROUPS: groups})
  return groups
}