
// @flow
import React from 'react'
import FilterOption from './FilterOption'

import '../styles/FilterGroup.css'
import type {FilterGroupComponentProps} from '../types'

const FilterGroup = ({index, heading, options, setStatus, checkedBoxes}: FilterGroupComponentProps) => (
  <div className='filter-group'>
    <h4>{heading}</h4>
    {options.map((xx) => {
      return (
        <li key={xx}>
          <FilterOption
            index={index}
            group={heading}
            value={xx}
            setStatus={setStatus}
            checked={(() => checkedBoxes.indexOf(xx) !== -1)()}
          />
        </li>
      )}
    )}
  </div>
)

export default FilterGroup