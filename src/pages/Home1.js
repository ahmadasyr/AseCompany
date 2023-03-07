import React, { Component } from "react";
import Navbar from "../components/common/Navbar";
import HeroSlider from "../components/sliders/HeroSlider";
import SectionTitle from "../components/common/SectionTitle";
import AboutOne from "../components/about/about1/AboutOne";
import Border from "../components/common/Border";
import AboutTwo from "../components/about/about2/AboutTwo";
import HowItWork from "../components/hiw/HowItWork";
import AboutThree from "../components/about/about3/AboutThree";
import ServiceOne from "../components/services/service1/ServiceOne";
import ServiceTwo from "../components/services/service2/ServiceTwo";
import MapOne from "../components/contact/map1/MapOne";
import Doctor from "../components/doctors/Doctor";
import Accordions from "../components/others/accordion/Accordions";
import FunFacts from "../components/others/funfact/FunFacts";
import BlogFeatured from "../components/blog/featured/BlogFeatured";
import NewsLetter from "../components/others/cta/newsletter/NewsLetter";
import ScrollTop from "../components/common/ScrollTop";
import Footer from "../components/common/Footer";

export default class Home1 extends Component {
  render() {
    return (
      <main className='home-v1'>
        <Navbar />
        <HeroSlider />
        <section className='about-area extra-z-index about-heading-width section-padding'>
          <SectionTitle
            title='Coronavirus Disease (COVIDE-19) Advice for the People'
            subtitle='Advice For People'
          />
          <AboutOne />
        </section>
        <Border />
        <section className='about-area about-two section--padding'>
          <AboutTwo />
        </section>
        <section className='hiw-area section-bg section--padding text-center'>
          <SectionTitle
            title='How Coronavirus Spreads'
            subtitle='Virus Spread'
          />
          <HowItWork />
        </section>
        <section className='about-area about-three before-after-none section-padding'>
          <AboutThree />
        </section>
        <Border />
        <section className='service-area section--padding text-center'>
          <SectionTitle
            title='Coronavirus Symptoms'
            subtitle='Virus Symptoms'
          />
          <ServiceOne />
        </section>
        <section className='service-area service-two section-bg section--padding'>
          <SectionTitle
            title='Important Precautions Follow on by one'
            subtitle='How To Be Safe'
          />
          <ServiceTwo />
        </section>
        <section className='map-area overflow-hidden section-padding'>
          <SectionTitle
            title='Coronavirus (COVID-19) Live Reports'
            subtitle='Coronavirus: Trucker'
          />
          <MapOne />
        </section>
        <Border />
        <section className='team-area section--padding'>
          <SectionTitle title='Meet Our Doctors' subtitle='Our Doctors' />
          <Doctor />
        </section>
        <section className='accordion-area section-bg section-padding'>
          <SectionTitle
            title='Looking For An Answer'
            subtitle='Frequently Ask Questions'
          />
          <Accordions />
        </section>
        <section className='funfact-area section--padding text-center'>
          <SectionTitle
            title='People are Infected by Coronavirus Worldwide Counting'
            subtitle='FunFact'
          />
          <FunFacts />
        </section>
        <Border />
        {/* <section className="blog-area section--padding">
                    <SectionTitle title="Check out Our Latest News & Articles" subtitle="Our Blog Posts" />
                    <BlogFeatured />
                </section> */}
        <section className='subscriber-area padding-top-80px padding-bottom-80px'>
          <NewsLetter />
        </section>
        <ScrollTop />
        <Footer />
      </main>
    );
  }
}
