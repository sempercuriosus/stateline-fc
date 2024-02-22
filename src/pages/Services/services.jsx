import ServiceCard from './service-card';

function Services() {
  return (
    <>
      <section className='section snap-stop'>
        <h2 className='title has-text-centered block'>What We Offer</h2>

        {/* Column Container */}
        <div className='columns'>
          {/*  */}

          {/* Service Prenatal */}

          <ServiceCard
            serviceTitle='Prenatal'
            serviceDescription='Family health starts in the prenatal period! We strive to empower
            and support moms from conception to birth and beyond'
            serviceImageSource='https://bulma.io/images/placeholders/128x128.png'
            serviceImageAlt='Prenatal Image Placeholder'
            openLocation='/Prenatal'
          />

          {/* Service - Pediatric */}

          <ServiceCard
            serviceTitle='Pediatric'
            serviceDescription='Kids need chiropractic too! We’ve had great results with colicky
            infants to chronically sick kids to sensory and spectrum challenges.'
            serviceImageSource='https://bulma.io/images/placeholders/128x128.png'
            serviceImageAlt='Pediatric Image Placeholder'
            openLocation='/Pediatric'
          />

          {/* Service - Family */}

          <ServiceCard
            serviceTitle='Family'
            serviceDescription=' We love to support entire families on their health journey.
            Consistent care can help everyone sleep better, feel better and
            enjoy life better, together!'
            serviceImageSource='https://bulma.io/images/placeholders/128x128.png'
            serviceImageAlt='Family Image Placeholder'
            openLocation='/Family'
          />
        </div>
      </section>
      <hr className='snap-stop' />
    </>
  );
}

export default Services;

