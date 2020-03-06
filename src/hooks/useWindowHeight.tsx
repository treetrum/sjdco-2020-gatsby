import { useState, useEffect } from "react";
import isTouch from "../utils/isTouch";

/*
 * Returns the up to date window.innerHeight. If on a touch device - window.innerHeight
 * is only calculated one, on desktop this is calculated on window.resize
 */
export default () => {
    const [height, setHeight] = useState<string | number>(
        typeof window !== "undefined" ? window.innerHeight : "100vh"
    );
    useEffect(() => {
        if (typeof window !== `undefined`) {
            const handleWindowResize = () => {
                setHeight(window.innerHeight);
            };
            if (!isTouch) {
                window.addEventListener("resize", handleWindowResize);
            }
            return () => {
                if (!isTouch) {
                    window.removeEventListener("resize", handleWindowResize);
                }
            };
        }
    }, []);
    return height;
};
