const currentEmailAddress = 'statelinefamilychiro@proton.me';

function Contact() {
  return (
    <>
      <div className='title is-5 has-text-centered'>
        Contact Us | Stateline Family Chriopractic
      </div>
      <hr />

      {/* Columns Container */}
      <div
        id='contact'
        className='columns'>
        {/* New Column */}
        <div className='column'>
          <div>
            <p className='title is-6'>📌 Address:</p>
            <p>856 Gold Hill Road #103</p>
            <p>Fort Mill, SC 29708</p>
            <p>Located Inside Kane Family Chiropractic</p>
          </div>
        </div>

        {/* New Column */}
        <div className='column'>
          <p>
            <span className='title is-6'>📱 Phone: </span>
          </p>
          <p>803-358-8340</p>

          <p>
            <span className='title is-6'>📧 Email: </span>
          </p>
          <div className='block'>
            <a href={`mailto:${currentEmailAddress}`}>Send us an Email</a>
          </div>
          <p className='has-text-danger'>
            Important Notice: Do not include personal information or private
            medical information inside the email.
          </p>
        </div>

        {/* New Column */}
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
    </>
  );
}

export default Contact;

