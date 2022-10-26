export type BuildMode = 'production' | 'development';

export interface BuildEnv {
    port: number;
    mode: BuildMode;
    apiUrl: string;
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildMode;
    port: number;
    paths: BuildPaths;
    isDev: boolean;
    apiUrl: string;
}
