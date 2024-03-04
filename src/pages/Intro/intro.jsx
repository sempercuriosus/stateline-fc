import { colors } from '../../styles/styles';

function Intro() {
  return (
    <>
      <section
        className='section is-medium box snap-stop'
        style={{ backgroundColor: colors.BACKGROUND_COLOR }}>
        <h1 className='title is-1 has-text-centered'>Welcome!</h1>

        <p>
          <strong>At Stateline Family Chiropractic</strong>, we strive to
          provide excellent, affordable care to families in the Fort Mill area.
          Our care is neurologically focused with a patient-centered approach
          and our goal is to be your partner in health in order to help your
          body function as intended and heal itself from life’s stressors.
        </p>
      </section>
    </>
  );
}

export default Intro;

