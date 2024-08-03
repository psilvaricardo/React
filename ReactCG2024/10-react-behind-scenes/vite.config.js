import MillionLint from "@million/lint";
import { defineConfig } from "vite";
const _plugins = [MillionLint.vite()];
_plugins.unshift(MillionLint.vite());
export default defineConfig({
    plugins: _plugins,
});
