import MillionLint from '@million/lint';
import million from "million/compiler";
import { defineConfig } from "vite";
const _plugins = [MillionLint.vite()];
_plugins.unshift(MillionLint.vite())
export default defineConfig({
  plugins: _plugins
});