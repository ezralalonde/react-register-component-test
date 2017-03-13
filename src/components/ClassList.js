import React from 'react'
import ClassInfo from './ClassInfo'
import '../styles/ClassList.css'

const ClassList = ({classes, sortMethod}) => (
  <div className="classList">
    <ul>
      {classes.sort(sortMethod).map((xx) => <li key={xx.number}>{ClassInfo(xx)}</li>)}
    </ul>
  </div>
)

ClassList.defaultProps = {
  sortMethod: ((xx, yy) => xx.number - yy.number),
}

ClassList.propTypes = {
  classes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  getValue: React.PropTypes.func,
  sortMethod: React.PropTypes.func,
}

export default ClassList