import {theme} from "./Theme";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmax?: number
    Fmin?: number,
}

export const font = ({family, weight, color, lineHeight, Fmax, Fmin}: FontPropsType) => `
    font-family: ${family || "Fira Code"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.primaryColor};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`