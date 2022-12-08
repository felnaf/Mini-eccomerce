import React, { Component } from 'react';
import '../styles/style.css';
export class ProductDisplay extends Component {
  // state = {
  //   count: 0,
  // };
  // onIncremet = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };
  onButtonClick = (id, mode) => {
    this.props.addToCart(id, mode);
  };

  render() {
    let pro = this.props.products;

    if (this.props.size.length > 0) {
      pro = pro.filter((a) => this.props.size.includes(a.size));
    }


    // if (this.props.size) {
    //   pro = pro.filter((a) => this.props.size === a.size);
    // }

    pro = pro.map((data, index) => {
      return (
        <div className="single" key={index}>
          <div className="card">
            <img
              className="card-img-top"
              src={data.img}
              alt="Card image cap"
              style={{ height: '300px' }}
            />
            <div className="card-body">
              <h5 className="card-title">{data.pname}</h5>
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.s
              </p> */}
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
              <button
                onClick={() =>
                  this.onButtonClick(
                    data.id,
                    this.props.productOnCart.includes(data.id)
                      ? 'remove'
                      : 'add'
                  )
                }
                className={
                  this.props.productOnCart.includes(data.id)
                    ? 'btn btn-danger'
                    : 'btn btn-primary'
                }
              >
                {/* Add to Cart */}
                {this.props.productOnCart.includes(data.id)
                  ? 'Remove from cart'
                  : 'Add to cart'}
              </button>
              {/* <h2>{this.state.count}</h2> */}
            </div>
          </div>
        </div>
      );
    });
    return <div className="d-flex pro-dis flex-wrap">{pro}</div>;
  }
}

export default ProductDisplay;
