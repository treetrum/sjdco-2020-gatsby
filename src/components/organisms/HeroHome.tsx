import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import ParallaxIcons from "../molecules/ParallaxIcons";
import ParallaxLetters from "../molecules/ParallaxLetters";
import useWindowHeight from "../../hooks/useWindowHeight";

const HeroHome = () => {
    const data = useStaticQuery(graphql`
        {
            file(sourceInstanceName: { eq: "pages" }, name: { eq: "home" }) {
                name
                childMarkdownRemark {
                    frontmatter {
                        title
                        cta_text
                        cta_link
                    }
                    html
                }
            }
        }
    `);

    const page = data.file.childMarkdownRemark;

    const minHeight = useWindowHeight();

    return (
        <header
            className="hero-home"
            style={{
                minHeight: minHeight ? `${minHeight}px` : `100vw`
            }}
        >
            <ParallaxIcons />
            <ParallaxLetters />
            <div className="container">
                <h1 className="site-title">
                    {data.file.childMarkdownRemark.frontmatter.title}
                </h1>
                <div
                    className="subtitle"
                    dangerouslySetInnerHTML={{ __html: page.html }}
                />
                <p className="buttons">
                    <Link
                        className="button-green"
                        to={page.frontmatter.cta_link}
                    >
                        {page.frontmatter.cta_text}
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
