import * as React from "react";

let scrollDistance = 0;

const LockBodyScroll: React.FC = () => {
    React.useEffect(() => {
        if (typeof window !== `undefined`) {
            const { body } = document;

            scrollDistance = window.scrollY;
            requestAnimationFrame(() => {
                body.classList.add("noscroll");
                body.style.top = `-${scrollDistance}px`;
            });

            return () => {
                requestAnimationFrame(() => {
                    body.classList.remove("noscroll");
                    body.style.top = null;
                    if (scrollDistance) {
                        window.scroll(null, scrollDistance);
                        scrollDistance = 0;
                    }
                });
            };
        }
    }, []);
    return null;
};

export default LockBodyScroll;
