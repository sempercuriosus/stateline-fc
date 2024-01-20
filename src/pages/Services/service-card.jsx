import PropTypes from 'prop-types';

function ServiceCard({
  serviceTitle = '',
  serviceDescription = '',
  serviceImageSource = '',
  serviceImageAlt = '',
}) {
  return (
    <>
      {/* Column */}
      <section
        className='column has-ratio block'
        style={{
          height: '100vh',
        }}>
        <figure className='image is-128x128'>
          <img
            src={serviceImageSource}
            alt={serviceImageAlt}
          />
        </figure>

        <div className='block'>
          <h3 className='title is-4 block'>{serviceTitle}</h3>
          <p>{serviceDescription}</p>
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
};

export default ServiceCard;

