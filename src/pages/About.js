import React, { Component } from "react";
import Navbar from "../components/common/Navbar";
import Breadcrumb from "../components/common/Breadcrumb";
import AboutFive from "../components/about/about5/AboutFive";
import AboutTwo from "../components/about/about2/AboutTwo";
import ServiceOne from "../components/services/service1/ServiceOne";
import SectionTitle from "../components/common/SectionTitle";
import Doctor from "../components/doctors/Doctor";
import Footer from "../components/common/Footer";
import ScrollTop from "../components/common/ScrollTop";

export default class About extends Component {
  render() {
    return (
      <main className='about'>
        <Navbar />
        <Breadcrumb title='About Us' />
        <section className='about-area about5 before-after-none padding-top-140px padding-bottom-120px'>
          <AboutFive />
          <div className='container mt-50'>
            <AboutTwo />
          </div>
        </section>
        {/* <section className='service-area section-bg section--padding text-center'>
          <SectionTitle
            title='Coronavirus Symptoms'
            subtitle='Virus Symptoms'
          />
          <ServiceOne />
        </section>
        <section className='team-area section--padding'>
          <SectionTitle title='Meet Our Doctors' subtitle='Our Doctors' />
          <Doctor />
        </section> */}
        <ScrollTop />
        <Footer />
      </main>
    );
  }
}
