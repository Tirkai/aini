import classNames from "classnames";
import React, { useState } from "react";
import { JSXChildren } from "../../../types/JSXChildren";
import { useRevealStyles } from "./Reveal.styles";
interface IRevealEffectProps {
    children: JSXChildren;
    disabled?: boolean;
}

export const RevealEffect = (props: IRevealEffectProps) => {
    const styles = useRevealStyles();
    const [isPlayingAnimation, setPlayingAnimation] = useState(false);
    const [effectPosition, setEffectPosition] = useState({ x: 0, y: 0 });

    const handlePlayRevealAnimation = (event: React.MouseEvent) => {
        if (props.disabled) {
            return;
        }
        const clientX = event.clientX;
        const clientY = event.clientY;
        const target = event.target as Element;
        const bounds = target.getBoundingClientRect();
        const offset = 16;

        setEffectPosition({
            x: clientX - bounds.left - offset,
            y: clientY - bounds.top - offset,
        });

        setPlayingAnimation(true);
    };

    const handleEndRevealAnimation = () => setPlayingAnimation(false);

    return (
        <div className={styles.revealBase} onClick={handlePlayRevealAnimation}>
            <div className={styles.revealContainer}>{props.children}</div>
            <div
                className={classNames(styles.revealShape, {
                    [styles.animation]: isPlayingAnimation,
                })}
                style={{
                    top: effectPosition.y,
                    left: effectPosition.x,
                }}
                onAnimationEnd={handleEndRevealAnimation}
            ></div>
        </div>
    );
};
