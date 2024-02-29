import { Contact } from '../../pages';
import { useRef } from 'react';
import { colors } from '../../styles/styles';

const currentYear = 2024;

function Footer() {
  const scrollToRef = useRef();

  return (
    <footer
      id='footer'
      className='footer content'
      ref={scrollToRef}
      style={{ backgroundColor: colors.GREY }}>
      <Contact />

      <div className='content has-text-centered'>
        <p>
          {' '}
          Copyright &copy; Stateline Family Chiropractic, LLC {currentYear}
        </p>
      </div>

      <br />

      <div className='content has-text-centered'>
        Made with 🧡 and ☕️ by{' '}
        <a
          href='https://thirdcoast.dev'
          target='_blank'
          rel='noreferrer'>
          <strong>Keys</strong>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

