import './NotFound.css';
import src from '/images/404.png';
export default function NotFound() {
    const language = localStorage.getItem('language');
    return (
        <div className="div404">
            <section>
                <h1>404</h1>
                <p>
                    {language == 'en'
                        ? 'You may have entered the page address incorrectly'
                        : 'Возможно, вы не правильно указали адрес страницы'}
                </p>
            </section>
            <img src={src} alt="Page Not Found" />
        </div>
    );
}
