import contactInfo from '../Contact/contact.js';
import { colors } from '../../assets/utils/styles.js';

const contact = contactInfo.contactInfo;

const openScheduler = (targetedLocation) => {
  window.open(targetedLocation, '_blank');
};

function NewPatient() {
  return (
    <>
      <section className='section snap-stop'>
        <h3 className='title is-3 has-text-centered'>
          New Patient Information
        </h3>
        <div className='block'>
          <button
            className='button'
            style={{ backgroundColor: colors.DARK, color: colors.WHITE }}
            onClick={() => {
              openScheduler(contact.scheduler);
            }}>
            Schedule An Appointment
          </button>
        </div>
        <p className='block'>
          At Stateline Family Chiropractic, we strive to provide you with
          excellent patient-focused care while feeling like you’re part of the
          family. Our care is neurologically based and centers on the idea of
          neuroplasticity. That means that we want the body’s most important
          system to be able to rest, relax, heal, grow and adapt. Our body needs
          to be able to do these things in order to meet milestones, sleep,
          recover from sickness quickly and deal with the everyday stressors of
          life.
        </p>
        <h4 className='title is-5'>What To Expect</h4>
        <p className='block'>
          Your initial appointment’s focus is information gathering on our end
          and question answering for you. Before your scheduled appointment, you
          will have intake paperwork emailed to you that you are able to fill
          out in the comfort of your own home, all online.
        </p>
        <p className='block'>
          This paperwork will be detailed and may ask questions you weren’t
          expecting but answering them as completely as possible is important
          for us to get vital information about the patient’s history.
        </p>
        <h4 className='title is-5'>Your First Vist</h4>
        <p className='block'>
          Once you’re here, your appointment will start with an in-depth
          consultation with Dr. Katie where she will listen to your journey, ask
          pertinent questions and will work with you to create individualized
          health goals that we will monitor throughout care. Dr. Katie will
          educate you about chiropractic care, explain what you can expect
          moving forward and answer any questions you have.
        </p>
        <p className='block'>
          Once that has been accomplished, we will do state of the art nervous
          system scans that are painless and non-invasive. They will help Dr.
          Katie determine the depth of the distress (subluxation) and
          objectively measure the stress in the patient’s nervous system
          stopping them from living their best life.{' '}
        </p>
        <p className='block'>
          The appointment will conclude with a spinal exam and orthopedic tests.
        </p>
        <h4 className='title is-5'>Your Second Appointment</h4>
        <p className='block'>
          The second appointment is where the magic happens. Dr. Katie will
          discuss with you in-depth what the findings were from the history,
          exam and scans done at your initial appointment, what they mean to you
          and will explain what her game plan is to meet your goals. She is
          passionate about creating specific care plans tailored to meeting your
          established goals.
        </p>
        <p className='block'>
          Our care goes beyond basic symptom-based chiropractic to focus on
          unwinding the stress in the nervous system causing it to be stuck and
          a customized care plan is the vital component that allows us to do so.
          After all of that, you’ll get your first adjustment!{' '}
        </p>
        <p className='block'>
          Dr. Katie will explain everything she’s doing and will adjust you
          according to your scans and her exam findings. She is experienced in
          numerous techniques including diversified, <strong>Gonstead</strong>,{' '}
          <strong>Thompson Drop</strong>, <strong>flexion-distraction</strong>,
          <strong> Webster and Activator</strong>. She will determine what
          technique will work best for your body and may use a combination but
          please let her know if you have any preferences.
        </p>
        <p className='block'></p>
        <p className='block'></p>
      </section>
      <hr className='snap-stop' />
    </>
  );
}

export default NewPatient;

