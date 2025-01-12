import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
    return (
        <div id="wrap">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
