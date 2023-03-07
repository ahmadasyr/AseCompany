import React, { Component } from 'react'
import Navbar2 from '../components/common/Navbar2'
import Breadcrumb from '../components/common/Breadcrumb'
import Doctor from '../components/doctors/Doctor'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'

export default class Doctors extends Component {
    render() {
        return (
            <main className="doctors">
                <Navbar2 />
                <Breadcrumb title="Our Doctors" />
                <section className="team-area padding-top-140px padding-bottom-90px">
                    <Doctor />
                </section>
                <ScrollTop />
                <Footer />
            </main>
        )
    }
}
