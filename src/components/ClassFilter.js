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

const ClassFilter = ({classes, filters, setStatus}) => (
  <div>
    {
      filters.map((xx) => <FilterGroup
                            key={xx.key}
                            heading={xx.name}
                            options={getOptions(xx.key, classes)}
                            setStatus={setStatus}
                          />)
    }
  </div>
)

ClassFilter.propTypes = {
  classes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  filters: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  setStatus: React.PropTypes.func,
}

export default ClassFilter