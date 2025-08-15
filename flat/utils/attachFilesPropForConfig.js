/** @type {(configs: unknown[], files: string[]) => unknown[])} */
module.exports = function attachFilesPropForConfig(configs, files) {
  return configs.map((config) => ({
    ...config,
    files: Array.isArray(config.files) ? [...config.files, ...files] : files,
  }));
};
