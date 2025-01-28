import { Link } from "react-router-dom";
import CountryListPopup from "../CountryListPopup/CountryListPopup";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { countryState } from "../../recoil/atoms/countryState";

const Header = () => {
    const country = useRecoilValue(countryState);
    const [countryOpen, setCountryOpen] = useState<boolean>(false);
    const showCountry = () => {
        setCountryOpen(true);
    };
    return (
        <>
            <header id="header">
                <h1 className="logo">
                    <Link to="/">
                        Latest
                        <br />
                        News.zip
                    </Link>
                </h1>
                <nav className="gnb">
                    <ul>
                        <li>
                            <Link to="scrap">Scrap</Link>
                        </li>
                        <li>
                            <button
                                className="country_btn"
                                onClick={showCountry}
                            >
                                {country}
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            {countryOpen && (
                <CountryListPopup setCountryOpen={setCountryOpen} />
            )}
        </>
    );
};

export default Header;
