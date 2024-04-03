import { Link } from 'react-router-dom';
import { footerList } from '../../data';
import logo from '/logo.png';
import './Footer.css';

export default function Footer({ isActive }) {
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
                                style={{ marginLeft: '-17px', height: '63px' }}
                            />
                        </Link>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    {footerList.map((item) => (
                        <div className="footerColumn" key={item.title}>
                            <h3 className="footerTitle">{item.title}</h3>
                            <ul>
                                {item.list.map((item) => (
                                    <li key={item.id} className="footerItem">
                                        <Link
                                            to={'/' + item.id}
                                            className="footerLink"
                                            onClick={() => isActive(item.id)}
                                            download={item.download}
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
