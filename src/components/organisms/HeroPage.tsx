import * as React from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";

import * as Colors from "../../constants/Colors";
import Container from "../atoms/Container";
import ParallaxIcons from "../molecules/ParallaxIcons";

const Outer = styled.header`
    display: flex;
    position: relative;
    align-items: center;
    padding: 175px 0 75px;
    color: $white;
    overflow: hidden;

    background-image: radial-gradient(
        ${lighten(0.02, Colors.background)},
        ${darken(0.02, Colors.background)}
    );
`;

const Title = styled.h1`
    display: block;
    font-size: 43px;
    margin-bottom: 24px;
    color: ${Colors.white};
`;

interface PropsType {
    title: string;
    align?: "left" | "center" | "right";
}

const HeroPage: React.FC<PropsType> = ({ title, align }) => {
    return (
        <Outer>
            <ParallaxIcons />
            <Container>
                <Title style={{ textAlign: align || null }}>{title}</Title>
            </Container>
        </Outer>
    );
};

export default HeroPage;
