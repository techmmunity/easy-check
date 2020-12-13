module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "module-resolver",
      {
        alias: {
          checks: "./src/checks",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
