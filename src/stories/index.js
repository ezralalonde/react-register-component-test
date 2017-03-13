import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'

import ClassInfo from '../components/ClassInfo'
import ClassFilter from '../components/ClassFilter'
import ClassList from '../components/ClassList'
import FilterGroup from '../components/FilterGroup'
import FilterOption from '../components/FilterOption'
import ToggleVisible from '../components/ToggleVisible'
import FilterIcon from '../assets/filter.svg'
import { single, multi } from './data'

storiesOf('ClassInfo', module)
  .add('basic', () => (
    <ClassInfo {...single} />
  ))

storiesOf('ClassFilter', module)
  .add('basic', () => (
    <ClassFilter classes={multi} />
  ))

storiesOf('FilterGroup', module)
  .add('basic', () => (
    <FilterGroup heading="Hello World" options={["one", "two", "three"]} />
  ))

storiesOf('FilterOption', module)
  .add('basic', () => (
    <FilterOption name="Test" />
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
    <ClassList classes={multi} sortMethod={sortByNumber(xx => xx.number)} />
  ))
  .add('sort(day)', () => (
    <ClassList classes={multi} sortMethod={sortByDay} />
  ))
  .add('sort(location)', () => (
    <ClassList classes={multi} sortMethod={sortByString(xx => xx.location)} />
  ))
  .add('sort(level)', () => (
    <ClassList classes={multi} sortMethod={sortByLevel}/>
  ))
  .add('sort(cost)', () => (
    <ClassList classes={multi} sortMethod={sortByNumber(xx => xx.cost)} />
  ))
  .add('sort(balance)', () => (
    <ClassList classes={multi} sortMethod={sortByNumber(xx => xx.leads - xx.follows)}/>
  ))

storiesOf('ToggleVisible', module)
  .add('visible', () => (
    <ToggleVisible visible={true} text="Filter and Sort Classes" icon={FilterIcon}>
      <ClassFilter classes={multi} />
    </ToggleVisible>
  ))
  .add('hidden', () => (
    <ToggleVisible visible={false} text="Filter and Sort Classes" icon={FilterIcon}>
      <ClassFilter classes={multi} />
    </ToggleVisible>
  ))