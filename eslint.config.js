// ESLint Flat Config migrated from .eslintrc.json
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      semi: 'off', // permite código sem ponto e vírgula
      quotes: ['error', 'single', { avoidEscape: true }], // força aspas simples, exceto quando precisar escapar
      'object-curly-spacing': ['error', 'always'], // exige espaço dentro de chaves { foo: bar }
      'template-curly-spacing': ['error', 'never'], // não permite espaço em ${foo}
      'eol-last': ['error', 'always'], // exige uma linha em branco no final do arquivo
      'no-trailing-spaces': 'error', // não permite espaços em branco no fim da linha
      'no-multiple-empty-lines': ['error', { max: 1 }], // permite no máximo 1 linha vazia consecutiva
      'space-before-function-paren': ['error', 'never'], // não permite espaço antes de parênteses em funções (function foo())
      'keyword-spacing': ['error', { before: true, after: true }], // exige espaço antes/depois de palavras-chave (if, else, for)
      'space-before-blocks': ['error', 'always'], // exige espaço antes de abrir um bloco { }
      'arrow-spacing': ['error', { before: true, after: true }], // exige espaço antes/depois de => em arrow functions
      'arrow-parens': ['error', 'always'], // exige parênteses mesmo quando há um arg
      'comma-dangle': ['error', 'always-multiline'], // exige vírgula final em objetos/arrays multilinha
      curly: ['error', 'all'], // exige uso de chaves em if/else/while, mesmo em blocos de uma linha
      eqeqeq: ['error', 'always'], // força uso de === e !== em vez de == e !=
      'prefer-template': 'error', // obriga uso de template strings em vez de concatenação com +

      // TypeScript
      '@typescript-eslint/no-unused-vars': ['error'], // impede variáveis declaradas e não utilizadas
      '@typescript-eslint/explicit-function-return-type': 'off', // não obriga a declarar o tipo de retorno das funções
      '@typescript-eslint/no-explicit-any': 'warn', // alerta quando usar tipo any
    },
  },
];
