module.exports = {
    presets: ['next/babel'],
    // prettier-ignore
    plugins: [
        ['styled-components', { "ssr": true }],
        "inline-react-svg"
    ]
}
