import { NewsItemType } from "../../types/newsItem";
import { cleanText } from "../../utils/cleanText";
import style from "./NewsItem.module.scss";

interface Props {
    item: NewsItemType;
    openNewsDetailModal: (target: NewsItemType) => void;
}

const NewsItem = ({ item, openNewsDetailModal }: Props) => {
    const modalOpen = () => {
        openNewsDetailModal(item);
    };

    return (
        <li className={style.newsItem}>
            <div className={style.newsItem__imageArea}>
                <img
                    src={item.image_url}
                    alt=""
                    className={style.newsItem__image}
                />
            </div>
            <div className={style.newsItem__content}>
                <strong className={style.newsItem__content__title}>
                    {cleanText(item.title)}
                    {/* {item.title} */}
                </strong>
                <button
                    className={style.newsItem__content__btn}
                    onClick={modalOpen}
                >
                    자세히 보기
                </button>
            </div>
        </li>
    );
};

export default NewsItem;
