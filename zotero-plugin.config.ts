import { defineConfig } from "zotero-plugin-scaffold";

export default defineConfig({
  source: ["src", "addon"],
  dist: "build",
  assets: ["addon/**/*.*", "src/**/*.*", "!src/**/*.ts"],

  extraBuilder: (options) => {
    // console.log(JSON.stringify(options, null, 2));
  },

  logLevel: "info",
});
