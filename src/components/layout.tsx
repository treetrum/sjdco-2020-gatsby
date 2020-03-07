import React from "react";
import PropTypes from "prop-types";

import useSmoothScroll from "../hooks/useSmoothScroll";
import Context from "./Context";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SEO from "./seo";
import MobileMenu from "./organisms/MobileMenu";
import SiteLoader from "./atoms/SiteLoader";

import "../scss/main.scss";

const Layout = ({ children }) => {
    // Uses dynamic import for the SmoothScroll library. Prevents SSR issues with the window object
    useSmoothScroll();
    const { toggleMobileMenu } = React.useContext(Context);
    const rootRef = React.useRef<null | HTMLDivElement>(null);

    // Close the mobile menu whenever a link is clicked
    React.useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (event.target instanceof HTMLAnchorElement) {
                toggleMobileMenu(false);
            }
        };
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [rootRef, toggleMobileMenu]);

    // Show the site loader for 1s
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="page" ref={rootRef}>
            <SEO title=""></SEO>
            <SiteLoader active={loading} />
            <NavBar />
            <MobileMenu />
            {children}
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
