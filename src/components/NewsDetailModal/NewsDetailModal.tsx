import { Link } from "react-router-dom";
import style from "./NewsDetailModal.module.scss";
import { NewsItemType } from "../../types/newsItem";
import { cleanText } from "../../utils/cleanText";

interface Props {
    currentNewsData: NewsItemType | undefined;
    setIsModalOpen: (arg: boolean) => void;
}

const NewsDetailModal = ({ currentNewsData, setIsModalOpen }: Props) => {
    if (currentNewsData === undefined) return;

    const {
        creator,
        country,
        description,
        image_url,
        link,
        pubDate,
        source_name,
        title,
    } = currentNewsData;

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={style.NewsDetailModal}>
            <div className={style.NewsDetailModal__container}>
                <div className={style.NewsDetailModal__header}>
                    <button
                        className={style.NewsDetailModal__closeBtn}
                        onClick={closeModal}
                    >
                        닫기
                    </button>
                </div>
                <div className={style.NewsDetailModal__body}>
                    <div className={style.NewsDetailModal__imageArea}>
                        <img
                            src={image_url}
                            alt=""
                            className={style.NewsDetailModal__image}
                        />
                    </div>
                    <div className={style.NewsDetailModal__content}>
                        <h3 className={style.NewsDetailModal__title}>
                            {cleanText(title)}
                        </h3>
                        {description && (
                            <p className={style.NewsDetailModal__desc}>
                                {cleanText(description)}
                            </p>
                        )}
                        <div className={style.NewsDetailModal__info}>
                            {country && (
                                <dl className={style.NewsDetailModal__infoData}>
                                    <dt>국가</dt>
                                    <dd>{country.join(", ")}</dd>
                                </dl>
                            )}
                            {source_name && (
                                <dl className={style.NewsDetailModal__infoData}>
                                    <dt>언론사명</dt>
                                    <dd>{source_name}</dd>
                                </dl>
                            )}
                            {creator && (
                                <dl className={style.NewsDetailModal__infoData}>
                                    <dt>기자</dt>
                                    <dd>{creator.join(", ")}</dd>
                                </dl>
                            )}
                            {pubDate && (
                                <dl className={style.NewsDetailModal__infoData}>
                                    <dt>날짜</dt>
                                    <dd>{pubDate}</dd>
                                </dl>
                            )}
                        </div>
                        <Link
                            to={link}
                            target="_blank"
                            className={style.NewsDetailModal__link}
                        >
                            자세히 보러가기
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailModal;
