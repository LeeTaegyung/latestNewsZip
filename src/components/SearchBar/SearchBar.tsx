import { useRecoilState } from "recoil";
import style from "./SearchBar.module.scss";
import { searchState } from "../../recoil/atoms/searchState";
import { useState } from "react";

const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const [search, setSearch] = useRecoilState(searchState);

    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const onKeyDownHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setSearch(searchText);
            setSearchText("");
        }
    };

    return (
        <div className={style.search__bar}>
            <input
                type="text"
                className={style.search__input}
                placeholder="검색어를 입력해주세요."
                value={searchText}
                onChange={onChangeHandle}
                onKeyDown={onKeyDownHandle}
            />
            <button className={style.search__btn}>검색</button>
        </div>
    );
};

export default SearchBar;
