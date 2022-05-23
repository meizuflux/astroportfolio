interface ImportMetaEnv {
    readonly PUBLIC_ENDPOINT: string;
    readonly PUBLIC_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}