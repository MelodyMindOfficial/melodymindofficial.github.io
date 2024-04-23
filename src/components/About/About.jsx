import { Link } from 'react-router-dom';
import { team } from '../../data/data';
import { team_en } from '../../data/data_en';
import BlueButton from '../BlueButton/BlueButton';
import './About.css';

export default function About({ isActive }) {
    const language = localStorage.getItem('language');
    return (
        <>
            <section className="aboutSection">
                <h1 className="aboutTitle">
                    {language == 'en'
                        ? 'Share your work and let the whole world hear it'
                        : 'Делись своими работами и пусть их услышит весь мир'}
                    !
                </h1>
                <p className="aboutText">
                    {language == 'en'
                        ? 'We help artists find producers to collaborate and promote their music to the masses.'
                        : 'Мы помогаем артистам найти продюсеров для сотрудничества и продвижения'}
                    <br />
                    {language == 'en'
                        ? 'Become a part of our company now'
                        : 'своей музыки в массы. Стань частью нашей компании уже сейчас'}
                    !
                </p>
                <Link to="/" onClick={() => isActive('main')}>
                    <BlueButton padding={'12px 24px'} fontSize={'18px'}>
                        {language == 'en' ? 'Learn more' : 'Узнать больше'}
                    </BlueButton>
                </Link>
            </section>
            <section className="aboutWorld">
                <h1 className="aboutTitle">
                    {language == 'en'
                        ? 'With our work, we make dreams come true'
                        : 'Своей работой мы воплощаем мечты в реальность'}
                </h1>
                <p className="aboutText">
                    {language == 'en'
                        ? 'We are a small team of enthusiasts from the university with different experiences work,'
                        : 'Мы - маленькая команда энтузиастов из вуза с разным опытом работы, но одной целью:'}
                    <br />
                    {language == 'en'
                        ? 'but with one goal: empowering independent music artists creators'
                        : 'расширение прав и возможностей независимых музыкальных креаторов'}
                </p>
                <div className="aboutImage">
                    <img src="/images/map_world.png" alt="" />
                </div>
            </section>
            <section className="aboutTeam">
                <p className="aboutText">
                    {language == 'en' ? 'TEAM' : 'КОМАНДА'} MELODYMIND
                </p>
                <h1 className="aboutTitle">
                    {language == 'en'
                        ? 'Welcome our team'
                        : 'Познакомьтесь с командой'}
                </h1>
                <div className="aboutTeamSection _container">
                    {(language == 'en' ? team_en : team).map((member) => (
                        <div key={member.name} className="aboutMember">
                            <img
                                src={member.image}
                                alt={member.name}
                                style={{
                                    margin: '0px 25px',
                                    height: '250px',
                                    width: '250px',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                }}
                            />
                            <h2>{member.name}</h2>
                            <p>{member.status}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
