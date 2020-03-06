import * as React from "react";
import { Link } from "gatsby";
import NavLink, { LinkType } from "./atoms/NavLink";

const logo = require("../images/logos/sd-logo.svg");

const links: LinkType[] = [
    {
        title: "My Work",
        url: "/",
        type: "internal"
    },
    {
        title: "About Me / Contact",
        url: "/contact",
        type: "internal"
    },
    {
        title: "Development Blog",
        url: "https://mutableconstant.com",
        target: "_blank",
        type: "external"
    }
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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
                        {links.map(link => (
                            <NavLink link={link}></NavLink>
                        ))}
                    </nav>
                    <div className="navbar-item hamburger">
                        <button
                            aria-label="Menu"
                            style={{ background: "none", border: 0 }}
                            type="button"
                            className={`animated-hamburger ${
                                isMenuOpen ? "active" : ""
                            }`}
                            onClick={() => {
                                setIsMenuOpen(a => !a);
                            }}
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
