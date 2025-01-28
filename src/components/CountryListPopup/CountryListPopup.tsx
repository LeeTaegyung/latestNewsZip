import style from "./CountryListPopup.module.scss";
import countries from "../../constants/countries.json";
import { useRecoilState } from "recoil";
import { countryState } from "../../recoil/atoms/countryState";
import { searchState } from "../../recoil/atoms/searchState";

const CountryListPopup = ({
    setCountryOpen,
}: {
    setCountryOpen: (ars: boolean) => void;
}) => {
    const [country, setCountry] = useRecoilState(countryState);
    const [search, setSearch] = useRecoilState(searchState);

    const closeCountry = () => {
        setCountryOpen(false);
    };

    const changeCountry = (code: string) => {
        setCountry(code);
        setSearch("");
        closeCountry();
    };

    return (
        <div className={style.countryListPopup}>
            <div className={style.countryListPopup__container}>
                <div className={style.countryListPopup__header}>
                    <h3 className={style.countryListPopup__header__title}>
                        국가 선택
                    </h3>
                    <button
                        className={style.countryListPopup__header__closeBtn}
                        onClick={closeCountry}
                    >
                        닫기
                    </button>
                </div>
                <div className={style.countryListPopup__body}>
                    <ul className={style.countryList}>
                        {countries.map((item, idx) => {
                            return (
                                <li
                                    className={style.countryList__item}
                                    key={idx}
                                >
                                    <button
                                        onClick={() => {
                                            changeCountry(item.code);
                                        }}
                                        className={`${
                                            style.countryList__item__btn
                                        } ${
                                            item.code === country &&
                                            style.selected
                                        }`}
                                    >
                                        <span
                                            className={
                                                style.countryList__item__text
                                            }
                                        >
                                            {item.country}
                                        </span>
                                        <span
                                            className={
                                                style.countryList__item__code
                                            }
                                        >
                                            {item.code}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CountryListPopup;
