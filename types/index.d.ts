export declare type PureType = string | number | boolean;
export declare type EmptyType = null | undefined;

export declare interface PlainObject {
    [s: string]: PureType
}

export declare interface PlainArray {
    [s: number]: PureType
}

