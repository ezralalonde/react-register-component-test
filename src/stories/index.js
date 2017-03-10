import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'

import ClassInfo from '../components/ClassInfo'
import ClassList from '../components/ClassList'
import { single, multi } from './data'

storiesOf('ClassInfo', module)
  .add('basic', () => (
    <ClassInfo {...single} />
  ))

storiesOf('ClassList', module)
  .add('basic', () => (
    <ClassList classes={multi} />
  ))