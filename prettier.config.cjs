/** @type {import('prettier').Config & import('@trivago/prettier-plugin-sort-imports').PluginConfig & import('prettier-plugin-tailwindcss').options} */
module.exports = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],

  // Prettier
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,

  // Import sorting
  importOrder: [
    "^solid/(.*)$",
    "^@solid/(.*)$",
    "^@solid-start/(.*)$",
    "^~/(.*)$",
    "^~/(.css)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  // Tailwind
  tailwindAttributes: ["className", "class"],
  tailwindFunctions: ["clsx", "cn", "twMerge"],
  tailwindConfig: "./tailwind.config.ts",
};
