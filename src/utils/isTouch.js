var isTouch =
    (typeof window !== "undefined" && "ontouchstart" in window) ||
    (typeof navigator !== "undefined" && navigator.msMaxTouchPoints);

export default isTouch;
