import React from 'react'

import ToggleVisible from './ToggleVisible'
import SortGroup from './SortGroup'
import ClassFilter from './ClassFilter'
import ClassList from './ClassList'

class ClassPicker extends React.Component {
  state = {
    activeSort: this.props.defaultSort,
    checkStatus: {},
  }

  setSort = (method) => {
    this.setState((prev, props) => {
      return {
        activeSort: method,
      }
    })
  }

  addStatus = (status, group, value) => {
    if (!status) {
      status = {}
    }
    if (!status[group]) {
      status[group] = []
    }
    status[group].push(value)
    return status
  }

  setChecked = (group, value, checked) => {
    this.setState((prev, props) => {
      let checkStatus = prev.checkStatus
      if (checked) {
        this.addStatus(checkStatus, group, value)
      } else {
        checkStatus[group] = null
      }
      return {
        checkStatus
      }
    })
  }

  render() {
    const {
      classes,
      classFilterOptions,
      classSortMethod,
      classSortOptions,
      toggleIcon,
      toggleText,
    } = this.props

    const {
      activeSort
    } = this.state

    return (
      <div className="class-picker">
        <ToggleVisible visible={true} text={toggleText} icon={toggleIcon}>
          <SortGroup name="Sort" options={classSortOptions} setSort={this.setSort} />
          <ClassFilter classes={classes} filters={classFilterOptions} setStatus={this.setChecked} />
        </ToggleVisible>
        <ClassList classes={classes} sortMethod={activeSort} />
      </div>
    )
  }

  defaultProps = {
    defaultSort: (xx, yy) => xx.number - yy.number
  }

  static propTypes = {
    defaultSort: React.PropTypes.func,
    classes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    classFilterOptions: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    classSortOptions: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    toggleIcon: React.PropTypes.string,
    toggleText: React.PropTypes.string.isRequired,
  }
}

export default ClassPicker