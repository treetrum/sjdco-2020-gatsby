import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import WorkTile from "../molecules/WorkTile";

interface Project {
    frontmatter: {
        title: string;
        description: string;
        subtitle: string;
        image: string;
    };
    html: string;
}

const MyWork = () => {
    const data = useStaticQuery(graphql`
        {
            allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
                edges {
                    node {
                        id
                        name
                        childMarkdownRemark {
                            frontmatter {
                                title
                                description
                                subtitle
                                image
                            }
                            html
                        }
                    }
                }
            }
        }
    `);

    const projects: Array<Project> = data.allFile.edges.map(
        d => d.node.childMarkdownRemark
    );

    return (
        <>
            <section className="my-work" id="my-work">
                <div className="container">
                    <div className="my-work__intro">
                        <h3 className="section-title">My Work</h3>
                    </div>
                    <div className="my-work__projects">
                        {projects.map((project, index) => {
                            return (
                                <div
                                    key={index}
                                    className="my-work__projects__single"
                                >
                                    <WorkTile
                                        title={project.frontmatter.title}
                                        link={"/project/some-project"}
                                        image={project.frontmatter.image}
                                        subtitle={project.frontmatter.subtitle}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* {projects.map(project => (
                <Route
                    key={project.slug}
                    exact
                    path={`/project/${project.slug}`}
                >
                    {({ match }) => (
                        <CSSTransition
                            in={match !== null}
                            timeout={500}
                            classNames="slideover"
                            unmountOnExit
                        >
                            <ProjectSlideover projectSlug={project.slug} />
                        </CSSTransition>
                    )}
                </Route>
            ))} */}
        </>
    );
};

export default MyWork;
