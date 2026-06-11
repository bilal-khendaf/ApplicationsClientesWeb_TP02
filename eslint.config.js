import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginVuejsAccessibility from 'eslint-plugin-vuejs-accessibility';
import babelParser from '@babel/eslint-parser';
import vueParser from 'vue-eslint-parser';
import globals from 'globals';
import pluginImport from 'eslint-plugin-import';

export default [
    js.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        ignores: ['dist/**', 'node_modules/**'],
    },
    {
        files: ['**/*.js', '**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: babelParser,
                requireConfigFile: false,
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            'vuejs-accessibility': pluginVuejsAccessibility,
            'import': pluginImport,
        },
        rules: {
            'no-console': 'warn',
            'no-debugger': 'warn',
            'no-alert': 'warn',
            indent: ['warn', 4],
            'vuejs-accessibility/form-control-has-label': ['off'],
            'vuejs-accessibility/label-has-for': ['off'],
            'vuejs-accessibility/media-has-caption': ['off'],
            'func-names': ['off'],
            'linebreak-style': 0,
            'import/prefer-default-export': 'off',
            'import/no-unresolved': 'off',
        },
    },
];

