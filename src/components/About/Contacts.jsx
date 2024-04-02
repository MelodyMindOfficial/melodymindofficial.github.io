import { Link } from 'react-router-dom';
import { contacts } from '../../data';
import './About.css';

export default function Contacts({ isActive }) {
    var i = 0;
    return (
        <div className="contacts">
            <div className="_container">
                <h1>Контакты</h1>
                <div className="contactsSection">
                    <section id="index">
                        <div className="contactsCardContent">
                            <div>
                                <h3>Обращение</h3>
                                <p>
                                    Если у Вас возник вопрос –<br />
                                    <a
                                        href="mailto:mm.business@internet.ru"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        напишите нам
                                    </a>
                                </p>
                            </div>
                            <Link to="/" onClick={() => isActive('main')}>
                                <button>Частые вопросы</button>
                            </Link>
                        </div>
                        <div className="">
                            <img src="/contacts.png" alt="" />
                        </div>
                    </section>
                    {contacts.map((e) => (
                        <section key={i++}>
                            <div className="contactsCardContent">
                                <div>
                                    <h3>{e.title}</h3>
                                    <p>{e.text}</p>
                                    {e.linkLink ? (
                                        <a
                                            href={e.linkLink}
                                            style={{ color: '#000' }}
                                            // target="_blank"
                                            download
                                        >
                                            {e.textLink}
                                        </a>
                                    ) : null}
                                </div>
                                <a href={e.link} target="_blank">
                                    {e.linkText}
                                </a>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
