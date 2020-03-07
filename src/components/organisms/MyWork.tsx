import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import WorkTile from "../molecules/WorkTile";
import { CSSTransition } from "react-transition-group";
import ProjectSlideover from "../organisms/ProjectSlideover";

interface Project {
    frontmatter: {
        title: string;
        description: string;
        subtitle: string;
        image: any;
        tags: string[];
        slug: string;
    };
    html: string;
}

const MyWork: React.FC<{ projectNames: string[] }> = props => {
    const data = useStaticQuery(graphql`
        {
            allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
                edges {
                    node {
                        id
                        name
                        childMarkdownRemark {
                            frontmatter {
                                slug
                                title
                                description
                                subtitle
                                tags
                                image {
                                    childImageSharp {
                                        fluid(maxWidth: 1024, quality: 100) {
                                            ...GatsbyImageSharpFluid_withWebp
                                        }
                                    }
                                }
                            }
                            html
                        }
                    }
                }
            }
        }
    `);

    // Get all the projects from the query above
    const allProjects: Array<Project> = data.allFile.edges.map(
        ({ node }) => node.childMarkdownRemark
    );

    // Filter and sort them from the names passed in to props
    let projects: Project[] = props.projectNames
        .map(name => {
            return allProjects.find(p => p.frontmatter.title === name);
        })
        .filter(a => !!a);

    const projectFromURL =
        allProjects.find(
            p =>
                p.frontmatter.slug === window.location.pathname.split("/").pop()
        ) || null;

    const [activeProject, _setActiveProject] = React.useState<null | Project>(
        projectFromURL
    );

    const setActiveProject = project => {
        if (project) {
            window.history.pushState(
                {},
                "",
                `/project/${project.frontmatter.slug}`
            );
        } else {
            window.history.pushState({}, "", `/`);
        }
        _setActiveProject(project);
    };

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
                                        image={
                                            project.frontmatter.image
                                                .childImageSharp.fluid
                                        }
                                        subtitle={project.frontmatter.subtitle}
                                        onClick={() => {
                                            setActiveProject(project);
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {projects.map(project => (
                <CSSTransition
                    key={project.frontmatter.title}
                    in={
                        project.frontmatter.title ===
                        activeProject?.frontmatter?.title
                    }
                    timeout={500}
                    classNames="slideover"
                    unmountOnExit
                >
                    <ProjectSlideover
                        title={project.frontmatter.title}
                        image={project.frontmatter.image.childImageSharp.fluid}
                        tags={project.frontmatter.tags}
                        content={project.html}
                        onClose={() => {
                            // setActiveProject(null);
                            setActiveProject(null);
                            // window.location.hash = `/project/${project.frontmatter.slug}`;
                        }}
                    />
                </CSSTransition>
            ))}
        </>
    );
};

export default MyWork;
