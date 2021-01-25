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
}
