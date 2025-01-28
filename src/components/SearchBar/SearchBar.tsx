import style from "./SearchBar.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState<string>("");

    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const onKeyDownHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setSearchText("");
            navigate(`/?q=${searchText}`);
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
