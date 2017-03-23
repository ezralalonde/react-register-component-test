// @flow
import React from 'react'
import SortOption from './SortOption'
import type {SortGroupComponentProps} from '../types'

const SortGroup = ({name, options, setSort}: SortGroupComponentProps) => (
  <div className='sort-group' id={name}>
    <h4>{name}</h4>
    {options.map((xx) => <SortOption key={xx.name} name={xx.name} group={name} setSort={() => setSort(xx.method)} />)}
  </div>
)

export default SortGroup