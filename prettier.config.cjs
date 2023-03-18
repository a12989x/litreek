/** @type {import("prettier").Config} */
/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
  ],
  endOfLine: 'lf',
  jsxSingleQuote: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^~/types/(.*)$',
    '^~/schemas/(.*)$',
    '^~/env/(.*)$',
    '^~/data/(.*)$',
    '^~/server/(.*)$',
    '^~/lib/(.*)$',
    '^~/utils/(.*)$',
    '^~/helpers/(.*)$',
    '^~/components/(.*)$',
    '^~/styles/(.*)$',
    '',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
};

module.exports = config;
