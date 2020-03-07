import * as React from "react";
import Helmet from "react-helmet";
import Image from "gatsby-image";

import LockBodyScroll from "../atoms/LockBodyScroll";

interface Props {
    title: string;
    image: any;
    content: string;
    onClose: () => void;
}

const ProjectSlideover: React.FC<Props> = props => {
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                props.onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [props]);

    return (
        <div className="project-slideover">
            <LockBodyScroll />
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
            <button
                type="button"
                className="project-slideover__overlay"
                onClick={props.onClose}
            />
            <button onClick={props.onClose} className="project-slideover__back">
                <i className="icon icon-arrow-left" />
            </button>
            <div className="project-slideover__main">
                <div className="project-slideover__thumb">
                    <Image fluid={props.image}></Image>
                </div>
                <div className="project-slideover__content">
                    <h3 className="project-slideover__title">{props.title}</h3>
                    <div
                        className="rte"
                        dangerouslySetInnerHTML={{
                            __html: props.content
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectSlideover;
