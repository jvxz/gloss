import { type CSSProperties } from "react";
import { css as formatCSS } from 'js-beautify';

export default async function exportTheme<T extends {
    dark: CSSProperties;
    light: CSSProperties;
}>(variables: T) {
    const theme = `
@layer base {
    :root {
        ${Object.entries(variables.light).map(([key, value]) => `${key}: ${value};`).join("\n")}
    }
    .dark {
        ${Object.entries(variables.dark).map(([key, value]) => `${key}: ${value};`).join("\n")}
    }
}
    `;

    return (formatCSS as (css: string) => string)(theme);
}
