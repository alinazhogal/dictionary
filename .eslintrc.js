module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['import', 'react', 'react-hooks', '@typescript-eslint', 'prettier'],
	rules: {
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'@typescript-eslint/no-empty-function': 'off',
		'react/display-name': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'prettier/prettier': 'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'warn',
		'@typescript-eslint/no-unsafe-return': 'warn',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'@typescript-eslint/no-unsafe-return': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-console': [
			process.env.NODE_ENV === 'production' ? 'error' : 'warn',
			{ allow: ['warn', 'error'] },
		],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
		],
		'prefer-const': 'error',
		'react/destructuring-assignment': [
			'error',
			'always',
			{
				ignoreClassFields: true,
			},
		],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal'],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['react'],
			},
		],
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false,
			},
		],
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true, // always try to resolve types under <root>@types directory even it doesn't contain any source code, like @types/unist
			},
		},
	},
};
