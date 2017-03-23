// @flow
import React from 'react'
import type {SortOptionComponentProps} from '../types'

const SortOption = ({name, group, setSort}: SortOptionComponentProps) => (
  <div>
    <label>
      <input type="radio" name={group} value={name} onChange={setSort} />
      {name}
    </label>
  </div>
)

export default SortOption