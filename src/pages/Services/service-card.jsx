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
    <>
      {/* Column */}
      <section
        id={'service-card-' + serviceTitle.toLowerCase()}
        className='card column has-ratio block'
        style={{
          // minHeight: '500px',
          //   maxHeight: '500px',
          margin: '0.25em',
        }}>
        <div className='block'>
          <h3 className='title is-4 block has-text-centered'>{serviceTitle}</h3>
          <figure className='container image is-128x128'>
            <img
              src={serviceImageSource}
              alt={serviceImageAlt}
            />
          </figure>
          <p className='card-content'>{serviceDescription}</p>
        </div>
        <footer
          className='card-footer'
          style={{ marginTop: 'auto' }}>
          <button
            className='button card-footer-item'
            style={{ backgroundColor: colors.DARK, color: colors.WHITE }}
            onClick={() => onOpenModal(serviceType)}>
            Learn More!
          </button>
        </footer>
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

