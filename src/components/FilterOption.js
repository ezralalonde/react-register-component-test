import React from 'react'

const FilterOption = ({index, group, value, setStatus, checked}) => (
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

FilterOption.defaultProps = {
  checked: false,
}

FilterOption.propTypes = {
  checked: React.PropTypes.bool.isRequired,
  index: React.PropTypes.string.isRequired,
  group: React.PropTypes.string.isRequired,
  setStatus: React.PropTypes.func.isRequired,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
}

export default FilterOption