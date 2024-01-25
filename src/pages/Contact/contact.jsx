const currentEmailAddress = 'statelinefamilychiro@proton.me';
const hours = {
  Monday: '3pm to 6pm',
  Tuesday: '3pm to 6pm',
  Wednesday: '3pm to 6pm',
  Thursday: '3pm to 6pm',
  Friday: '3pm to 6pm',
  Saturday: '8am to 11am',
  Sunday: 'Closed',
};

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
            <span className='title is-6'>🕝 Hours:</span>
          </p>
          <p>Monday: {hours.Monday} </p>
          <p>Tuesday: {hours.Tuesday} </p>
          <p>Wednesday: {hours.Wednesday} </p>
          <p>Thursday: {hours.Thursday} </p>
          <p>Friday: {hours.Friday} </p>
          <p>Saturday: {hours.Saturday} </p>
          <p>Sunday: {hours.Sunday} </p>
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

