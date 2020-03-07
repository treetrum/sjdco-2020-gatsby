import * as React from "react";

const useSmoothScroll = () => {
    React.useEffect(() => {
        let scroller;
        import("smooth-scroll").then(SmoothScroll => {
            scroller = new SmoothScroll.default('a[href*="#"]', {
                speed: 500
            });
        });
        return () => {
            if (scroller) {
                scroller.destroy();
            }
        };
    }, []);
};

export default useSmoothScroll;
