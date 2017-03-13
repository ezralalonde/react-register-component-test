import React from 'react'

const FilterOption = ({name}) => (
  <div>
    <label>
      <input type="checkbox" value={name}/>
    </label>
    {name}
  </div>
)

FilterOption.propTypes = {
  name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
}

export default FilterOption