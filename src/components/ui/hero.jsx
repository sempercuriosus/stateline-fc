const backgroundImageUrl = '/images/logo-color.svg';
// const avatar = '/images/dr-katie.jpg';

function Hero() {
  return (
    <>
      <section
        className='hero section is-medium'
        style={{
          backgroundColor: '#3E6268',
          borderRadius: '6px',
          paddingLeft: '0',
          paddingRight: '0',
          paddingBottom: '1em',
        }}>
        <div
          className='hero'
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundPosition: 'center top',
            backgroundSize: 'contain',
            borderRadius: '6px',
            backgroundRepeat: 'no-repeat',
          }}>
          {/* Header */}
          {/* 
          <div
            className='hero-head'
            style={{
              fontWeight: 'bold',
              borderRadius: '6px',
              //   paddingBottom: '1em',
            }}></div> */}

          {/* Body */}
          <div className='hero-body'>
            <div className='container is-fullhd'></div>
          </div>

          {/* Footer */}
          <div
            className='hero-foot'
            style={{
              paddingBottom: '1em',
            }}></div>
        </div>
        <br />
      </section>
    </>
  );
}

export default Hero;

