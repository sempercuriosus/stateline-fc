import contactInfo from '../Contact/contact.js';
import { colors } from '../../styles/styles.js';

const contact = contactInfo.contactInfo;

function FAQ() {
  return (
    <section
      className='section box snap-stop'
      style={{ backgroundColor: colors.BACKGROUND_COLOR }}>
      <h2 className='title'>Frequently Asked Questions</h2>

      <div className='block'>
        <p>
          <strong>Do you take insurance?</strong>
        </p>
        <p>
          In order to provide the best patient-focused care that we can, we do
          not accept health insurance. We are happy to provide superbills upon
          request for you to submit. HSA and FSA are accepted.{' '}
        </p>
      </div>

      <div className='block'>
        <p>
          <strong>What techniques do you use?</strong>
        </p>
        <ul className='content'>
          <li>Diversified</li>
          <li>Gonstead</li>
          <li>Flexion-Distraction</li>
          <li>Thompson Drop</li>
          <li>Activator</li>
          <li>Webster</li>
        </ul>
      </div>

      <div className='block'>
        <p>
          <strong>Do you take x-rays?</strong>
        </p>
        <p>
          We do have the ability to take x-rays in-office. Dr. Katie will
          determine if they’re necessary at your appointment.{' '}
        </p>
      </div>

      <div className='block'>
        <p>
          <strong>Can my child(ren) come to my appointment?</strong>
        </p>
        <p>
          Of course! We have a family focus and are happy to have them come with
          you. We have a kids area to help keep them occupied but feel free to
          bring snacks to help too!{' '}
        </p>
      </div>

      <div className='block'>
        <p>
          <strong>
            I don’t see anything available when scheduling online, do you have
            other appointments available?
          </strong>
        </p>
        <p>
          You bet! We open up what we can online but many times (especially for
          new patients) we are able to get you scheduled at times that don’t
          show up online.{' '}
          <a href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</a> Call
          or Text us for an appoinment.
        </p>
      </div>

      <div className='block'>
        <p>
          <strong>
            I want to bring my family in for wellness care. Do you have plans to
            help make that affordable?
          </strong>
        </p>
        <p>
          Absolutely. Depending on your family size, we have wellness plans that
          help make entire family care attainable. Call our office for more
          information!
        </p>
      </div>
    </section>
  );
}

export default FAQ;

