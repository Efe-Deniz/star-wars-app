/// <reference types="vite/client" />

// Vite Environment Variables
interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    // Daha fazla env variable eklenirse buraya ekle
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

// CSS Modules type declaration
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}
