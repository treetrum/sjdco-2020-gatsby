import React from "react";
import PropTypes from "prop-types";
import SmoothScroll from "smooth-scroll";

import NavBar from "./NavBar";
import Footer from "./Footer";
import SEO from "./seo";

import "../scss/main.scss";

const Layout = ({ children }) => {
    React.useEffect(() => {
        if (typeof window !== `undefined`) {
            const scroller = new SmoothScroll('a[href*="#"]', {
                speed: 500
            });
            return () => {
                scroller.destroy();
            };
        }
    }, []);
    return (
        <div className="page">
            <SEO title=""></SEO>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
