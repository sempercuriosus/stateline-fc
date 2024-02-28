import PropTypes from 'prop-types';
import './service-card.css';
import { colors } from '../../assets/utils/styles';

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
      <div
        className='block'
        style={{ flexGrow: 1 }}>
        <h3 className='title is-4 has-text-centered'>{serviceTitle}</h3>
        <div className='card-image'>
          <figure className='image is-4by5'>
            <img
              src={serviceImageSource}
              alt={serviceImageAlt}
            />
          </figure>
          <p className='card-content'>{serviceDescription}</p>
        </div>
      </div>
      <footer className='card-footer'>
        <button
          className='button card-footer-item'
          style={{ backgroundColor: colors.DARK, color: colors.WHITE }}
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

