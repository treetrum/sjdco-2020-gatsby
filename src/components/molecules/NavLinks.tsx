import * as React from "react";

import NavLink, { LinkType } from "../atoms/NavLink";

const NavLinks = () => {
    const links: LinkType[] = [
        {
            title: "My Work",
            url: "/",
            type: "internal"
        },
        {
            title: "About Me / Contact",
            url: "/about",
            type: "internal"
        },
        {
            title: "Development Blog",
            url: "https://mutableconstant.com",
            target: "_blank",
            type: "external"
        }
    ];
    return links.map(link => <NavLink key={link.url} link={link}></NavLink>);
};

export default NavLinks;
