import { createUseStyles } from "react-jss";
import { IAiniTheme } from "../../../interfaces/IAiniTheme";

export const useButtonStyles = createUseStyles<IAiniTheme>(
    (theme) => ({
        buttonShape: {
            display: "inline-flex",
            alignItems: "center",
            height: "32px",
            minWidth: "64px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "4px",
            borderColor: "transparent",
            boxSizing: "border-box",
        },
        buttonBase: {
            position: "relative",
            borderColor: theme.colors.default.idle,
            outline: "none",
            padding: "4px 12px",
            background: theme.colors.default.idle,
            color: "white",
            overflow: "hidden",
            transition: "ease 0.3s",
            "&:hover": {
                cursor: "pointer",
                borderColor: theme.colors.default.idle,
                background: theme.colors.default.hover,
            },
        },
        defaultVariant: {
            background: theme.colors.default.idle,
            borderColor: theme.colors.default.idle,
            // border: (props: IButtonProps) => props.apperance,
            "&:hover": {
                background: theme.colors.default.hover,
                borderColor: theme.colors.default.hover,
            },
        },
        successVariant: {
            background: theme.colors.success.idle,
            borderColor: theme.colors.success.idle,
            // border: (props: IButtonProps) => props.apperance,
            "&:hover": {
                background: theme.colors.success.hover,
                borderColor: theme.colors.success.hover,
            },
        },
        primaryVariant: {
            background: theme.colors.primary.idle,
            borderColor: theme.colors.primary.idle,
            // border: (props: IButtonProps) => props.apperance,
            "&:hover": {
                background: theme.colors.primary.hover,
                borderColor: theme.colors.primary.hover,
            },
        },
        dangerVariant: {
            background: theme.colors.danger.idle,
            borderColor: theme.colors.danger.idle,
            // border: (props: IButtonProps) => props.apperance,
            "&:hover": {
                background: theme.colors.danger.hover,
                borderColor: theme.colors.danger.hover,
            },
        },
        outlineApperance: {
            background: "none",
            "&:hover": {
                background: "none",
            },
        },
        fillApperance: {
            background: "auto",
        },
        reveal: {
            position: "absolute",
            top: 0,
            left: "0%",
            transform: "scale(1)",
            width: "100%",
            height: "100%",
            opacity: 0,
            transition: "ease 5s",
            background: `radial-gradient(
            circle, 
            rgba(0,0,0,0) 0%, 
            rgba(255,255,255,1) 45%, 
            rgba(255,255,255,1) 60%, 
            rgba(0,0,0,0) 100%
        );`,
        },
        activeReveal: {
            animation: `$revealFade 0.5s`,
        },
        "@keyframes revealFade": {
            from: {
                opacity: 0,
                transform: "scale(0.5)",
            },
            "10%": {
                opacity: 0.2,
            },
            "50%": {
                opacity: 0.2,
            },
            to: {
                opacity: 0,
                transform: "scale(2)",
            },
        },
    }),
    {
        name: "Button",
    }
);
