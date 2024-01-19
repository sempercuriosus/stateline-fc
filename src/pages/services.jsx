function Services() {
  return (
    <div className='section'>
      <h2 className='title has-text-centered'>What We Offer</h2>

      {/* Column Container */}
      <div className='columns'>
        {/* Column */}
        <div className='column has-ratio'>
          <figure className='image is-128x128'>
            <img src='https://bulma.io/images/placeholders/128x128.png' />
          </figure>

          <div className='block'>
            <h3 className='title is-4'>Pediatric </h3>
            Kids need chiropractic too! We’ve had great results with colicky
            infants to chronically sick kids to sensory and spectrum challenges.
          </div>
        </div>

        {/* Column */}
        <div className='column has-ratio'>
          <figure className='image is-128x128'>
            <img src='https://bulma.io/images/placeholders/128x128.png' />
          </figure>

          <div className='block'>
            <h3 className='title is-4'>Prenatal </h3>
            Family health starts in the prenatal period! We strive to empower
            and support moms from conception to birth and beyond
          </div>
        </div>

        {/* Column */}
        <div className='column has-ratio'>
          <figure className='image is-128x128'>
            <img src='https://bulma.io/images/placeholders/128x128.png' />
          </figure>

          <div className='block'>
            <h3 className='title is-4'>Family</h3>
            We love to support entire families on their health journey.
            Consistent care can help everyone sleep better, feel better and
            enjoy life better, together!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

