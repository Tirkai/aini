import { createUseStyles } from "react-jss";
import { IAiniTheme } from "../../interfaces/IAiniTheme";

export const useGhostBaseStyles = createUseStyles<IAiniTheme>((theme) => ({
    ghostBase: {
        animation: "ease 3s $ghostBackgroundPulse infinite",
    },
    "@keyframes ghostBackgroundPulse": {
        from: {
            background: theme.colors.ghost.idle,
        },
        "50%": {
            background: theme.colors.ghost.pulse,
        },
        to: {
            background: theme.colors.ghost.idle,
        },
    },
}));
