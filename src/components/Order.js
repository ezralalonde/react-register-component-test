import React from 'react'

import OrderItem from './OrderItem'

const Order = ({orders, removeFn}) => (
  <div>
    {orders.map((xx) => <OrderItem key={xx.itemKey} {...xx} fn={removeFn} />)}
  </div>
)

Order.protTypes = {
  orders: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  removeFn: React.PropTypes.func.isRequired,
}

export default Order