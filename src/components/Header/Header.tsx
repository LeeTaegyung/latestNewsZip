import { Link } from "react-router-dom";

const Header = () => {
    return (
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
                        <button className="country_btn">한국</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
