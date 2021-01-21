import { createUseStyles } from "react-jss";

export const useRevealStyles = createUseStyles(() => ({
    revealBase: {
        position: "relative",
        width: "100%",
        height: "100%",
        background: "none",
    },
    revealShape: {
        position: "absolute",
        top: 0,
        left: "calc(50% - 16px)",
        width: "32px",
        height: "32px",
        background: `radial-gradient(
                circle,
                rgba(0,0,0,0) 10%,
                rgba(0,0,0,0) 25%,
                rgba(255,255,255,1) 50%,
                rgba(0,0,0,0) 75%,
                rgba(0,0,0,0) 90%
            );`,
        zIndex: 1,
        content: "",
        pointerEvents: "none",
        opacity: 0,
    },
    revealContainer: {
        display: "flex",
    },
    animation: {
        animation: "0.7s ease $revealAnimation",
    },
    "@keyframes revealAnimation": {
        from: {
            opacity: 0,
            transform: "scale(0.5)",
        },
        "50%": {
            opacity: 0.35,
        },
        to: {
            opacity: 0,
            transform: "scale(5)",
        },
    },
}));
