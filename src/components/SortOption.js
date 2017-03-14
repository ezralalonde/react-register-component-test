import React from 'react'

const SortOption = ({name, group, onClick}) => (
  <div>
    <label>
      <input type="radio" name={group} value={name} onClick={onClick} />
      {name}
    </label>
  </div>
)

SortOption.propTypes = {
  group: React.PropTypes.string.isRequired,
  name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
  onClick: React.PropTypes.func.isRequired,
}

export default SortOption