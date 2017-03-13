import React from 'react'
import FilterGroup from './FilterGroup'

const getOptions = (key, classes) => {
  let options = []
  classes.map((xx) => {
    if (!!xx[key] && !options.includes(xx[key])) {
      options.push(xx[key])
    }
  })
  return options
}

const ClassFilter = ({classes}) => (
  <div>
    <FilterGroup heading="Level" options={getOptions('level', classes)} />
    <FilterGroup heading="Price" options={getOptions('cost', classes)} />
    <FilterGroup heading="Location" options={getOptions('location', classes)} />
    <FilterGroup heading="Day" options={getOptions('day', classes)} />
  </div>
)

ClassFilter.propTypes = {
  classes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
}

export default ClassFilter