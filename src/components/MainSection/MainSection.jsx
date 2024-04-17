import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { mainTrends } from '../../data/data';
import { mainTrends_en } from '../../data/data_en';
import noneImage from '/none_image.png';
import './MainSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MainSection({ children }) {
    const language = localStorage.getItem('language');
    function checkWindow() {
        if (window.innerWidth < 1250 && window.innerWidth >= 1050) {
            return 5;
        } else if (window.innerWidth < 1050 && window.innerWidth >= 850) {
            return 4;
        } else if (window.innerWidth < 850 && window.innerWidth >= 625) {
            return 3;
        } else if (window.innerWidth < 625 && window.innerWidth >= 425) {
            return 2;
        } else if (window.innerWidth < 425 && window.innerWidth >= 325) {
            return 1.5;
        } else if (window.innerWidth < 325 && window.innerWidth >= 0) {
            return 1.2;
        } else {
            return 6;
        }
    }

    var settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: checkWindow(),
        slidesToScroll: checkWindow() / 6,
        swipeToSlide: true,
    };

    return (
        <section className="mainSection">
            <div className="_container">
                <div className="sectionTitle">
                    <h3>
                        {language == 'en'
                            ? children == mainTrends_en
                                ? 'Trends'
                                : 'Popular geners'
                            : children == mainTrends
                            ? 'Тренды'
                            : 'Популярные жанры'}
                    </h3>
                    <h4>
                        {language == 'en' ? 'More' : 'Смотреть всё'}{' '}
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
                                    {item.price &&
                                        (language == 'en' ? '$' : '') +
                                            item.price +
                                            (language == 'en' ? '' : ' рублей')}
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
