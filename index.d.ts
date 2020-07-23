declare type Format = "svg" | "dot" | "json" | "dot_json" | "xdot_json";

declare type Engine = "circo" | "dot" | "fdp" | "neato" | "osage" | "patchwork" | "twopi";

interface Image {
    path: string;
    width: string;
    height: string;
}

interface File {
    path: string;
    data: string;
}

interface Ext {
    images?: Image[];
    files?: File[];
}

export declare const graphviz: {
    layout(dotSource: string, outputFormat?: Format, layoutEngine?: Engine, ext?: Ext | undefined): Promise<string>;
    circo(dotSource: string, outputFormat?: Format, ext?: Ext | undefined): Promise<string>;
    dot(dotSource: string, outputFormat?: Format, ext?: Ext | undefined): Promise<string>;
    fdp(dotSource: string, outputFormat?: Format, ext?: Ext | undefined): Promise<string>;
    neato(dotSource: string, outputFormat?: Format, ext?: Ext | undefined): Promise<string>;
    osage(dotSource: string, outputFormat?: Format, ext?: Ext | undefined): Promise<string>;
    patchwork(dotSource: string, outputFormat?: Format, ext?: Ext | undefined): Promise<string>;
    twopi(dotSource: string, outputFormat?: Format, ext?: Ext | undefined): Promise<string>;
};

export {};

