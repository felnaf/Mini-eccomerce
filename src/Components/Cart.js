import React, { Component } from 'react'

class Cart extends Component {
  render() {
    return (
      <div className='cart'>
      cart<i className="fa-thin fa-cart-shopping">:{this.props.num}</i>
      </div>
    )
  }
}

export default Cart;
