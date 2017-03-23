// @flow
import React from 'react'

import ToggleVisible from './ToggleVisible'
import SortGroup from './SortGroup'
import ClassFilter from './ClassFilter'
import ClassList from './ClassList'
import type {ClassPickerComponentProps, ClassInfoType, CheckedStatus} from '../types'

class ClassPicker extends React.Component {
  props: ClassPickerComponentProps

  state = {
    activeSort: this.props.classSortMethod,
    checkStatus: {},
  }

  setSort = (method: Function) => {
    this.setState((prev, props) => {
      return {
        activeSort: method,
      }
    })
  }

  addStatus = (status: CheckedStatus, group: string, value: string) => {
    status = status || {}
    status[group] = status[group] || []
    status[group].push(value)
    return status
  }

  deleteStatus = (status: CheckedStatus, group: string, value: string) => {
    const index = status[group].indexOf(value)
    index !== -1 && status[group].splice(index, 1)
    status[group].length === 0 && delete status[group]
  }

  setChecked = (group: string, value: string, checked: boolean) => {
    this.setState((prev, props) => {
      let checkStatus = prev.checkStatus
      checked ? this.addStatus(checkStatus, group, value) :
                this.deleteStatus(checkStatus, group, value)
      return {
        checkStatus
      }
    })
  }

  filterClasses = (xx: ClassInfoType) => {
    const {
      checkStatus
    } = this.state
    let display = true
    Object.keys(checkStatus).map((yy) => {
      display = display && checkStatus[yy].reduce((sum, zz) => sum || xx[yy] === zz, false)
    })
    return display
  }

  render() {
    const {
      classes,
      classButtons,
      classFilterOptions,
      classSortMethod = (xx: ClassInfoType, yy: ClassInfoType) => Number(xx.number) - Number(yy.number),
      classSortOptions,
      toggleIcon,
      toggleText,
    }:ClassPickerComponentProps = this.props

    const {
      activeSort
    } = this.state

    return (
      <div className="class-picker">
        <ToggleVisible visible={true} text={toggleText} icon={toggleIcon}>
          <SortGroup name="Sort" options={classSortOptions} setSort={this.setSort} />
          <ClassFilter
            classes={classes}
            filters={classFilterOptions}
            setStatus={this.setChecked} 
            checkedBoxes={this.state.checkStatus}
          />
        </ToggleVisible>
        <ClassList
          buttons={classButtons}
          classes={classes.slice().sort(activeSort).filter(this.filterClasses)}
        />
      </div>
    )
  }
}

export default ClassPicker