function Nav() {
  return (
    <nav
      className='navbar is-info'
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
          <a className='navbar-item'>Home</a>

          {/* Dropdown */}
          <div className='navbar-item has-dropdown is-hoverable'>
            <a className='navbar-link'>Services</a>
            <div className='navbar-dropdown'>
              <a className='navbar-item'>Pediatric</a>
              <a className='navbar-item'>Family</a>
              <a className='navbar-item'>Prenatal</a>
              {/* <a className='navbar-item'></a> */}
              <hr className='navbar-divider' />
              <a className='navbar-item'>FAQs</a>
            </div>
          </div>

          {/* Contact */}
          <a className='navbar-item'>Contact</a>

          {/* About */}
          <a className='navbar-item'>About</a>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <p>Schedule An Appointment</p>
          </div>
        </div>
      </div>
      {/* End */}
    </nav>
  );
}

export default Nav;

