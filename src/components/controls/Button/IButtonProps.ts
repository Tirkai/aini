import { ButtonApperance } from "../../../types/ButtonApperance";
import { ButtonVariant } from "../../../types/ButtonVariant";
import { JSXChildren } from "../../../types/JSXChildren";
import { UIElementSize } from "../../../types/UIElementSize";

export interface IButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: JSXChildren;
    variant?: ButtonVariant;
    apperance?: ButtonApperance;
    size?: UIElementSize;
    disabled?: boolean;
}
