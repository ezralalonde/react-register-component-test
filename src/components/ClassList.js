import React from 'react'
import ClassInfo from './ClassInfo'
import './ClassList.css'

const ClassList = ({classes}) => (
  <div className="classList">
    <ul>
      {classes.map((xx) => <li key={xx.number}>{ClassInfo(xx)}</li>)}
    </ul>
  </div>
)

ClassList.propTypes = {
  classes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

export default ClassList