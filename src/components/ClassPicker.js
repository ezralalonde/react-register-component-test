import React from 'react'

import ToggleVisible from './ToggleVisible'
import SortGroup from './SortGroup'
import ClassFilter from './ClassFilter'
import ClassList from './ClassList'

class ClassPicker extends React.Component {
  state = {
    activeSort: this.props.defaultSort
  }

  setSort = (method) => {
    this.setState({activeSort: method})
    console.log(method)
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
          <ClassFilter classes={classes} filters={classFilterOptions} />
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