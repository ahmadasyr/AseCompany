import React, { Component } from "react";

export default class Copyright extends Component {
  render() {
    return (
      <>
        <div className='col-lg-12'>
          <div className='copyright-content text-center'>
            <p className='copy__desc'>
              &copy; 2023 ASE Group. All Rights Reserved. By{" "}
              <a href='https://whynot-tech.com'>
                <b style={{ color: "orange" }}>Why Not Tech.</b>
              </a>
            </p>
          </div>
        </div>
      </>
    );
  }
}
