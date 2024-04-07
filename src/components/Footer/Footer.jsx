import { Link } from 'react-router-dom';
import { footerList } from '../../data';
import logo from '/logo.png';
import './Footer.css';

export default function Footer({ isActive, isModal }) {
    function checkWindow() {
        if (window.innerWidth < 1024) {
            return true;
        } else {
            return false;
        }
    }

    function showList(id) {
        document.getElementById(id).classList.toggle('showed');
        document.getElementById('i_' + id).classList.toggle('showed');
    }

    return (
        <footer>
            <div className="footerContainer _container">
                <section className="footerNav">
                    <div className="footerColumn">
                        <Link
                            to={'/'}
                            onClick={() => isActive('main')}
                            className="footerTitle"
                        >
                            <img
                                src={logo}
                                alt="Logo"
                                style={{
                                    marginLeft: '-17px',
                                    height: '63px',
                                }}
                            />
                        </Link>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    {footerList.map((item) => (
                        <div className="footerColumn" key={item.title}>
                            <h3
                                className="footerTitle"
                                onClick={
                                    checkWindow()
                                        ? () => showList(item.id)
                                        : null
                                }
                            >
                                {item.title}
                                {checkWindow() && (
                                    <i
                                        id={'i_' + item.id}
                                        className="fa-solid fa-chevron-down"
                                        style={{
                                            fontSize: '16px',
                                        }}
                                    ></i>
                                )}
                            </h3>
                            <ul id={item.id}>
                                {item.list.map((item) => (
                                    <li key={item.id} className="footerItem">
                                        <Link
                                            to={'/' + item.id}
                                            className="footerLink"
                                            onClick={() => isActive(item.id)}
                                            download={item.download}
                                            target={item.target}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
                <section className="footerCopyright">
                    <h2 style={{ userSelect: 'none' }}>
                        Copyright © 2024 MelodyMind Inc. - интернет-магазин по
                        продаже музыкальных композиций | Made with &hearts; by
                        MickhOse Zitrop
                    </h2>
                </section>
            </div>
        </footer>
    );
}
