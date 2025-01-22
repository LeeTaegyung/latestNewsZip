import { useState } from "react";
import { NewsItemType } from "../../types/newsItem";
import NewsDetailModal from "../NewsDetailModal/NewsDetailModal";
import NewsItem from "../NewsItem/NewsItem";
import style from "./NewsList.module.scss";

const NewsList = ({ data }: { data: NewsItemType[] }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentNewsData, setCurrentNewsData] = useState<NewsItemType>();

    const openNewsDetailModal = (target: NewsItemType) => {
        setIsModalOpen(true);
        setCurrentNewsData(target);
    };

    return (
        <div className={style.newsList__container}>
            <ul className={style.newsList__area}>
                {data.length ? (
                    data.map((item: NewsItemType) => (
                        <NewsItem
                            key={item.article_id}
                            item={item}
                            openNewsDetailModal={openNewsDetailModal}
                        />
                    ))
                ) : (
                    <li>검색 결과가 없습니다.</li>
                )}
            </ul>
            {isModalOpen && (
                <NewsDetailModal
                    currentNewsData={currentNewsData}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
        </div>
    );
};

export default NewsList;
