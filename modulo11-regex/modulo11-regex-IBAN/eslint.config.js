import pluginJs from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		ignores: [
			'dist/**/*',
			'eslint.config.js',
			'commitlint.config.js',
			'vite.config.js',
		],
		settings: {
			//version: "detect",
			react: {
				version: '999.999.999',
				defaultVersion: '999.999.999',
			},
		},
		languageOptions: {
			globals: globals.browser,
			parser: typescriptParser,
			sourceType: 'module',
			parserOptions: {
				ecmaVersion: 'latest',
				project: ['tsconfig.json'],
				tsconfigRootDir: './',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			pluginReact,
			'@typescript-eslint': typescriptEslint,
		},
		rules: {
			// error prevention
			'array-callback-return': ['error', { checkForEach: true }],
			'no-await-in-loop': 'error',
			'no-constant-binary-expression': 'error',
			'no-constructor-return': 'error',
			'no-promise-executor-return': 'error',
			'no-self-compare': 'error',
			'no-template-curly-in-string': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-unreachable-loop': 'error',
			'no-unused-private-class-members': 'error',
			'no-control-regex': 'off',
			'no-use-before-define': [
				'error',
				{
					functions: false,
					classes: true,
					variables: true,
					allowNamedExports: false,
				},
			],
			'require-atomic-updates': 'error',
			// good practises
			eqeqeq: 'error',
			'no-console': 'warn',
			'no-else-return': ['error', { allowElseIf: false }],
			'no-extend-native': 'error',
			'no-lonely-if': 'error',
			'no-param-reassign': 'error',
			'no-unused-vars': 'off',
			'no-return-assign': 'error',
			'no-throw-literal': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'prefer-const': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			// react https://github.com/jsx-eslint/eslint-plugin-react/blob/master/README.md#list-of-supported-rules
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
			'react/react-in-jsx-scope': 'off',

			// style
			curly: 'error',
			'lines-between-class-members': [
				'error',
				'always',
				{ exceptAfterSingleLine: true },
			],
			'padding-line-between-statements': [
				'error',
				{ blankLine: 'always', prev: '*', next: 'return' },
			],

			// plugins
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-explicit-any': ['warn'],
			'@typescript-eslint/no-confusing-non-null-assertion': ['error'],
			'@typescript-eslint/no-extra-non-null-assertion': ['error'],
			'@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
			'@typescript-eslint/no-non-null-assertion': ['error'],
			'@typescript-eslint/no-require-imports': ['error'],
			'@typescript-eslint/no-useless-constructor': ['error'],
			'@typescript-eslint/prefer-for-of': ['error'],
			'@typescript-eslint/no-inferrable-types': 'error',
			'@typescript-eslint/no-confusing-void-expression': [
				'error',
				{ ignoreArrowShorthand: true },
			],
			'@typescript-eslint/no-floating-promises': ['error'],
			'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
			'@typescript-eslint/no-unnecessary-condition': ['error'],
			'@typescript-eslint/prefer-nullish-coalescing': ['error'],
			'@typescript-eslint/prefer-readonly': ['error'],
			'@typescript-eslint/promise-function-async': [
				'error',
				{ checkArrowFunctions: false },
			],
			'@typescript-eslint/switch-exhaustiveness-check': ['error'],
		},
	},
	eslintPluginPrettierRecommended,
];
