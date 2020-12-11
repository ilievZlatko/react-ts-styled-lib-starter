module.exports = componentName => ({
	content: `// Generated with util/create-component.js
export interface ${componentName}Props {
    theme: string
}
`,
	extension: `.types.ts`,
})
