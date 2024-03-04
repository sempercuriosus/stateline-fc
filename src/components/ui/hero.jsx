const backgroundImageUrl = '/images/logo-color.svg';
// const avatar = '/images/dr-katie.jpg';

function Hero() {
  return (
    <>
      <section
        className='hero section'
        style={{
          backgroundColor: '#3E6268',
          borderRadius: '6px',
          paddingLeft: '0',
          paddingRight: '0',
          // paddingBottom: '1em',
        }}>
        <div className='hero'>
          {/* Header */}
          {/* 
          <div
            className='hero-head'
            style={{
              fontWeight: 'bold',
              borderRadius: '6px',
            }}></div> */}

          {/* Body */}
          <div className='hero-body'>
            <div className='is-fullhd'>
              <figure className='container'>
                <img
                  className='container'
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
            </div>
          </div>

          {/* Footer */}
          <div className='hero-foot'>
            <div className='snap-stop'></div>
          </div>
        </div>
        <br />
      </section>
    </>
  );
}

export default Hero;

