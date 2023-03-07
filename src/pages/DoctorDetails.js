import React, { Component } from 'react'
import Navbar2 from '../components/common/Navbar2'
import Breadcrumb from '../components/common/Breadcrumb'
import DoctorTop from '../components/doctors/doctordetails/DoctorTop'
import DoctorBottom from '../components/doctors/doctordetails/DoctorBottom'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'

export default class DoctorDetails extends Component {
    render() {
        return (
            <main className="doctor-details">
                <Navbar2 />
                <Breadcrumb title="Doctor Details" />
                <section className="team-details-area padding-top-140px padding-bottom-120px">
                    <div className="container">
                        <DoctorTop />
                        <DoctorBottom />
                    </div>
                </section>
                <ScrollTop />
                <Footer />
            </main>
        )
    }
}
