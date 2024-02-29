import { colors } from '../../styles/styles';

const backgroundImageUrl = '/public/images/hero-placeholder.jpeg';

function Intro() {
  return (
    <>
      <section className='hero section'>
        <div
          className='hero is-medium'
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
          }}>
          <div className='hero-head'></div>
          <div className='hero-body'>
            <div className='container is-fullhd'>
              <div
                className='content'
                style={{
                  backgroundColor: colors.LIGHT,
                  borderRadius: '6px',
                  padding: '1.25em',
                }}>
                <h1
                  className='title is- has-text-centered'
                  style={{
                    color: colors.WHITE,
                  }}>
                  Welcome!{' '}
                </h1>
                <h2
                  className='title is-3 has-text-centered'
                  style={{
                    color: colors.WHITE,
                  }}>
                  We are Stateline Family Chiropractic
                </h2>
              </div>
            </div>
          </div>
          <div className='hero-foot'></div>
        </div>

        <div className='block'></div>

        <p>
          <strong>At Stateline Family Chiropractic</strong>, we strive to
          provide excellent, affordable care to families in the Fort Mill area.
          Our care is neurologically focused with a patient-centered approach
          and our goal is to be your partner in health in order to help your
          body function as intended and heal itself from life’s stressors.
        </p>
      </section>
      <hr className='snap-stop' />
    </>
  );
}

export default Intro;

