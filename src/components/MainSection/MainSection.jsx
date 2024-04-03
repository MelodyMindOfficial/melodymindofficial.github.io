import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { mainTrends } from '../../data';
import noneImage from '/none_image.png';
import './MainSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MainSection({ children }) {
    var settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        swipeToSlide: true,
    };

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
                <Slider {...settings}>
                    {children.map((item) => (
                        <div key={item.image}>
                            <div className="trackSection">
                                <div>
                                    <img
                                        src={
                                            item.image ? item.image : noneImage
                                        }
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
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
