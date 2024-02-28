import contactInfo from '../../pages/Contact/contact.js';
import { colors } from '../../assets/utils/styles.js';

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
  return (
    <>
      <nav
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
              src='src/assets/logo-white.png'
              width='100'
              height='100'
            />
          </a>

          {/* <a
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a> */}
        </div>
        <div
          id='navbar'
          className='navbar-menu'>
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
              Services
            </a>

            {/* Dropdown 
            <div className='navbar-item has-dropdown is-hoverable'>
              {/* <div className='navbar-dropdown'>
                <a
                  className='navbar-item'
                  to='/Prenatal'>
                  Prenatal
                </a>
                <a
                  className='navbar-item'
                  to='/Pediatric'>
                  Pediatric
                </a>
                <a
                  className='navbar-item'
                  to='/Family'>
                  Family
                </a>
                <a className='navbar-item'></a>
                <hr className='navbar-divider' />
              </div>
            </div> */}

            {/* About */}
            <a
              className='navbar-item'
              style={{ color: colors.BLACK }}
              onClick={() => {
                handleNavClick('about');
              }}>
              About
            </a>
            {/* Contact */}
            <a
              className='navbar-item'
              style={{ color: colors.BLACK }}
              onClick={() => {
                handleNavClick('footer');
              }}>
              Contact
            </a>
          </div>

          <div className='navbar-end'>
            <a
              className='navbar-item'
              style={{ color: colors.BLACK }}
              onClick={() => {
                console.log(contact.scheduler);
                handleNavClickExternal(contact.scheduler);
              }}>
              Schedule An Appointment
            </a>
          </div>
        </div>
        {/* End */}
      </nav>
    </>
  );
}

export default Nav;

