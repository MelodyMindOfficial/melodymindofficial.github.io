import { Link } from 'react-router-dom';
import { contacts } from '../../data/data';
import { contacts_en } from '../../data/data_en';
import './About.css';

export default function Contacts({ isActive }) {
    var i = 0;
    const language = localStorage.getItem('language');
    return (
        <div className="contacts">
            <div className="_container">
                <h1>{language == 'en' ? 'Contacts' : 'Контакты'}</h1>
                <div className="contactsSection">
                    <section id="index">
                        <div className="contactsCardContent">
                            <div>
                                <h3>
                                    {language == 'en' ? 'Appeal' : 'Обращение'}
                                </h3>
                                <p>
                                    {language == 'en'
                                        ? 'If you have a question'
                                        : 'Если у Вас возник вопрос – '}
                                    <br />
                                    <a
                                        href="mailto:mm.business@internet.ru"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        {language == 'en'
                                            ? 'contact us'
                                            : 'напишите нам'}
                                    </a>
                                </p>
                            </div>
                            <Link to="/" onClick={() => isActive('main')}>
                                <button>
                                    {language == 'en'
                                        ? 'FAQ'
                                        : 'Частые вопросы'}
                                </button>
                            </Link>
                        </div>
                        <div className="">
                            <img src="/contacts.png" alt="" />
                        </div>
                    </section>
                    {(language == 'en' ? contacts_en : contacts).map((e) => (
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
