import React, { useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { FiMenu } from "react-icons/fi";
export default function Navbar({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  /*====  side-widget-menu  =====*/
  $(document).on(
    "click",
    ".side-menu-wrap .side-menu-ul .sidenav__item",
    function () {
      $(".side-menu-wrap .side-menu-ul .sidenav__item").removeClass("active");
      $(this).toggleClass("active");
    }
  );
  $(document).on(
    "click",
    ".side-menu-wrap .side-menu-ul .sidenav__item.active",
    function () {
      $(".side-menu-wrap .side-menu-ul .sidenav__item.active").removeClass(
        "active"
      );
    }
  );

  $(window).on("scroll", function () {
    //header fixed animation and control
    if ($(window).scrollTop() > 0) {
      $(".header-menu-area").addClass("d-none header-fixed");
      $(".scroll-d-block").addClass("d-block");
    } else {
      $(".header-menu-area").removeClass("header-fixed d-none");
      $(".scroll-d-block").removeClass("d-block").addClass("d-none");
    }

    //back to top button control
    if ($(window).scrollTop() > 300) {
      $("#scroll-top").addClass("back-btn-shown");
    } else {
      $("#scroll-top").removeClass("back-btn-shown");
    }
  });
  return (
    <>
      <section
        style={{ boxShadow: "0 10px 10px #0000001a" }}
        className='header-menu-area'
      >
        {children}
        <div className='header-menu-fluid'>
          <div className='container '>
            <div className='row align-items-center main-menu-content'>
              <div className='col-lg-3'>
                <div className='logo-box'>
                  <Link to='/' className='logo'>
                    <img
                      style={{
                        height: "3.5rem",
                        width: "auto",
                      }}
                      src={"/images/ASE group-03.svg"}
                      alt='logo'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-lg-8'>
                <div className='menu-wrapper'>
                  <nav className='main-menu'>
                    <ul>
                      <li>
                        <Link to='/'>Home</Link>
                      </li>
                      <li>
                        <Link to='/about'>About Us</Link>
                      </li>
                      <li>
                        <Link to='/contact'>Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className='logo-right-button'>
                    <div
                      className='side-menu-open'
                      onClick={() => setNavOpen(!navOpen)}
                    >
                      <FiMenu />
                    </div>
                  </div>
                  <div
                    className={
                      navOpen
                        ? "side-nav-container active"
                        : "side-nav-container"
                    }
                  >
                    <div className='humburger-menu'>
                      <div
                        className='humburger-menu-lines side-menu-close'
                        onClick={() => setNavOpen(!navOpen)}
                      ></div>
                    </div>
                    <div className='side-menu-wrap'>
                      <ul className='side-menu-ul'>
                        <li className='sidenav__item'>
                          <Link to='/'>home</Link>
                        </li>
                        <li className='sidenav__item'>
                          <Link to='/about'>about</Link>
                        </li>
                        <li className='sidenav__item'>
                          <Link to='/contact'>contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ boxShadow: "0 10px 10px #0000001a" }}
        className='header-menu-area d-none scroll-d-block'
      >
        {children}
        <div className='header-menu-fluid'>
          <div className='container '>
            <div className='row align-items-center main-menu-content'>
              <div className='col-lg-3'>
                <div className='logo-box'>
                  <Link to='/' className='logo'>
                    <img
                      className='logo'
                      style={{
                        height: "3.5rem",
                        width: "auto",
                      }}
                      src={"/images/ASE group-03.svg"}
                      alt='logo'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-lg-9'>
                <div className='menu-wrapper'>
                  <nav className='main-menu'>
                    <ul>
                      <li>
                        <Link to='/'>Home</Link>
                      </li>
                      <li>
                        <Link to='/about'>About Us</Link>
                      </li>
                      <li>
                        <Link to='/contact'>Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className='logo-right-button'>
                    <div
                      className='side-menu-open'
                      onClick={() => setNavOpen(!navOpen)}
                    >
                      <FiMenu />
                    </div>
                  </div>
                  <div
                    className={
                      navOpen
                        ? "side-nav-container active"
                        : "side-nav-container"
                    }
                  >
                    <div className='humburger-menu'>
                      <div
                        className='humburger-menu-lines side-menu-close'
                        onClick={() => setNavOpen(!navOpen)}
                      ></div>
                    </div>
                    <div className='side-menu-wrap'>
                      <ul className='side-menu-ul'>
                        <li className='sidenav__item'>
                          <Link to='/'>home</Link>
                        </li>
                        <li className='sidenav__item'>
                          <Link to='/about'>about</Link>
                        </li>
                        <li className='sidenav__item'>
                          <Link to='/contact'>contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
