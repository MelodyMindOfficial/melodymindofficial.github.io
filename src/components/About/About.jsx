import { Link } from 'react-router-dom';
import { team } from '../../data';
import './About.css';

export default function About({ isActive }) {
    return (
        <>
            <section className="aboutSection">
                <h1 className="aboutTitle">
                    Делись своими работами и пусть их услышит весь мир!
                </h1>
                <p className="aboutText">
                    Мы помогаем артистам найти продюсеров для сотрудничества и
                    продвижения <br /> своей музыки в массы. Стань частью нашей
                    компании уже сейчас!
                </p>
                <Link to="/" onClick={() => isActive('main')}>
                    <button>Узнать больше</button>
                </Link>
            </section>
            <section className="aboutWorld">
                <h1 className="aboutTitle">
                    Своей работой мы воплощаем мечты в реальность
                </h1>
                <p className="aboutText">
                    Мы - маленькая команда энтузиастов из вуза с разным опытом
                    работы, но одной целью: <br />
                    расширение прав и возможностей независимых музыкальных
                    креаторов
                </p>
                <div className="aboutImage">
                    <img src="/public/map_world.png" alt="" />
                </div>
            </section>
            <section className="aboutTeam">
                <p className="aboutText">КОМАНДА MELODYMIND</p>
                <h1 className="aboutTitle">Познакомьтесь с командой</h1>
                <div className="aboutTeamSection _container">
                    {team.map((member) => (
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
