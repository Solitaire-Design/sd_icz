import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'no-console': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'antfu/no-import-dist': 'off',
  },
})
