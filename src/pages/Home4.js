import React, { Component } from 'react'
import HeaderBar from '../components/common/headerbar/HeaderBar'
import Navbar from '../components/common/Navbar'
import BannerFour from '../components/banners/banner4/BannerFour'
import HowItWork3 from '../components/hiw/hiw3/HowItWork3'
import SectionTitle from '../components/common/SectionTitle'
import ServiceFour from '../components/services/service4/ServiceFour'
import CTA2 from '../components/others/cta/cta2/CTA2'
import AboutSix from '../components/about/about6/AboutSix'
import Timeline from '../components/others/timeline/Timeline'
import MapOne from '../components/contact/map1/MapOne'
import HowItWork2 from '../components/hiw/hiw2/HowItWork2'
import ServiceTwo from '../components/services/service2/ServiceTwo'
import Border from '../components/common/Border'
import Doctor from '../components/doctors/Doctor'
import Accordions from '../components/others/accordion/Accordions'
import Clients from '../components/others/client/Clients'
import BestFeatured from '../components/blog/best/BestFeatured'
import ScrollTop from '../components/common/ScrollTop'
import Footer from '../components/common/Footer'

export default class Home4 extends Component {
    render() {
        return (
            <main className="home-4">
                <Navbar>
                    <HeaderBar />
                </Navbar>
                <section className="slider-area extra-z-index banner-area-3">
                    <BannerFour />
                </section>
                <section className="hiw-area section--padding text-center">
                    <SectionTitle title="How Coronavirus Spreads" subtitle="Virus Spread" />
                    <HowItWork3 />
                </section>
                <section className="service-area section-bg section-padding">
                    <SectionTitle title="Coronavirus Symptoms" subtitle="Virus Symptoms" />
                    <ServiceFour />
                </section>
                <section className="subscriber-area cta-2 padding-top-80px padding-bottom-80px">
                    <CTA2 />
                </section>
                <section className="about-area before-after-none margin-bottom-120px padding-top-120px padding-bottom-140px">
                    <SectionTitle title="What's in a name? A lot apparently" subtitle="Coronavirus" />
                    <AboutSix />
                </section>
                <section className="timeline-area section-padding section-bg">
                    <SectionTitle title="Coronavirus: A Timeline" subtitle="Timeline" />
                    <Timeline />
                </section>
                <section className="map-area overflow-hidden section-padding">
                    <SectionTitle title="Mapping the Coronavirus (COVID-19) Outbreak" subtitle="Coronavirus: Trucker" />
                    <MapOne />
                </section>
                <section className="hiw-area section--padding section-bg text-center">
                    <SectionTitle title="How to Wash Your Hands Follow the Step one by one" subtitle="FollowThe Washing Steps" />
                    <HowItWork2 />
                </section>
                <section className="service-area service-two section--padding">
                    <SectionTitle title="Important Precautions Follow one by one" subtitle="How To Be Safe" />
                    <ServiceTwo />
                </section>
                <Border />
                <section className="team-area section--padding">
                    <SectionTitle title="Meet Our Doctors" subtitle="Our Doctors" />
                    <Doctor />
                </section>
                <section className="accordion-area section-bg section-padding">
                    <SectionTitle title="Looking For An Answer" subtitle="Frequently Ask Questions" />
                    <Accordions />
                </section>
                <section className="clientlogo-area padding-top-120px padding-bottom-100px text-center">
                    <Clients />
                </section>
                <Border />
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
