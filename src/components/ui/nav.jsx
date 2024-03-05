import { useState, useEffect } from 'react';
import contactInfo from '../../pages/Contact/contact.js';
import { colors } from '../../styles/styles.js';
import '../../styles/styles.js';

const contact = contactInfo.contactInfo;

const handleNavClick = (selectedLocation) => {
  const element = document.getElementById(selectedLocation);
  element?.scrollIntoView({
    behavior: 'smooth',
  });
};

const handleNavClickExternal = (targetedLocation) => {
  window.open(targetedLocation, '_blank');
};

function Nav() {
  const [isActive, setisActive] = useState(false);

  return (
    <>
      <nav
        // id='navbar'
        className='navbar is-fixed-top'
        role='navigation'
        aria-label='main navigation'
        style={{
          backgroundColor: colors.LIGHT,
          color: colors.GREY,

          letterSpacing: '1px',
        }}>
        {/* Brand / Logo */}
        <div className='navbar-brand'>
          <a
            className='navbar-item'
            href=''>
            <img
              src='/images/s-logo.png'
              width='40'
              height='40'
            />
          </a>

          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role='button'
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div
          id='navbar'
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          {/* Start */}

          <div className='navbar-start'>
            {/* Home */}

            <a
              className='navbar-item'
              style={{ color: colors.BLACK }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }>
              Home
            </a>

            {/* Services */}
            <a
              className='navbar-item'
              style={{ color: colors.BLACK }}
              onClick={() => {
                handleNavClick('services');
              }}>
              What We Do
            </a>

            {/* About */}
            <a
              className='navbar-item'
              style={{ color: colors.BLACK }}
              onClick={() => {
                handleNavClick('about');
              }}>
              About The Doctor
            </a>

            {/* Contact */}
            <a
              className='navbar-item'
              style={{ color: colors.BLACK }}
              onClick={() => {
                handleNavClick('footer');
              }}>
              Contact Us!
            </a>
          </div>

          <div
            className='navbar-end'
            style={{ backgroundColor: colors.LIGHT }}>
            <a
              className='navbar-item'
              style={{ color: colors.BLACK }}
              onClick={() => {
                console.log(contact.scheduler);
                handleNavClickExternal(contact.scheduler);
              }}>
              Schedule An Appointment
              <span className='icon-size'> ↗︎</span>
            </a>
          </div>
        </div>
        {/* End */}
      </nav>
    </>
  );
}

export default Nav;

