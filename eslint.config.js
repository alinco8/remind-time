import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import prettierConfig from 'eslint-config-prettier';

import importPlugin from 'eslint-plugin-import';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

const compat = new FlatCompat();

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...compat.config({
        extends: ['plugin:eslint-plugin-react/all'],
    }),
    {
        extends: [...compat.config(reactHooksPlugin.configs.recommended)],
    },
    prettierConfig,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
        },
        ignores: ['dist', 'eslint.config.js'],
        plugins: {
            'react-refresh': reactRefreshPlugin,
            import: importPlugin,
        },
        rules: {
            'react-refresh/only-export-components': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': 'off',
            'react/jsx-one-expression-per-line': 'off',
            'react/function-component-definition': 'off',
            'react/jsx-newline': 'off',
            'react/jsx-max-props-per-line': 'off',
            'react/jsx-sort-props': 'off',
            'react/jsx-no-bind': 'off',
            'react/jsx-no-literals': 'off',
            'react/jsx-max-depth': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/forbid-component-props': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'no-mixed-spaces-and-tabs': 'off',
            'react/jsx-indent': 'off',
        },
    },
);
