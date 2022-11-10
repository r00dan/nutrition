module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module-resolver", {
      "alias": {
        "@components": "./src/components",
        "@screens": "./src/screens",
        "@hooks": "./src/hooks",
      },
      "extensions": [
        ".ts",
        ".tsx"
      ]
    }]
    ]
  };
};
