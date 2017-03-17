
import React from 'react'
import SortOption from './SortOption'

const SortGroup = ({name, options, setSort}) => (
  <div className='sort-group' id={name}>
    <h4>{name}</h4>
    {options.map((xx) => <SortOption key={xx.name} name={xx.name} group={name} setSort={() => setSort(xx.method)} />)}
  </div>
)

SortGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  setSort: React.PropTypes.func.isRequired,
}

export default SortGroup