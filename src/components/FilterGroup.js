
import React from 'react'
import FilterOption from './FilterOption'

import './FilterGroup.css'

const FilterGroup = ({heading, options}) => (
  <div className='filter-group'>
    <h4>{heading}</h4>
    {options.map((xx) => <li key={xx}><FilterOption name={xx} /></li>)}
  </div>
)

FilterGroup.propTypes = {
  heading: React.PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string,
                                                              React.PropTypes.number])).isRequired,
}

export default FilterGroup