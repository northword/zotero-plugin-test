import { Config, Build } from "zotero-plugin-dev-tool";

const config = await Config.loadConfig();

const Builder = new Build(config);
Builder.run();
// Builder.logger.debug("111111111");
// Builder.logger.error("111111111");
// console.warn("warn");
// console.error("error");
// console.info("info");
