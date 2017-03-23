// @flow
import React from 'react'
import type {FilterOptionComponentProps} from '../types'

const FilterOption = ({index, group, value, setStatus, checked=false}: FilterOptionComponentProps) => (
  <div>
    <label>
      <input type="checkbox" name={group} value={value}
             onChange={(ee) => setStatus(index, value, ee.target.checked)}
             checked={checked}
      />
      {value}
    </label>
  </div>
)

export default FilterOption