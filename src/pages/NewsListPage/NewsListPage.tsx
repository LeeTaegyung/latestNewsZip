import SearchBar from "../../components/SearchBar/SearchBar";
import NewsList from "../../components/NewsList/NewsList";
import { useRecoilValueLoadable } from "recoil";
import { newsDataSelector } from "../../recoil/selectors/newsDataSelector";

const NewsListPage = () => {
    const data = useRecoilValueLoadable(newsDataSelector);

    return (
        <>
            <SearchBar />
            {data.state === "loading" ? (
                <div>로딩중...</div>
            ) : (
                <NewsList data={data.contents.results} />
            )}
        </>
    );
};

export default NewsListPage;
