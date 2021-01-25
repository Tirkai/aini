import { IGhostColor } from "./IGhostColor";
import { IThemeColor } from "./IThemeColor";

export interface IAiniTheme {
    colors: {
        default: IThemeColor;
        primary: IThemeColor;
        danger: IThemeColor;
        success: IThemeColor;
        ghost: IGhostColor;
    };
    spaces: {
        extraSmall: number;
        small: number;
        preMedium: number;
        medium: number;
        large: number;
        extraLarge: number;
    };
    sizes: {
        small: number;
        medium: number;
        large: number;
    };
}
