import './Error_404.css';
import { Link } from "react-router-dom";

function Error_404() {

  return (
    <main className="main">
      <section className="error-404">
        <h1 className="error-404__title">404</h1>
        <p className="error-404__subtitle">Страница не найдена</p>
        <Link to={"/"} className="error-404__back">Назад</Link>
      </section>
    </main>
  );
}

export default Error_404;
