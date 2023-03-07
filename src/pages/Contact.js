import React, { Component } from "react";
import Navbar from "../components/common/Navbar";
import Breadcrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/contactform/ContactForm";
import Maps from "../components/contact/ContactMap";
import Footer from "../components/common/Footer";
import ScrollTop from "../components/common/ScrollTop";

export default class Contact extends Component {
  render() {
    return (
      <main className='contact'>
        <Navbar />
        <Breadcrumb title='Contact us' />
        <section className='contact-area padding-top-140px padding-bottom-120px'>
          <ContactForm />
        </section>
        <div className='map-container'>{/* <Maps /> */}</div>
        <ScrollTop />
        <Footer />
      </main>
    );
  }
}
