import '../../styles/styles';
import { colors } from '../../styles/styles';
// const avatar = '/images/dr-katie.jpg';

function Hero() {
  return (
    <>
      <section
        className='hero section is-medium'
        style={{
          backgroundColor: colors.DARK,
          paddingLeft: '0',
          paddingRight: '0',
          borderBottomLeftRadius: '50% 100px',
          borderBottomRightRadius: '50% 100px',
          // paddingBottom: '1em',
        }}>
        <div className='hero'>
          {/* Header */}

          {/* <div
            className='hero-head'
            style={{
              fontWeight: 'bold',
              borderRadius: '6px',
            }}>
 
          </div> */}

          {/* Body */}
          <div className='hero-body'>
            <div className='is-fullhd'>
              <p className='has-text-centered has-text-white hero-font '>
                This is Stateline
              </p>
              <p className='has-text-centered has-text-white hero-half-font'>
                Where we provide care for the whole family
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className='hero-foot has-text-centered'>
            <div
              className='hero-font has-text-white'
              style={{
                font: 'October Condensed Devanagari Thin',
                animation: 'moveUpDown 3s ease-in-out infinite',
              }}>
              ⬇️
            </div>{' '}
          </div>
        </div>
        <br />
      </section>
    </>
  );
}

export default Hero;

