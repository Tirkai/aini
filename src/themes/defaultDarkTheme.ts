import Color from "color";
import { IAiniTheme } from "../interfaces/IAiniTheme";

const DEFAULT_COLOR = "#666666";
const PRIMARY_COLOR = "#546de5";
const DANGER_COLOR = "#c0392b";
const SUCCESS_COLOR = "#27ae60";

export const defaultDarkTheme: IAiniTheme = {
    colors: {
        default: {
            idle: DEFAULT_COLOR,
            hover: Color(DEFAULT_COLOR).darken(0.2).toString(),
        },
        primary: {
            idle: PRIMARY_COLOR,
            hover: Color(PRIMARY_COLOR).darken(0.2).toString(),
        },
        danger: {
            idle: DANGER_COLOR,
            hover: Color(DANGER_COLOR).darken(0.2).toString(),
        },
        success: {
            idle: SUCCESS_COLOR,
            hover: Color(SUCCESS_COLOR).darken(0.2).toString(),
        },
        ghost: {
            idle: "#444",
            pulse: "#555",
        },
    },
    spaces: {
        extraSmall: 4,
        small: 8,
        preMedium: 12,
        medium: 16,
        large: 20,
        extraLarge: 24,
    },
    sizes: {
        small: 30,
        medium: 36,
        large: 42,
    },
};
