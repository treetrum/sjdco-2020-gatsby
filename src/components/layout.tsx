import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import SmoothScroll from "smooth-scroll";

import NavBar from "./NavBar";
import Footer from "./Footer";

import "../scss/main.scss";

const Layout = ({ children }) => {
    React.useEffect(() => {
        new SmoothScroll('a[href*="#"]', {
            speed: 500
        });
    }, []);
    return (
        <>
            <Helmet>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
            </Helmet>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
