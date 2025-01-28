import SearchBar from "../../components/SearchBar/SearchBar";
import NewsList from "../../components/NewsList/NewsList";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { newsDataSelector } from "../../recoil/selectors/newsDataSelector";
import { searchState } from "../../recoil/atoms/searchState";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const NewsListPage = () => {
    const data = useRecoilValueLoadable(newsDataSelector);
    const [search, setSearch] = useRecoilState(searchState);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const q = searchParams.get("q");
        if (q !== null) {
            setSearch(q);
        } else {
            setSearch("");
        }
    }, [searchParams, setSearch]);

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
