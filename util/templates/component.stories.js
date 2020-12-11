module.exports = componentName => ({
	content: `// Generated with util/create-component.js
import React from 'react'
import ${componentName} from './${componentName}'

export default {
    title: '${componentName}'
};

export const WithBar = () => <${componentName} theme='primary' />

export const WithBaz = () => <${componentName} theme='secondary' />
`,
	extension: `.stories.tsx`,
})
