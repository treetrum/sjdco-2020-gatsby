import * as React from "react";
import { Link } from "gatsby";

export interface LinkType {
    title: string;
    url: string;
    target?: string;
    type: "internal" | "external";
}

const NavLink: React.FC<{ link: LinkType }> = props => {
    const link =
        props.link.type === "external" ? (
            <a target={props.link.target} href={props.link.url}>
                {props.link.title}
            </a>
        ) : (
            <Link to={props.link.url} target={props.link.target}>
                {props.link.title}
            </Link>
        );

    return <li>{link}</li>;
};

export default NavLink;
