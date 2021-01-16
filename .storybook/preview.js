import { AiniProvider } from "../src/providers/AiniProvider";
import { defaultDarkTheme } from "../src/themes/defaultDarkTheme";

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
    // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
    actions: { argTypesRegex: "^on.*" },
};

export const decorators = [
    (Story) => (
        <AiniProvider theme={defaultDarkTheme}>
            <Story />
        </AiniProvider>
    ),
];
