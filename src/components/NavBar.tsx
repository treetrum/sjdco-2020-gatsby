import * as React from "react";
import { Link } from "gatsby";

import Context from "./Context";
import NavLinks from "./molecules/NavLinks";

const logo = require("../images/logos/sd-logo.svg");

const NavBar = () => {
    const { toggleMobileMenu, mobileMenuOpen } = React.useContext(Context);
    return (
        <header className="navbar">
            <div className="container">
                <div className="navbar-items">
                    <div className="navbar-item logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <nav className="navbar-item menu">
                        <NavLinks />
                    </nav>
                    <div className="navbar-item hamburger">
                        <button
                            aria-label="Menu"
                            style={{ background: "none", border: 0 }}
                            type="button"
                            onClick={() => {
                                toggleMobileMenu();
                            }}
                            className={`animated-hamburger ${
                                mobileMenuOpen ? "active" : ""
                            }`}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
