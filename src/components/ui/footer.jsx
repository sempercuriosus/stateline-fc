import { Contact } from '../../pages';

function Footer() {
  return (
    <footer
      id='footer'
      className='footer content'>
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

