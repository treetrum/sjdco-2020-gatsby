import React from "react";

interface ContextType {
    mobileMenuOpen: boolean;
    toggleMobileMenu: (override?: boolean) => void;
}

const defaultState: ContextType = {
    mobileMenuOpen: false,
    toggleMobileMenu: () => {}
};

const ThemeContext = React.createContext<ContextType>(defaultState);

class ThemeProvider extends React.Component {
    state = {
        ...defaultState
    };

    toggleMobileMenu = (override?: boolean) => {
        if (typeof override !== "undefined") {
            this.setState({ mobileMenuOpen: override });
        } else {
            this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
        }
    };

    render() {
        const { children } = this.props;
        return (
            <ThemeContext.Provider
                value={{
                    mobileMenuOpen: this.state.mobileMenuOpen,
                    toggleMobileMenu: this.toggleMobileMenu
                }}
            >
                {children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContext;

export { ThemeProvider };
