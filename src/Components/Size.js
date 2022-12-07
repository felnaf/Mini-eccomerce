import React, { Component } from 'react';
import '../styles/style.css';
class Size extends Component {
  //   onHandle = (size) => {
  //     this.props.filterSize(size);
  //   };
  Checked = (size) => {
    this.props.filterCheck(size);
  };
  Unchecked = (size) => {
    this.props.filterUncheck(size);
  };

  render() {
    let pro = this.props.products.map((product) => product.size);
    // console.log(pro);
    pro = new Set(pro);
    // console.log(pro);
    pro = Array.from(pro);
    // console.log(pro);

    pro = pro.map((a, index) => {
      return (
        <div className="filter" key={index}>
          <div className="form-check ">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              //   onClick={() => this.onHandle(a.size)}
              onClick={(e) =>
                e.target.checked === true ? this.Checked(a) : this.Unchecked(a)
              }
            />
            <label className="form-check-label">{a}</label>
          </div>
          {/* <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label">XL</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label">XXL</label>
          </div> */}
        </div>
      );
    });
    return <div>{pro}</div>;
  }
}

export default Size;
