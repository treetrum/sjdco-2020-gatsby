import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { rgba } from "polished";
import isTouch from "../../utils/isTouch.js";

import * as Colors from "../../constants/Colors";
import * as Queries from "../../constants/MediaQueries";
import Thumbnail from "../atoms/Thumbnail";

const Container = styled(Link)`
    overflow: hidden;
    box-shadow: 0 5px 10px ${rgba("black", 0.2)};
    color: hsl(0, 0, 25%);
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: 500ms ease all;
    position: relative;

    &:hover {
        box-shadow: 0 10px 20px ${rgba("black", 0.2)};
    }
`;

const Content = styled.div`
    background-color: ${rgba(Colors.background, 0.75)};
    color: white;
    padding: 20px 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
    transition: 500ms ease all;

    a:hover & {
        transform: none;
    }

    ${() =>
        isTouch && {
            transform: "none"
        }}

    ${Queries.md} {
        padding: 25px 30px;
    }
`;

const Title = styled.h4`
    margin: 0 0 5px;
    font-size: 18px;
    color: ${Colors.green};
    transform: translateY(100%);
    opacity: 0;
    transition: 750ms ease all;

    a:hover & {
        opacity: 1;
        transform: none;
    }

    ${() =>
        isTouch && {
            transform: "none",
            opacity: 1
        }}

    ${Queries.md} {
        font-size: 22px;
    }
`;

const Subtitle = styled.p`
    font-size: 14px;
    margin: 0 0 5px;
    opacity: 0.5;
    line-height: 1.2;
    transform: translateY(100%);
    opacity: 0;
    transition: 750ms 250ms ease all;

    a:hover & {
        opacity: 1;
        transform: none;
    }

    ${() =>
        isTouch && {
            transform: "none",
            opacity: 1
        }}

    ${Queries.md} {
        font-size: 16px;
    }
`;

interface WorkTileProps {
    link: string;
    image: string;
    title: string;
    subtitle: string;
}

const WorkTile: React.FC<WorkTileProps> = props => {
    return (
        <Container to={props.link} key={props.link}>
            <Thumbnail image={props.image} />
            <Content>
                <Title>{props.title}</Title>
                <Subtitle>{props.subtitle}</Subtitle>
            </Content>
        </Container>
    );
};

export default WorkTile;
