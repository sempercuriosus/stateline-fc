function Footer() {
  return (
    <footer
      id='footer'
      className='footer content'>
      <div
        id='contact'
        className='columns'>
        <div className='column'>
          <div className='title is-5'>
            Contact Us | Stateline Family Chriopractic
          </div>
          <div>
            <div className='title is-6'>📌 Address:</div>
            <p>856 Gold Hill Road #103</p>
            <p>Fort Mill, SC 29708</p>
            <p>Located Inside Kane Family Chiropractic</p>
            <br />
            <div>
              <span className='title is-6'>📱 Phone: </span>
              803-358-8340
            </div>

            <p></p>
          </div>
        </div>

        <div className='column'>
          <div>
            <a
              href='statelinefamilychiro.janeapp.com'
              target='_blank'
              rel='noreferrer'>
              Schedule An Appointment!
            </a>
            <div>statelinefamilychiro.janeapp.com</div>
          </div>
        </div>
      </div>
      <div className='content has-text-centered'>
        Made with 🧡 and ☕️ by{' '}
        <a
          href='https://github.com/sempercuriosus'
          target='_blank'
          rel='noreferrer'>
          <strong>Keys</strong>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

