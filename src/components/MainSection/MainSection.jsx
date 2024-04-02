import { Link } from 'react-router-dom';
import { mainTrends } from '../../data';
import './MainSection.css';

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
                            <img
                                src={
                                    item.image ? item.image : '/none_image.png'
                                }
                                alt="Track"
                            />
                            <Link
                                to={'/' + item.id}
                                id="price"
                                className="trackItem"
                            >
                                {item.price && item.price + ' рублей'}
                            </Link>
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
