import React, { Component } from "react";
import SectionTitle from "../../common/SectionTitle";

export default class AboutLeft extends Component {
  render() {
    return (
      <>
        <div className='col-lg-5'>
          <div className='about-item-box'>
            <SectionTitle
              title='Know More About Us'
              subtitle='More Information About ASE Group'
            />
            <div className='section-description padding-top-20px'>
              <p className='section__desc'>
                We are also working on employing expertise and modern technology
                for the purpose of advancing the medical and pharmaceutical fact
                in the field of pharmaceutical marketing in the region, by
                creating a friendly work environment, developing human resources
                and introducing modern technology in the work of pharmaceutical
                marketing for all health care providers. Our vision is for the
                pharmaceutical work environment to become an easier and more
                organized one.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
