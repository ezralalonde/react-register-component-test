import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'

import ClassInfo from '../components/ClassInfo'
import ClassFilter from '../components/ClassFilter'
import ClassList from '../components/ClassList'
import FilterGroup from '../components/FilterGroup'
import FilterOption from '../components/FilterOption'
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

storiesOf('ClassList', module)
  .add('basic', () => (
    <ClassList classes={multi} />
  ))