import React from "react";

import Layout from "../components/layout";
import HeroHome from "../components/organisms/HeroHome";

const IndexPage: React.FC<{}> = () => {
    return (
        <Layout>
            <HeroHome />
        </Layout>
    );
};

export default IndexPage;
