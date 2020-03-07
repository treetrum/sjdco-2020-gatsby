import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import HeroPage from "../components/organisms/HeroPage";

import ohwell from "../images/ohwell.gif";

const OhWell = styled.img`
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
`;

const NotFoundPage = () => (
    <Layout>
        <HeroPage align="center" title="404 - Not Found"></HeroPage>
        <div className="page-content">
            <div className="container">
                <OhWell src={ohwell} alt="" />
            </div>
        </div>
    </Layout>
);

export default NotFoundPage;
