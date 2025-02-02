import { useEffect, useState } from "react";
import NewsList from "../../components/NewsList/NewsList";
import { NewsItemType } from "../../types/newsItem";

const ScrapList = () => {
    const [scrapList, setScrapList] = useState<NewsItemType[]>([]);

    useEffect(() => {
        if (localStorage.getItem("newsScrap")) {
            const newsScrap: NewsItemType[] = JSON.parse(
                localStorage.getItem("newsScrap") as string
            );
            setScrapList(newsScrap);
        }
    }, []);

    return (
        <div>
            <NewsList data={scrapList} />
        </div>
    );
};

export default ScrapList;
