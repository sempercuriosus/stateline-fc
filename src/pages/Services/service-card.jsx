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
    <div
      id={'service-card-' + serviceTitle.toLowerCase()}
      className='card column has-ratio'
      style={{
        minHeight: '400px',
        margin: '0.25em',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <div className='block'>
        <h3 className='title is-4 has-text-centered'>{serviceTitle}</h3>
        <div className='card-image'>
          <figure className='image is-4by5'>
            <img
              src={serviceImageSource}
              alt={serviceImageAlt}
            />
          </figure>
        </div>
        <p className='card-content'>{serviceDescription}</p>
      </div>
      <div style={{ flex: '1' }}></div>
      <footer className='card-footer'>
        <button
          className='button is-info card-footer-item'
          onClick={() => onOpenModal(serviceType)}>
          Learn More!
        </button>
      </footer>
    </div>
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

