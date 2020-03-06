import * as React from "react";

import ParallaxIcons from "../molecules/ParallaxIcons";

interface PropsType {
    title: string;
}

const HeroPage: React.FC<PropsType> = ({ title }) => {
    return (
        <header className="hero-page">
            <ParallaxIcons />
            <div className="container">
                <h1 className="hero-page__title">{title}</h1>
            </div>
        </header>
    );
};

export default HeroPage;
