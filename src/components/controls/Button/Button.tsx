import classNames from "classnames";
import React from "react";
import { ButtonApperance } from "../../../types/ButtonApperance";
import { ButtonVariant } from "../../../types/ButtonVariant";
import { ElementSize } from "../../../types/ElementSize";
import { switched } from "../../../util";
import { RevealEffect } from "../../effects/RevealEffect/RevealEffect";
import { useButtonStyles } from "./Button.styles";
import { IButtonProps } from "./IButtonProps";

export const Button = (props: IButtonProps) => {
    const styles = useButtonStyles(props);

    const getApperanceStyle = () =>
        switched<ButtonApperance, string>(
            props.apperance,
            [
                ["fill", styles.fillApperance],
                ["outline", styles.outlineApperance],
            ],
            styles.fillApperance
        );

    // props.apperance
    // ? utilSwitch<ButtonApperance, string>(props.apperance, [
    //       { key: "fill", value: styles.fillApperance },
    //       { key: "outline", value: styles.outlineApperance },
    //   ])
    // : styles.fillApperance;

    const getVariant = () =>
        switched<ButtonVariant, string>(
            props.variant,
            [
                ["default", styles.defaultVariant],
                ["success", styles.successVariant],
                ["primary", styles.primaryVariant],
                ["danger", styles.dangerVariant],
            ],
            styles.defaultVariant
        );

    const getSize = () =>
        switched<ElementSize, string>(
            props.size,
            [
                ["small", styles.smallSize],
                ["medium", styles.mediumSize],
                ["large", styles.largeSize],
            ],
            styles.mediumSize
        );

    return (
        <button
            className={classNames(
                styles.buttonShape,
                styles.buttonBase,
                getSize()
            )}
            {...props}
            data-locator="button"
        >
            <RevealEffect>
                <div
                    className={classNames(
                        styles.buttonContent,
                        getVariant(),
                        getApperanceStyle()
                    )}
                >
                    {props.children}
                </div>
            </RevealEffect>
        </button>
    );
};
