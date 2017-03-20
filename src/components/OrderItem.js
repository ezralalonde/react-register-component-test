import React from 'react'

import '../styles/OrderItem.css'

const RemoveButton = ({fn}) => (
  <button className="remove-button" onClick={fn}>X</button>
)

const OrderItem = ({itemKey, role, number, fn}) => (
  <div className="order-item">
    <span>Class {number}</span>
    <span>{role}</span>
    <RemoveButton fn={() => fn(itemKey)} />
  </div>
)

export default OrderItem