// {
//   id:
//   type: 'click' | 'install'
//   device_id:
//   campaign id:
//   date:
// }
// 1. which campaign has max rate of install, #install/#click
// 2. which device has max install
// 3. given campaign ids which device has all campaigns,
// 4. before a given date.

arr = [
  {
  id: 1,
  type: 'install',
  device_id: 2,
  campaign_id: 2,
  date: 'vfdvifdn',
  },
  {
    id: 2,
    type: 'click',
    device_id: 1,
    campaign_id: 1,
    date: 'vfdvifdn',
  },
  {
    id: 3,
    type: 'click',
    device_id: 2,
    campaign_id: 1,
    date: 'vfdvifdn',
  },
]

const create = (i) => {
  switch (i.type) {
    case 'click':
      return { click_count: 1, install_count: 0 };
    case 'install':
      return { click_count: 0, install_count: 1 };
  }
}

const rate = (obj) => {
  let foo = [];
  for (key in obj) {
    let cc = obj[key].click_count
    let ic = obj[key].install_count

    foo.push({ id: key, rate: ic/cc})
  }
  return foo
}

const q1 = (arr) => {
  const obj = {}
  arr.map(i => {
    let key = i.campaign_id;

    if (key in obj) {
      if (i.type === 'click') {
        obj[key].click_count +=1
      } else {
        obj[key].install_count += 1
      }
    } else {
      obj[key] = create(i)
    }
  })

  return red(rate(obj))
}

const red = (arr) => arr.reduce((acc, cv) => Math.max(cv.rate, acc), 0);

// console.log(q1(arr))


const q2 = (arr, cid) => {
  b = []
  cid.forEach(cid => {
    b.push(arr.filter(i => i.campaign_id === cid))
  })
  return objInterSection(b)
}

const objInterSection = (b) => {
  s = new Set(setOfDevices(b[0]))
  b.forEach(ele => {
    s2 = setOfDevices(ele)
    s = intersection(s, s2)
  })
  return s;
}

const intersection = (a1, a2) => [...a1].filter(i => a2.has(i))

const setOfDevices = (arr) => new Set(arr.map(i => i.device_id))

// find devices ids in list of all mentioned campaigns.

console.log(q2(arr, [1,2]))


