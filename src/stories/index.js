import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'

import ClassInfo from '../components/ClassInfo'
import ClassFilter from '../components/ClassFilter'
import ClassList from '../components/ClassList'
import ClassPicker from '../components/ClassPicker'
import FilterGroup from '../components/FilterGroup'
import FilterOption from '../components/FilterOption'
import SortOption from '../components/SortOption'
import SortGroup from '../components/SortGroup'
import ToggleVisible from '../components/ToggleVisible'
import FilterIcon from '../assets/filter.svg'
import { single, multi } from './data'

storiesOf('ClassInfo', module)
  .add('basic', () => (
    <ClassInfo {...single} />
  ))

const filters = [
  {key: "level", name:"Level"},
  {key: "day", name:"Day"},
  {key: "location", name:"Location"},
  {key: "cost", name:"Price"},
]
storiesOf('ClassFilter', module)
  .add('basic', () => (
    <ClassFilter classes={multi} filters={filters}
     checkedBoxes={{}} setStatus={action('setStatus')} />
  ))

storiesOf('FilterGroup', module)
  .add('basic', () => (
    <FilterGroup heading="Hello World" options={["one", "two", "three"]}
      checkedBoxes={[]} setStatus={action('setStatus')} index="filtergroup_index" />
  ))

storiesOf('FilterOption', module)
  .add('basic', () => (
    <FilterOption value="Value" group="Group" setStatus={action('setStatus')} index="index" />
  ))

storiesOf('SortOption', module)
  .add('basic', () => (
    <SortOption name="Test" group="Test" setSort={action('setSort')} />
  ))

const sortByNumber = (getValue) => {
  return (xx, yy) => getValue(xx) - getValue(yy)
}

const sortByList = (getValue, list) => {
  return (xx, yy) => list.indexOf(getValue(xx)) > list.indexOf(getValue(yy))
}

const sortByDay = sortByList(xx => xx.day, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'])

const levelList = [
  'Beginner', 'Beginner Plus', 'Beginner Half-Class',
  'Intermediate', 'Intermediate Plus',
  'Advanced'
]
const sortByLevel = sortByList(xx => xx.level, levelList)

const sortByString = (getValue) => {
  return (xx, yy) => getValue(xx) > getValue(yy)
}

storiesOf('ClassList', module)
  .add('basic', () => (
    <ClassList classes={multi} />
  ))
  .add('sort(number)', () => (
    <ClassList classes={multi.sort(sortByNumber(xx => xx.number))} />
  ))
  .add('sort(number desc)', () => (
    <ClassList classes={multi.sort(sortByNumber(xx => xx.number)).reverse()}/>
  ))
  .add('sort(day)', () => (
    <ClassList classes={multi.sort(sortByDay)} />
  ))
  .add('sort(location)', () => (
    <ClassList classes={multi.sort(sortByString(xx => xx.location))} />
  ))
  .add('sort(level)', () => (
    <ClassList classes={multi.sort(sortByLevel)}/>
  ))
  .add('sort(cost)', () => (
    <ClassList classes={multi.sort(sortByNumber(xx => xx.cost))} />
  ))
  .add('sort(balance)', () => (
    <ClassList classes={multi.sort(sortByNumber(xx => xx.leads - xx.follows))} />
  ))

const sorts = [
  {key: "number", name:"Number", method: sortByNumber(xx => xx.number)},
  {key: "level", name:"Level", method: sortByLevel},
  {key: "day", name:"Day", method: sortByDay},
  {key: "location", name:"Location", method: sortByString(xx => xx.location)},
  {key: "cost", name:"Price", method: sortByNumber(xx => xx.cost)},
]

storiesOf('SortGroup', module)
  .add('basic', () => (
    <SortGroup name="Test" options={sorts} setSort={action('setSort')} />
  ))

storiesOf('ToggleVisible', module)
  .add('visible', () => (
    <ToggleVisible visible={true} text="Filter and Sort Classes" icon={FilterIcon}>
      <ClassFilter classes={multi} filters={filters} checkedBoxes={{}} setStatus={action('setStatus')} />
    </ToggleVisible>
  ))
  .add('hidden', () => (
    <ToggleVisible visible={false} text="Filter and Sort Classes" icon={FilterIcon}>
      <ClassFilter classes={multi} filters={filters} checkedBoxes={{}} setStatus={action('setStatus')} />
    </ToggleVisible>
  ))

storiesOf('ClassPicker', module)
  .add('basic', () => (
    <div>
      <h1>A class picker example</h1>
      <ClassPicker
        classes={multi}
        classFilterOptions={filters}
        classSortOptions={sorts}
        toggleIcon={FilterIcon}
        toggleText={"Toggle"}
      />
    </div>
  ))