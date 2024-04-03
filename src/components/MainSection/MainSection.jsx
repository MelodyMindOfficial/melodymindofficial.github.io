import { Link } from 'react-router-dom';
import { mainTrends } from '../../data';
import './MainSection.css';
import noneImage from '/none_image.png';

export default function MainSection({ children }) {
    return (
        <section className="mainSection">
            <div className="_container">
                <div className="sectionTitle">
                    <h3>
                        {children == mainTrends ? 'Тренды' : 'Популярные жанры'}
                    </h3>
                    <h4>
                        Смотреть всё{' '}
                        <i className="fa-solid fa-chevron-right"></i>
                    </h4>
                </div>
                <div className="sectionTracks">
                    {children.map((item) => (
                        <div className="trackSection" key={item.image}>
                            <div>
                                <img
                                    src={item.image ? item.image : noneImage}
                                    alt="Track"
                                />
                            </div>
                            <p
                                style={{
                                    cursor: 'default',
                                    userSelect: 'none',
                                }}
                                to={'/' + item.id}
                                id="price"
                                className="trackItem"
                            >
                                {item.price && item.price + ' рублей'}
                            </p>
                            <Link
                                to={'/' + item.id}
                                id="title"
                                className="trackItem"
                            >
                                {item.title}
                            </Link>
                            <Link
                                to={'/' + item.idAuthor}
                                id="author"
                                className="trackItem"
                            >
                                {item.author}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
