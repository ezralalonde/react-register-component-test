import React from 'react'
import ClassInfo from './ClassInfo'
import ClassAddButton from './ClassAddButton'
import '../styles/ClassList.css'

const ClassList = ({buttons, classes}) => (
  <div className="classList">
    <ul>
      {classes.map((xx) => (
        <li key={xx.number}>
          <ClassInfo {...xx} />
          {buttons &&
           buttons.map((yy) => (
              <ClassAddButton
                key={yy.index}
                onClick={() => yy.onClick({...xx, role: yy.index})}
              >
                {yy.text(xx)}
              </ClassAddButton>
            )
          )}
        </li>
      ))}
    </ul>
  </div>
)

ClassList.propTypes = {
  buttons: React.PropTypes.arrayOf(React.PropTypes.object),
  classes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
}

export default ClassList