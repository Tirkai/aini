import { assign } from "lodash";
import { createUseStyles } from "react-jss";
import { IAiniTheme } from "../../../interfaces/IAiniTheme";
import { IThemeColor } from "../../../interfaces/IThemeColor";

const getVariantStyle = (color: IThemeColor) => ({
    background: color.idle,
    borderColor: color.idle,
    "&:hover": {
        background: color.hover,
        borderColor: color.hover,
    },
});

const name = "Button";

export const useButtonStyles = createUseStyles<IAiniTheme>(
    (theme: IAiniTheme) => ({
        buttonShape: {
            display: "inline-flex",
            alignItems: "center",
            height: "36px",
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
        buttonContent: assign(
            {
                display: "flex",
                alignItems: "center",
                padding: "4px 12px",
                cursor: "pointer",
                boxSizing: "border-box",
                transition: "ease 0.3s",
                height: "100%",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "4px",
            },
            getVariantStyle(theme.colors.default)
        ),
        defaultVariant: getVariantStyle(theme.colors.default),
        successVariant: getVariantStyle(theme.colors.success),
        primaryVariant: getVariantStyle(theme.colors.primary),
        dangerVariant: getVariantStyle(theme.colors.danger),

        smallSize: {
            height: "30px",
        },
        mediumSize: {
            height: "36px",
        },
        largeSize: {
            height: "42px",
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
        name,
    }
);
