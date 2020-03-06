import React from "react";

import Layout from "../components/layout";
import HeroHome from "../components/organisms/HeroHome";
import MyWork from "../components/organisms/MyWork";

const IndexPage: React.FC<{}> = () => {
    return (
        <Layout>
            <HeroHome />
            <MyWork />
        </Layout>
    );
};

export default IndexPage;
