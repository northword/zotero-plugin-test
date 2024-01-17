import { defineConfig } from "zotero-plugin-dev-tool";

export default defineConfig({
  source: ["src", "addon"],
  dist: "build",
  assets: ["addon/**/*.*", "src/**/*.*"],
  assetsIgnore: ["src/**/*.ts"],
  placeholders: {
    addonName: "Test Addon for Zotero",
    addonDescription: "Test desc for Zotero",
    addonID: "addonID@northword.cn",
    addonInstance: "addonInstance",
    addonRef: "addonRef",
    prefsPrefix: "prefsPrefix",
    updateJSON:
      "https://raw.githubusercontent.com/northword/zotero-addon-test/main/update.json",
  },
});
