export type IVariantGroup = string[];

export interface IVariants {
    [key: string]: IVariantGroup
}

declare const brand: IVariantGroup;
declare const state: IVariantGroup;
declare const basic: IVariantGroup;
declare const neutral: IVariantGroup;
declare const social: IVariantGroup;

declare const variants: IVariants;

export {
    brand,
    state,
    basic,
    neutral,
    social,
    variants
};
