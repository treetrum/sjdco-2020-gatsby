import React from "react";

import { ThemeProvider } from "./src/components/Context";

export const wrapRootElement = ({ element }) => (
    <ThemeProvider>{element}</ThemeProvider>
);
