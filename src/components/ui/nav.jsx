import contactInfo from '../../pages/Contact/contact.js';

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
        className='navbar is-info is-fixed-top'
        role='navigation'
        aria-label='main navigation'>
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

          <a
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div
          id='navbarBasicExample'
          className='navbar-menu'>
          {/* Start */}
          <div className='navbar-start'>
            {/* Home */}
            <a
              className='navbar-item'
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }>
              Home
            </a>

            {/* Dropdown */}
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'>Services</a>
              <div className='navbar-dropdown'>
                <a className='navbar-item'>Prenatal</a>
                <a className='navbar-item'>Pediatric</a>
                <a className='navbar-item'>Family</a>
                {/* <a className='navbar-item'></a> */}
                {/* <hr className='navbar-divider' /> */}
              </div>
            </div>

            {/* About */}
            <a
              className='navbar-item'
              onClick={() => {
                handleNavClick('about');
              }}>
              About
            </a>
          </div>

          <div className='navbar-end'>
            {/* Contact */}
            <a
              className='navbar-item'
              onClick={() => {
                handleNavClick('footer');
              }}>
              Contact
            </a>

            <a
              className='navbar-item'
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

