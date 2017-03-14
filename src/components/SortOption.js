import React from 'react'

const SortOption = ({name, group, setSort}) => (
  <div>
    <label>
      <input type="radio" name={group} value={name} onChange={setSort} />
      {name}
    </label>
  </div>
)

SortOption.propTypes = {
  group: React.PropTypes.string.isRequired,
  name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
  setSort: React.PropTypes.func.isRequired,
}

export default SortOption