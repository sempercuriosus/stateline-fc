import { Contact } from '../../pages';
import { useRef } from 'react';

function Footer() {
  const scrollToRef = useRef();

  return (
    <footer
      id='footer'
      className='footer content'
      ref={scrollToRef}>
      <Contact />

      <br />

      <div className='content has-text-centered'>
        Made with 🧡 and ☕️ by{' '}
        <a
          href='https://github.com/sempercuriosus'
          target='_blank'
          rel='noreferrer'>
          <strong>Keys</strong>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

