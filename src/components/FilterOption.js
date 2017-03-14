import React from 'react'

const FilterOption = ({group, value, setStatus}) => (
  <div>
    <label>
      <input type="checkbox" name={group} value={value}
             onChange={(ee) => setStatus(group, value, ee.target.checked)}
      />
      {value}
    </label>
  </div>
)

FilterOption.propTypes = {
  group: React.PropTypes.string.isRequired,
  setStatus: React.PropTypes.func.isRequired,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
}

export default FilterOption