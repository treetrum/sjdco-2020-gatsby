import * as React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Link } from "gatsby";

import Container from "./atoms/Container";
import * as Colors from "../constants/Colors";
import SocialLinks from "./molecules/SocialLinks";
import Config from "../constants/Config";
import SmallPrint from "./atoms/SmallPrint";

const logo = require("../images/logos/sd-logo.svg");

const FooterPrimary = styled.footer`
    padding: 48px 0 16px;
    background-color: ${Colors.background};
    text-align: center;
    margin-top: auto;
`;

const FooterSecondary = styled.footer`
    padding: 2rem 0;
    background-color: ${Colors.background};
    border-top: 1px solid ${rgba("white", 0.1)};
    text-align: center;
`;

const Logo = styled.div`
    height: 100px;
    margin-bottom: 24px;

    img {
        height: 100%;
        display: block;
        margin: 0 auto;
    }
`;

const Footer = () => {
    return (
        <>
            <FooterPrimary>
                <Container>
                    <Logo>
                        <Link to="/">
                            <img src={logo} alt="Sam Davis Logo" />
                        </Link>
                    </Logo>
                    <SocialLinks links={Config.socialLinks} />
                </Container>
            </FooterPrimary>
            <FooterSecondary>
                <Container>
                    <SmallPrint>
                        Made with <i className="icon icon-heart" /> by Sam Davis
                        &copy; {new Date().getFullYear()}
                    </SmallPrint>
                </Container>
            </FooterSecondary>
        </>
    );
};

export default Footer;
