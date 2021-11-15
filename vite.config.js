import { defineConfig } from 'vite';
const path = require("path")
console.log()

export default defineConfig({
    resolve: {
        alias: {
            $: path.resolve(__dirname, "./src")
        }
    }
});