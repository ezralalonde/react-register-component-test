// @flow
import type {
  ClassInfoType, FilterOptions, SortOptions, Orders
} from '../types'

const single: ClassInfoType = {
  "day": "Tuesday",
  "level": "Beginner",
  "team": "Test Team",
  "time": "4:00pm",
  "number": "1",
  "cost": 8000,
  "leads": 38,
  "follows": 40,
  "cap": 80,
  "location": "Test Location",
}

const multi: Array<ClassInfoType> = [
  {
    "day": "Sunday",
    "level": "Beginner",
    "team": "Ilona & Kris",
    "time": "2:00pm",
    "number": "8",
    "cost": 10000,
    "leads": 38,
    "follows": 40,
    "cap": 80,
    "location": "GPUC",
  },
  {
    "day": "Monday",
    "level": "Beginner Half-Class",
    "team": "Bernadette & Gee",
    "time": "6:30pm",
    "number": "19",
    "cost": 6000,
    "leads": 41,
    "follows": 38,
    "cap": 80,
    "location": "Trinity Orthodox Hall",
  },
  {
    "day": "Tuesday",
    "level": "Advanced",
    "team": "Shirley & Don",
    "time": "8:00pm",
    "number": "7",
    "cost": 15000,
    "leads": 29,
    "follows": 29,
    "cap": 60,
    "location": "Grosvenor Park",
  },
  {
    "day": "Wednesday",
    "level": "Intermediate Plus",
    "team": "Ev & Kris",
    "time": "8:15pm",
    "number": "14",
    "cost": 12500,
    "leads": 36,
    "follows": 33,
    "cap": 70,
    "location": "St. Joe's Hall",
  },
  {
    "day": "Wednesday",
    "level": "Intermediate",
    "team": "Bernadette & Gee",
    "time": "6:30pm",
    "number": "12",
    "cost": 12500,
    "leads": 36,
    "follows": 34,
    "cap": 70,
    "location": "Trinity Orthodox Hall",
  },
  {
    "day": "Wednesday",
    "level": "Beginner",
    "team": "Margie & Dale",
    "time": "7:00pm",
    "number": "13",
    "cost": 10000,
    "leads": 41,
    "follows": 39,
    "cap": 80,
    "location": "Grosvenor Park",
  }
]

const filters: Array<FilterOptions> = [
  {key: "level", name:"Level"},
  {key: "day", name:"Day"},
  {key: "location", name:"Location"},
  {key: "cost", name:"Price"},
]

const orders: Array<Orders> = [
  {itemKey: 'itemKey-1', ...multi[0], role: 'lead'},
  {itemKey: 'itemKey-2', ...multi[0], role: 'follow'},
  {itemKey: 'itemKey-3', ...multi[1], role: 'follow'},
  {itemKey: 'itemKey-4', ...multi[1], role: 'follow'},
]

const sortByNumber = (getValue: (aa: ClassInfoType) => number) => {
  return (xx: ClassInfoType, yy: ClassInfoType) => Number(getValue(xx)) - Number(getValue(yy))
}

const sortByList = (getValue, list) => {
  return (xx: ClassInfoType, yy: ClassInfoType) => list.indexOf(getValue(xx)) - list.indexOf(getValue(yy))
}

const sortByDay = sortByList(xx => xx.day, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'])

const levelList = [
  'Beginner', 'Beginner Plus', 'Beginner Half-Class',
  'Intermediate', 'Intermediate Plus',
  'Advanced'
]
const sortByLevel = sortByList(xx => xx.level, levelList)

const sortByString = (getValue: (aa: ClassInfoType) => string) => {
  return (xx: ClassInfoType, yy: ClassInfoType) => getValue(xx).localeCompare(getValue(yy))
}

const sorts: Array<SortOptions> = [
  {key: "number", name:"Number", method: sortByNumber(xx => Number(xx.number))},
  {key: "level", name:"Level", method: sortByLevel},
  {key: "day", name:"Day", method: sortByDay},
  {key: "location", name:"Location", method: sortByString(xx => xx.location)},
  {key: "cost", name:"Price", method: sortByNumber(xx => xx.cost)},
]

export {
  single,
  multi,
  filters,
  orders,
  sorts,
  sortByDay,
  sortByLevel,
  sortByNumber,
  sortByString,
}