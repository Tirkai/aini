import classNames from "classnames";
import React from "react";
import { ButtonApperance } from "../../../types/ButtonApperance";
import { ButtonVariant } from "../../../types/ButtonVariant";
import { RevealEffect } from "../../effects/RevealEffect/RevealEffect";
import { useButtonStyles } from "./Button.styles";

const utilSwitch = (source: any, data: any[], defaultValue: any = null) => {
    const item = data.find((item: any[]) => {
        return source === item[0];
    });

    if (item) {
        const result = item[1];
        return result;
    }

    return defaultValue;
};

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: JSX.Element | JSX.Element[] | string | number;
    variant?: ButtonVariant;
    apperance?: ButtonApperance;
}

export const Button = (props: IButtonProps) => {
    const styles = useButtonStyles();

    const getApperanceStyle = () =>
        utilSwitch(props.apperance, [
            ["fill", styles.fillApperance],
            ["outline", styles.outlineApperance],
        ]);

    const getVariant = () =>
        utilSwitch(
            props.variant,
            [
                ["default", styles.defaultVariant],
                ["success", styles.successVariant],
                ["primary", styles.primaryVariant],
                ["danger", styles.dangerVariant],
            ],
            styles.DefaultVariant
        );

    return (
        <button
            className={classNames(styles.buttonShape, styles.buttonBase)}
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
