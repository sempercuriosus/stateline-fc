function Footer() {
  return (
    <footer
      id='footer'
      className='footer content'>
      <div className='title is-5 has-text-centered'>
        Contact Us | Stateline Family Chriopractic
      </div>
      <hr />
      <div
        id='contact'
        className='columns'>
        <div className='column'>
          <div>
            <p className='title is-6'>📌 Address:</p>
            <p>856 Gold Hill Road #103</p>
            <p>Fort Mill, SC 29708</p>
            <p>Located Inside Kane Family Chiropractic</p>

            <br />

            <p>
              <span className='title is-6'>📱 Phone: </span>
            </p>
            <p>803-358-8340</p>
          </div>
        </div>

        <div className='column'>
          <p>
            <span className='title is-6'>📅 Schedule An Appointment:</span>
          </p>

          <a
            href='statelinefamilychiro.janeapp.com'
            target='_blank'
            rel='noreferrer'>
            statelinefamilychiro.janeapp.com
          </a>
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

