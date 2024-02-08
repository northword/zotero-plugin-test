import { defineConfig } from "zotero-plugin-scaffold";

export default defineConfig({
  source: ["src", "addon"],
  dist: "build",
  assets: ["addon/**/*.*"],
  esbuildOptions: [
    {
      entryPoints: ["src/index.ts"],
      define: {
        __env__: `"${process.env.NODE_ENV}"`,
      },
      bundle: true,
      target: "firefox102",
      outfile: "build/addon/chrome/content/scripts/addontemplate.js",
    },
  ],

  extraBuilder: (options) => {
    console.log(JSON.stringify(options, null, 2));
  },

  logLevel: "debug",
});
