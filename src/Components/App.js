import React, { Component } from 'react';
import Products from './Product';
import ProductDisplay from './ProductDisplay';
import Cart from './Cart';
import Size from './Size';
import '../styles/style.css';

class App extends Component {
  state = {
    cart: [],
    filter: null,
  };
  addToCart = (id, mode) => {
    this.setState({
      cart:
        mode === 'add'
          ? [...this.state.cart, id]
          : this.state.cart.filter((p) => p !== id),
    });
  };
  onFilterchange = (filter) => {
    //xs || null
    this.setState({ filter });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Cart num={this.state.cart.length} />
        <h5 style={{ marginLeft: '80px' }}>Size: </h5>
        <Size
          products={Products}
          onFilterchange={this.onFilterchange}
          filterSeletced={this.state.filter}
        />
        <ProductDisplay
          products={Products}
          productOnCart={this.state.cart}
          addToCart={this.addToCart}
          size={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
