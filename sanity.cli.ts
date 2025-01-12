import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./lib/sanity/config";

export default defineCliConfig({
  api: {
    projectId: 'm787m7as',
    dataset: 'production'
  }
});
