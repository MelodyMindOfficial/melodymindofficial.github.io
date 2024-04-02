import './NotFound.css';
export default function NotFound({ isActive }) {
    return (
        <div className="div404">
            <section>
                <h1>404</h1>
                <p>Возможно, вы не правильно указали адрес страницы</p>
            </section>
            <img src="/404.png" alt="Page Not Found" />
        </div>
    );
}
