import React from 'react'

const FilterOption = ({index, group, value, setStatus}) => (
  <div>
    <label>
      <input type="checkbox" name={group} value={value}
             onChange={(ee) => setStatus(index, value, ee.target.checked)}
      />
      {value}
    </label>
  </div>
)

FilterOption.defaultProps = {
  setStatus: console.log
}

FilterOption.propTypes = {
  index: React.PropTypes.string.isRequired,
  group: React.PropTypes.string.isRequired,
  setStatus: React.PropTypes.func,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
}

export default FilterOption