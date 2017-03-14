
import React from 'react'
import FilterOption from './FilterOption'

import '../styles/FilterGroup.css'

const FilterGroup = ({index, heading, options, setStatus}) => (
  <div className='filter-group'>
    <h4>{heading}</h4>
    {options.map((xx) => {
      return (
        <li key={xx}>
          <FilterOption index={index} group={heading} value={xx} setStatus={setStatus}/>
        </li>
      )}
    )}
  </div>
)

FilterGroup.propTypes = {
  index: React.PropTypes.string.isRequired,
  heading: React.PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string,
                                                              React.PropTypes.number])).isRequired,
  setStatus: React.PropTypes.func,
}

export default FilterGroup