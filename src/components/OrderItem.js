// @flow
import React from 'react'

import '../styles/OrderItem.css'
import type {OrderItemComponentProps, RemoveOrderButtonComponentProps} from '../types'

const RemoveButton = ({fn}: RemoveOrderButtonComponentProps) => (
  <button className="remove-button" onClick={fn}>X</button>
)

const OrderItem = ({itemKey, role, number, fn}: OrderItemComponentProps) => (
  <div className="order-item">
    <span>Class {number}</span>
    <span>{role}</span>
    <RemoveButton fn={() => fn(itemKey)} />
  </div>
)

export default OrderItem