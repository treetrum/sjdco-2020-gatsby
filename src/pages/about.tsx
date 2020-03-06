import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import HeroPage from "../components/organisms/HeroPage";
import Form from "../components/organisms/Form";

const IndexPage: React.FC<{}> = () => {
    const data = useStaticQuery(graphql`
        {
            file(sourceInstanceName: { eq: "pages" }) {
                name
                childMarkdownRemark {
                    frontmatter {
                        title
                        formSuccess
                        formFields {
                            label
                            type
                            required
                            placeholder
                        }
                    }
                    html
                }
            }
        }
    `);
    const page = data.file.childMarkdownRemark;
    console.log(page);
    return (
        <Layout>
            <HeroPage title={page.frontmatter.title} />
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="columns md-7">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: page.html
                                }}
                            />
                        </div>
                        <div className="columns md-4">
                            <Form
                                fields={page.frontmatter.formFields}
                                successMessage={page.frontmatter.formSuccess}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
