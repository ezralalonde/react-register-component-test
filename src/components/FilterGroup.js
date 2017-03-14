
import React from 'react'
import FilterOption from './FilterOption'

import '../styles/FilterGroup.css'

const FilterGroup = ({heading, options, setStatus}) => (
  <div className='filter-group'>
    <h4>{heading}</h4>
    {options.map((xx) => {
      return (
        <li key={xx}>
          <FilterOption group={heading} value={xx} setStatus={setStatus}/>
        </li>
      )}
    )}
  </div>
)

FilterGroup.propTypes = {
  heading: React.PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string,
                                                              React.PropTypes.number])).isRequired,
  setStatus: React.PropTypes.func.isRequired,
}

export default FilterGroup