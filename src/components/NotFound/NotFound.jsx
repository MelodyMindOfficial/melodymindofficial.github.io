import './NotFound.css';
import src from '/404.png';
export default function NotFound({ isActive }) {
    return (
        <div className="div404">
            <section>
                <h1>404</h1>
                <p>Возможно, вы не правильно указали адрес страницы</p>
            </section>
            <img src={src} alt="Page Not Found" />
        </div>
    );
}
