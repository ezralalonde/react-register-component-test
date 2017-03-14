import React from 'react'
import ClassInfo from './ClassInfo'
import '../styles/ClassList.css'

const rev = (list, descending) => {
  if (descending) {
    list.reverse()
  }
  return list
}

const ClassList = ({classes, sortMethod, desc}) => (
  <div className="classList">
    <ul>
      {rev(classes.sort(sortMethod), desc).map((xx) => <li key={xx.number}>{ClassInfo(xx)}</li>)}
    </ul>
  </div>
)

ClassList.defaultProps = {
  sortMethod: ((xx, yy) => xx.number - yy.number),
  desc: false,
}

ClassList.propTypes = {
  classes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  sortMethod: React.PropTypes.func,
  desc: React.PropTypes.bool,
}

export default ClassList