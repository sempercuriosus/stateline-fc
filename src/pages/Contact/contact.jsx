import contactInfo from './contact.js';

const contact = contactInfo.contactInfo;

function Contact() {
  return (
    <>
      <div className='title is-5 has-text-centered snap-stop'>
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
            <p>{contact.address.line1}</p>
            <p>
              {contact.address.city}, {contact.address.state}{' '}
              {contact.address.zip}
            </p>
            <p>{contact.address.note}</p>
          </div>
        </div>

        {/* New Column */}
        <div className='column block'>
          <div className='block'>
            <p>
              <span className='title is-6'>📱 Phone: </span>
            </p>
            <a href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</a>
          </div>

          <div className='block'>
            <p>
              <span className='title is-6'>📧 Email: </span>
            </p>

            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <p className='has-text-danger title is-6'>
            Important Note: Do not include personal or private medical
            information in the email.
          </p>
        </div>

        {/* New Column */}
        <div className='column'>
          <p>
            <span className='title is-6'>📅 Schedule An Appointment:</span>
          </p>
          <a
            href={contact.scheduler}
            target='_blank'
            rel='noreferrer'>
            statelinefamilychiro ↗︎
          </a>
        </div>

        {/* New Column */}
        <div className='column'>
          <p>
            <span className='title is-6'>🕝 Hours:</span>
          </p>

          <p>
            <strong>Monday to Friday</strong> {contact.hours.Delim}{' '}
            {contact.hours.All}{' '}
          </p>

          {/*<p>
            <strong>Monday</strong> {contact.hours.Delim}{' '}
            {contact.hours.Monday}{' '}
          </p>
          <p>
            <strong>Tuesday</strong> {contact.hours.Delim}{' '}
            {contact.hours.Tuesday}{' '}
          </p>
          <p>
            <strong>Wednesday</strong> {contact.hours.Delim}{' '}
            {contact.hours.Wednesday}{' '}
          </p>
          <p>
            <strong>Thursday</strong> {contact.hours.Delim}{' '}
            {contact.hours.Thursday}{' '}
          </p>
          <p>
            <strong>Friday</strong> {contact.hours.Delim} {contact.hours.Friday}{' '}
          </p> */}
          <p>
            <strong>Saturday</strong> {contact.hours.Delim}{' '}
            {contact.hours.Saturday}{' '}
          </p>
          <p>
            <strong>Sunday</strong> {contact.hours.Delim} {contact.hours.Sunday}{' '}
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;

