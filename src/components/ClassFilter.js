// @flow
import React from 'react'
import FilterGroup from './FilterGroup'
import type {ClassFilterComponentProps, ClassInfoType} from '../types'

const getOptions = (key: string, classes: Array<ClassInfoType>) => {
  let options = []
  classes.map((xx) => {
    !!xx[key] && !options.includes(xx[key]) && options.push(xx[key])
  })
  return options
}

const ClassFilter = ({classes, filters, setStatus, checkedBoxes}: ClassFilterComponentProps) => (
  <div>
    {
      filters.map((xx) => <FilterGroup
                            key={xx.key}
                            index={xx.key}
                            heading={xx.name}
                            options={getOptions(xx.key, classes)}
                            setStatus={setStatus}
                            checkedBoxes={checkedBoxes[xx.key] || []}
                          />)
    }
  </div>
)

export default ClassFilter