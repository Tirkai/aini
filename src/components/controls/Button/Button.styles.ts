import { createUseStyles } from "react-jss";
import { IAiniTheme } from "../../../interfaces/IAiniTheme";

export const useButtonStyles = createUseStyles<IAiniTheme>(
    (theme) => ({
        buttonShape: {
            display: "inline-flex",
            alignItems: "center",
            height: "32px",
            border: "none",
            background: "none",
            boxSizing: "border-box",
            borderRadius: "4px",
            minWidth: "32px",
        },
        buttonBase: {
            position: "relative",
            outline: "none",
            color: "white",
            overflow: "hidden",
            padding: "0",
        },
        buttonContent: {
            display: "flex",
            alignItems: "center",
            padding: "4px 12px",
            background: theme.colors.default.idle,
            borderColor: theme.colors.default.idle,
            boxSizing: "border-box",
            transition: "ease 0.3s",
            height: "32px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "4px",
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
    }),
    {
        name: "Button",
    }
);
