import React, { Component } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default class FooterWidget1 extends Component {
  render() {
    return (
      <>
        <div className='col-lg-3 column-td-6'>
          <div className='footer-widget'>
            <a href='index.html'>
              <img
                src='images/ASE group-03.svg'
                alt='footer logo'
                className='footer__logo'
                style={{ width: "80%" }}
              />
            </a>
            <p className='padding-top-30px padding-bottom-20px'>
              ASE Group, are agents for several multinational companies,
              including British, Egyptian, Turkish, and others, which are
              companies specialized in the field of pharmaceutical, cosmetics,
              and medical supplies.
            </p>
            <h3 className='widget-title font-size-16 font-weight-medium pb-3 mb-0'>
              Connect with us
            </h3>
            <ul className='social-links'>
              <li>
                <a href='https://facebook.com'>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href='https://twitter.com'>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href='https://linkedin.com'>
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href='https://instagram.com'>
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
