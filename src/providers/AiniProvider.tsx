import React from "react";
import { JssProvider, SheetsRegistry, ThemeProvider } from "react-jss";
import { IAiniTheme } from "../interfaces/IAiniTheme";
import { JSXChildren } from "../types/JSXChildren";

interface IAiniContextValue {
    theme?: IAiniTheme;
}

export const AiniContext = React.createContext<IAiniContextValue>({});

interface IAiniProviderProps {
    children: JSXChildren;
    theme: IAiniTheme;
}

export const AiniProvider = (props: IAiniProviderProps) => {
    const sheets = new SheetsRegistry();
    return (
        <AiniContext.Provider value={{ theme: props.theme }}>
            <JssProvider registry={sheets} classNamePrefix="Aini">
                <ThemeProvider theme={props.theme}>
                    {props.children}
                </ThemeProvider>
            </JssProvider>
        </AiniContext.Provider>
    );
};
