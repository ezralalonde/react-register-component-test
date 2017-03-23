// @flow
import React from 'react'
import ClassInfo from './ClassInfo'
import ClassAddButton from './ClassAddButton'
import '../styles/ClassList.css'
import type {ClassListComponentProps, ClassInfoType, ButtonInfoType} from '../types'

const ClassList = ({buttons, classes}: ClassListComponentProps) => (
  <div className="classList">
    <ul>
      {classes.map((xx: ClassInfoType) => (
        <li key={xx.number}>
          <ClassInfo {...xx} />
          {buttons &&
           buttons.map((yy: ButtonInfoType) => (
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

export default ClassList