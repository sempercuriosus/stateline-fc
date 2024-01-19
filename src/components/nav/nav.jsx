function Nav() {
  return (
    <nav
      className='navbar is-info'
      role='navigation'
      aria-label='main navigation'>
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
        <div className='navbar-start'>
          <a className='navbar-item'>Home</a>

          <a className='navbar-item'>Contact</a>

          <a className='navbar-item'>About</a>

          <div className='navbar-item has-dropdown is-hoverable'>
            <a className='navbar-link'>Services</a>

            <div className='navbar-dropdown'>
              <a className='navbar-item'>Service 1</a>
              <a className='navbar-item'>Service 2</a>
              <a className='navbar-item'>Service 3</a>
              <hr className='navbar-divider' />
              <a className='navbar-item'>FAQs</a>
            </div>
          </div>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <p>A Thing</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

