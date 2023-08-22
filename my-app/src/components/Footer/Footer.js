import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__text-community">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__columns">
        <p className="footer__item">© 2023</p>
        <div className="footer__heading">
          <p className="footer__item">Яндекс.Практикум</p>
          <p className="footer__item">Github</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
