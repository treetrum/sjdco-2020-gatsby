import React from "react";
import { graphql } from "gatsby";

import HeroHome from "../components/organisms/HeroHome";
import MyWork from "../components/organisms/MyWork";

const IndexPage = props => {
    const { projects } = props.data.file.childMarkdownRemark.frontmatter;
    return (
        <>
            <HeroHome />
            <MyWork projectNames={projects} />
        </>
    );
};

export const query = graphql`
    {
        file(sourceInstanceName: { eq: "pages" }, name: { eq: "home" }) {
            name
            childMarkdownRemark {
                frontmatter {
                    projects
                }
            }
        }
    }
`;

export default IndexPage;
