import React, { Component } from 'react';
import '../styles/style.css';
import { onlyUnique } from '../utils';
class Size extends Component {
  render() {
    let pro = this.props.products
      .map((product) => product.size)
      .filter(onlyUnique);
    pro = pro.map((a, index) => {
      return (
        <div className="filter" key={index}>
          <div className="form-check ">
            <input
              className="form-check-input"
              type="checkbox"
              checked={this.props.filterSeletced.includes(a)}
              onChange={(e) =>
                this.props.onFilterchange(e.target.checked === true ? a : null)
              }
            />
            <label className="form-check-label">{a}</label>
          </div>
        </div>
      );
    });
    return <div>{pro}</div>;
  }
}

export default Size;
