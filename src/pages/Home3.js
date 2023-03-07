import React, { Component } from 'react'
import Navbar3 from '../components/common/Navbar3'
import SectionTitle from '../components/common/SectionTitle'
import MapOne from '../components/contact/map1/MapOne'
import HowItWork from '../components/hiw/HowItWork'
import ServiceThree from '../components/services/service3/ServiceThree'
import HowItWork2 from '../components/hiw/hiw2/HowItWork2'
import CTA2 from '../components/others/cta/cta2/CTA2'
import AboutThree from '../components/about/about3/AboutThree'
import ServiceTwo from '../components/services/service2/ServiceTwo'
import Doctor from '../components/doctors/Doctor'
import Accordions from '../components/others/accordion/Accordions'
import BestFeatured from '../components/blog/best/BestFeatured'
import BannerHome3 from '../components/banners/BannerHome3'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'

export default class Home3 extends Component {
    render() {
        return (
            <main className="home-3">
                <Navbar3 />
                <BannerHome3 />
                <section className="map-area livemap2 overflow-hidden section-padding">
                    <SectionTitle title="Coronavirus Diseases (COVID-19) Worldwide Situation" subtitle="Coronavirus: Trucker" />
                    <MapOne />
                </section>
                <section className="hiw-area section--padding section-bg text-center">
                    <SectionTitle title="How Corona Virus Spreads" subtitle="Virus Spread" />
                    <HowItWork />
                </section>
                <section className="service-area service3 section-padding">
                    <SectionTitle title="Coronavirus Symptoms" subtitle="Virus Symptoms" />
                    <ServiceThree />
                </section>
                <section className="hiw-area hiw2 section--padding section-bg text-center">
                    <SectionTitle title="How to Wash Your Hands Follow the Step one by one" subtitle="Follow The washing Steps" />
                    <HowItWork2 />
                </section>
                <section className="subscriber-area cta-2 padding-top-80px padding-bottom-80px">
                    <CTA2 />
                </section>
                <section className="about-area about-three before-after-none section-padding">
                    <AboutThree />
                </section>
                <section className="service-area service-two section-bg section--padding">
                    <SectionTitle title="Important Precautions Follow on by one" subtitle="How To Be Safe" />
                    <ServiceTwo />
                </section>
                <section className="team-area section--padding">
                    <SectionTitle title="Meet Our Doctors" subtitle="Our Doctors" />
                    <Doctor />
                </section>
                <section className="accordion-area section-bg section-padding">
                    <SectionTitle title="Looking For An Answer" subtitle="Frequently Ask Questions" />
                    <Accordions />
                </section>
                <section className="blog-area section--padding">
                    <SectionTitle title="Check out Our Latest News & Articles" subtitle="Our Blog Posts" />
                    <BestFeatured />
                </section>
                <ScrollTop />
                <Footer />
            </main>
        )
    }
}
