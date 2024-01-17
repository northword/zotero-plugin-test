import { Config, Build } from "zotero-plugin-dev-tool";

const config = await Config.loadConfig();

const Builder = new Build(config, "production");
Builder.run();
