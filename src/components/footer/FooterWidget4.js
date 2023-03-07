import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FooterWidget4 extends Component {
  render() {
    return (
      <>
        <div className='col-lg-3 column-td-6'>
          <div className='footer-widget'>
            <h3 className='widget-title'>Contact Us</h3>
            <div className='section-divider'></div>
            <ul className='list-items'>
              <li>
                <span className='mr-1 font-weight-medium text-color'>
                  Address:
                </span>
                Baghdad, IRAQ.
              </li>
              <li>
                <span className='mr-1 font-weight-medium text-color'>
                  Email:
                </span>
                <Link to='#'>info@ase-group.org</Link>
              </li>
              <li>
                <span className='mr-1 font-weight-medium text-color'>
                  Phone:
                </span>
                <Link to='#'>+964 770 0000 000</Link>
              </li>
              <li>
                <span className='mr-1 font-weight-medium text-color'>
                  Phone:
                </span>
                <Link to='#'>+964 780 0000 000</Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
