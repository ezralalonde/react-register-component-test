import React from 'react'

const ClassAddButton = ({children, onClick}) => (
  <button onClick={onClick}>
    {children}
  </button>
)

ClassAddButton.propTypes = {
  children: React.PropTypes.node,
  onClick: React.PropTypes.func.isRequired,
}

export default ClassAddButton