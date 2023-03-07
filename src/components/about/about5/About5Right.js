import React, { Component } from "react";
import SectionTitle from "../../common/SectionTitle";

export default class About5Right extends Component {
  render() {
    return (
      <>
        <div className='col-lg-6'>
          <div className='section-content-box pl-5'>
            <SectionTitle title='Who are we'>
              <h4 className='widget-title pt-4 pb-3'>ASE Group</h4>
            </SectionTitle>
            <div className='section-description'>
              <p className='section__desc mb-2'>
                We, ASE Group, are agents for several multinational companies,
                including British, Egyptian, Turkish, and others, which are
                companies specialized in the field of pharmaceutical, cosmetics,
                and medical supplies. We are now working in Iraq and the Middle
                East to meet the needs of people and the pharmaceutical market
                for pharmaceuticals by providing effective and reliable
                pharmaceuticals, and transporting Accurate scientific and
                economic information for health care providers such as doctors,
                pharmacists, and others, by adhering to the real role of the
                medical representative.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
