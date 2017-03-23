// @flow
import React from 'react'
import type {ClassAddButtonComponentProps} from '../types'

const ClassAddButton = ({children, onClick}: ClassAddButtonComponentProps) => (
  <button onClick={onClick}>
    {children}
  </button>
)

export default ClassAddButton