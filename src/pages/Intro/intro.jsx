import { colors } from '../../styles/styles';
const backgroundImageUrl = '/images/logo-color.svg';

function Intro() {
  return (
    <>
      <section
        className='section is-medium snap-stop block'
        style={{
          backgroundColor: colors.STEEL_TEAL_LIGHT,
          borderRadius: '30% 100px',
        }}>
        <h1 className='title is-1 has-text-centered'>Welcome!</h1>

        <div className='columns'>
          <figure className='column'>
            <img
              className=''
              src={backgroundImageUrl}
              alt='Background'
              style={{
                backgroundColor: 'black',
                padding: '3em',
                borderRadius: '6px',
                display: 'block',
                margin: '0 auto',
                backgroundSize: 'contain',
              }}
            />
          </figure>

          <p
            className='column is-offset-1'
            style={{ fontSize: 'large' }}>
            {/* <strong>At Stateline Family Chiropractic</strong> — */}
            We strive to provide excellent and affordable care to families in
            the Fort Mill area. Our care is{' '}
            <span style={{ color: colors.DARK, fontWeight: 'bold' }}>
              neurologically-focused
            </span>{' '}
            with a patient-centered approach and our goal is to be your partner
            in health in order to help your body function as intended and heal
            itself from life’s stressors.
          </p>
        </div>
      </section>
    </>
  );
}

export default Intro;

