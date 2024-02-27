import PropTypes from 'prop-types';
import './service-card.css';

function ServiceCard({
  serviceTitle = '',
  serviceDescription = '',
  serviceImageSource = '',
  serviceImageAlt = '',
  onOpenModal = '',
  serviceType = '',
}) {
  return (
    <>
      {/* Column */}
      <section
        id={'service-card-' + serviceTitle.toLowerCase()}
        className='card column has-ratio block vert-height'
        style={{
          minHeight: '400px',
          maxHeight: '600px',
          margin: '1em',
        }}>
        <div className='block'>
          <h3 className='title is-4 block'>{serviceTitle}</h3>
          <figure className='image is-128x128'>
            <img
              src={serviceImageSource}
              alt={serviceImageAlt}
            />
          </figure>
          <p>{serviceDescription}</p>
        </div>
        <div className='block'>
          <button
            className='button is-info js-modal-trigger'
            onClick={() => onOpenModal(serviceType)}>
            Learn More!
          </button>
        </div>
      </section>
    </>
  );
}

ServiceCard.propTypes = {
  serviceTitle: PropTypes.string.isRequired,
  serviceDescription: PropTypes.string.isRequired,
  serviceImageSource: PropTypes.string.isRequired,
  serviceImageAlt: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  serviceType: PropTypes.string.isRequired,
};

export default ServiceCard;

