import * as React from "react";
import { Link } from "gatsby";

import ParallaxIcons from "../molecules/ParallaxIcons";
import ParallaxLetters from "../molecules/ParallaxLetters";
import useWindowHeight from "../../hooks/useWindowHeight";

const HeroHome = () => {
    const minHeight = useWindowHeight();
    return (
        <header className="hero-home" style={{ minHeight: `${minHeight}px` }}>
            <ParallaxIcons />
            <ParallaxLetters />
            <div className="container">
                <h1 className="site-title">Sam Davis</h1>
                <p className="subtitle">
                    A passionate{" "}
                    <span className="highlight-purple">
                        front-end developer
                    </span>{" "}
                    <br />
                    with over{" "}
                    <span className="highlight-blue">6 years experience</span>
                </p>
                <p className="buttons">
                    <Link className="button-green" to="/contact">
                        About Me
                    </Link>
                </p>
            </div>
            <div className="more-link">
                <a href="#my-work">Some of my work</a>
            </div>
        </header>
    );
};

export default HeroHome;
