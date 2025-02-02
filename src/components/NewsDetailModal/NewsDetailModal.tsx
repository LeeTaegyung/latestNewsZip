import { Link } from "react-router-dom";
import style from "./NewsDetailModal.module.scss";
import { NewsItemType } from "../../types/newsItem";
import { cleanText } from "../../utils/cleanText";
import { useEffect, useState } from "react";

interface Props {
    currentNewsData: NewsItemType | undefined;
    setIsModalOpen: (arg: boolean) => void;
}

const NewsDetailModal = ({ currentNewsData, setIsModalOpen }: Props) => {
    const [isScrap, setIsScrap] = useState(false);

    useEffect(() => {
        if (!currentNewsData) return;
        const getNewsScrap = localStorage.getItem("newsScrap");
        if (
            getNewsScrap &&
            JSON.parse(getNewsScrap).findIndex(
                (item: NewsItemType) =>
                    item.article_id === currentNewsData.article_id
            ) > -1
        ) {
            setIsScrap(true);
        }
    }, [currentNewsData]);

    if (!currentNewsData) return;

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

    const addScrap = () => {
        const getNewsScrap = localStorage.getItem("newsScrap");
        setIsScrap(true);

        // 로컬스토리지의 newsScrap 키 여부 확인
        if (!getNewsScrap || getNewsScrap === null) {
            // 없으면
            localStorage.setItem(
                "newsScrap",
                JSON.stringify([currentNewsData])
            );
        } else {
            // 있으면
            const convertNewsScrap = JSON.parse(getNewsScrap);
            const checkSameId = convertNewsScrap.findIndex(
                (item: NewsItemType) =>
                    item.article_id === currentNewsData.article_id
            );

            // 동일한 기사 스크랩되지 않게 처리
            if (checkSameId > -1) {
                alert("이미 스크랩되었습니다.");
                return;
            }

            const setNewsScrap = [...JSON.parse(getNewsScrap), currentNewsData];
            localStorage.setItem("newsScrap", JSON.stringify(setNewsScrap));
        }
    };

    return (
        <div className={style.NewsDetailModal}>
            <div className={style.NewsDetailModal__container}>
                <div className={style.NewsDetailModal__header}>
                    <button
                        className={`${style.NewsDetailModal__scrapBtn} ${
                            isScrap && style.scrapOn
                        }`}
                        onClick={addScrap}
                    >
                        스크랩하기
                    </button>
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
