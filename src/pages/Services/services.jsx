import { useState, useEffect } from 'react';
import ServiceCard from './service-card';
import Prenatal from './Prenatal/prenatal';
import Pediatric from './Pediatric/pediatric';
import Family from './Family/family';

function Services() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [currentModal, setcurrentModal] = useState(null);

  useEffect(() => {
    console.log('ServiceCard Mounted');

    const handleEsc = (event) => {
      console.log('Handling Escape key press');
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    console.log('Adding event listener');
    window.addEventListener('keydown', handleEsc);

    return () => {
      console.log('ServiceCard Unmounted');
      console.log('Removing event listener');
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const openModal = (serviceType) => {
    // modalToOpen.classList.add('is-active');
    setcurrentModal(serviceType);
    console.log('opening modal', currentModal);
    setIsModalActive(true);
  };

  const closeModal = () => {
    // modalRef.current.classList.remove('is-active');
    // console.log(modalRef.current);
    setIsModalActive(false);
  };

  return (
    <>
      <section
        className='section snap-stop'
        id='services'>
        <h2 className='title has-text-centered block'>What We Offer</h2>

        {/* Column Container */}
        <div className='columns'>
          {/*  */}

          {/* Service Prenatal */}

          <ServiceCard
            serviceTitle='Prenatal'
            serviceDescription='Family health starts in the prenatal period! We strive to empower
            and support moms from conception to birth and beyond'
            serviceImageSource='public/images/prenatal.jpeg'
            serviceImageAlt='Prenatal Image Placeholder'
            onOpenModal={openModal}
            serviceType='Prenatal'
          />

          {/* Service - Pediatric */}

          <ServiceCard
            serviceTitle='Pediatric'
            serviceDescription='Kids need chiropractic too! We’ve had great results with colicky
            infants to chronically sick kids to sensory and spectrum challenges.'
            serviceImageSource='public/images/pediatric.jpg'
            serviceImageAlt='Pediatric Image Placeholder'
            onOpenModal={openModal}
            serviceType='Pediatric'
          />

          {/* Service - Family */}

          <ServiceCard
            serviceTitle='Family'
            serviceDescription=' We love to support entire families on their health journey.
            Consistent care can help everyone sleep better, feel better and
            enjoy life better, together!'
            serviceImageSource='public/images/family.jpeg'
            serviceImageAlt='Family Image Placeholder'
            onOpenModal={openModal}
            serviceType='Family'
          />
        </div>

        {isModalActive && (
          <div className='modal is-active'>
            <div
              className='modal-background'
              onClick={closeModal}></div>
            <div className='box modal-content'>
              {currentModal && currentModal.toLowerCase() === 'prenatal' && (
                <Prenatal />
              )}
              {currentModal && currentModal.toLowerCase() === 'pediatric' && (
                <Pediatric />
              )}
              {currentModal && currentModal.toLowerCase() === 'family' && (
                <Family />
              )}
            </div>
            <button
              className='modal-close'
              aria-label='close'
              onClick={closeModal}></button>
          </div>
        )}
      </section>
      <hr className='snap-stop' />
    </>
  );
}

export default Services;

