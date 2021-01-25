import classNames from "classnames";
import React, { useMemo } from "react";
import { ButtonApperance } from "../../../types/ButtonApperance";
import { ButtonVariant } from "../../../types/ButtonVariant";
import { UIElementSize } from "../../../types/UIElementSize";
import { switched } from "../../../util";
import { RevealEffect } from "../../effects/RevealEffect/RevealEffect";
import { useButtonStyles } from "./Button.styles";
import { IButtonProps } from "./IButtonProps";

export const Button = (props: IButtonProps) => {
    const styles = useButtonStyles(props);

    const apperance = useMemo(
        () =>
            switched<ButtonApperance, string>(
                props.apperance,
                [
                    ["fill", styles.fillApperance],
                    ["outline", styles.outlineApperance],
                ],
                styles.fillApperance
            ),
        [props.apperance]
    );

    const variant = useMemo(
        () =>
            switched<ButtonVariant, string>(
                props.variant,
                [
                    ["default", styles.defaultVariant],
                    ["success", styles.successVariant],
                    ["primary", styles.primaryVariant],
                    ["danger", styles.dangerVariant],
                ],
                styles.defaultVariant
            ),
        [props.variant]
    );

    const size = useMemo(
        () =>
            switched<UIElementSize, string>(
                props.size,
                [
                    ["small", styles.smallBaseSize],
                    ["medium", styles.mediumBaseSize],
                    ["large", styles.largeBaseSize],
                ],
                styles.mediumSize
            ),
        [props.size]
    );

    return (
        <button
            className={classNames(styles.buttonShape, styles.buttonBase, size)}
            {...props}
            data-locator="button"
        >
            <RevealEffect disabled={props.disabled}>
                <div
                    className={classNames(
                        styles.buttonContent,
                        variant,
                        apperance,
                        { [styles.disabled]: props.disabled }
                    )}
                >
                    {props.children}
                </div>
            </RevealEffect>
        </button>
    );
};
