// @flow
import React from 'react'

import OrderItem from './OrderItem'
import type {OrderComponentProps} from '../types'

const Order = ({orders, removeFn}: OrderComponentProps) => (
  <div>
    {orders.map((xx) => <OrderItem key={xx.itemKey} {...xx} fn={removeFn} />)}
  </div>
)

export default Order