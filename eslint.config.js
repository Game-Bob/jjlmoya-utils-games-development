import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import noComments from "eslint-plugin-no-comments";

const customCommentsPlugin = {
    rules: {
        "no-html-comments": {
            meta: { type: "layout", fixable: "whitespace" },
            create(context) {
                return {
                    Program() {
                        const sourceCode = context.sourceCode;
                        const text = sourceCode.getText();
                        const regex = new RegExp("<!--[\\s\\S]*?-->", "g");
                        let match;
                        while ((match = regex.exec(text)) !== null) {
                            context.report({
                                loc: sourceCode.getLocFromIndex(match.index),
                                message: "HTML comments are forbidden.",
                                fix(fixer) {
                                    return fixer.removeRange([match.index, match.index + match[0].length]);
                                },
                            });
                        }
                    },
                };
            },
        },
        "no-css-comments": {
            meta: { type: "layout", fixable: "whitespace" },
            create(context) {
                return {
                    Program() {
                        const sourceCode = context.sourceCode;
                        const text = sourceCode.getText();
                        const regex = new RegExp("/\\*[\\s\\S]*?\\*/", "g");
                        let match;
                        while ((match = regex.exec(text)) !== null) {
                            context.report({
                                loc: sourceCode.getLocFromIndex(match.index),
                                message: "CSS/Block comments are forbidden.",
                                fix(fixer) {
                                    return fixer.removeRange([match.index, match.index + match[0].length]);
                                },
                            });
                        }
                    },
                };
            },
        },
        "no-emojis": {
            meta: { type: "layout", fixable: false },
            create(context) {
                return {
                    Program() {
                        const sourceCode = context.sourceCode;
                        const text = sourceCode.getText();
                        const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{27BF}]|[\u{1F680}-\u{1F6FF}]/gu;
                        let match;
                        while ((match = emojiRegex.exec(text)) !== null) {
                            context.report({
                                loc: sourceCode.getLocFromIndex(match.index),
                                message: "Emojis are not allowed in code.",
                            });
                        }
                    },
                };
            },
        },
        "single-font-load": {
            meta: { type: "suggestion", fixable: false },
            create(context) {
                return {
                    Program() {
                        const sourceCode = context.sourceCode;
                        const filename = context.filename;
                        const isPreviewLayout = filename.includes("PreviewLayout.astro");
                        const text = sourceCode.getText();
                        const fontPatterns = [
                            /fonts\.googleapis\.com/g,
                            /@font-face\s*\{/g,
                            /family:\s*['"](Inter|inter)['"]/g,
                        ];
                        if (!isPreviewLayout) {
                            fontPatterns.forEach((pattern) => {
                                let match;
                                while ((match = pattern.exec(text)) !== null) {
                                    context.report({
                                        loc: sourceCode.getLocFromIndex(match.index),
                                        message: "Fonts must be loaded only in PreviewLayout.astro. Do not declare fonts in other files.",
                                    });
                                }
                            });
                        }
                    },
                };
            },
        },
    },
};

export default [
    {
        ignores: ["**/dist/", "**/node_modules/", ".astro/", "**/.astro/**", "**/public/**"],
    },
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs["flat/recommended"],

    {
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.mjs", "**/*.astro"],
        plugins: { "no-comments": noComments, "custom": customCommentsPlugin },
        rules: {
            "custom/no-emojis": "error",
            "custom/single-font-load": "error",
            "no-comments/disallowComments": "error",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/consistent-type-imports": "error",

            "complexity": ["error", { max: 8 }],
            "max-lines": ["error", { max: 250, skipBlankLines: true, skipComments: true }],
            "max-lines-per-function": ["error", { max: 30, skipBlankLines: true, skipComments: true }],
            "max-depth": ["error", 3],
            "max-params": ["error", 4],
            "no-nested-ternary": "error",
            "no-unneeded-ternary": "error",
        },
    },

    {
        files: ["**/*.astro", "**/*.html"],
        plugins: { custom: customCommentsPlugin },
        rules: { "custom/no-html-comments": "error" },
    },

    {
        files: ["**/*.astro"],
        plugins: { custom: customCommentsPlugin },
        rules: {
            "custom/no-css-comments": "error",
            "custom/single-font-load": "error",
            "max-lines": ["error", { max: 250, skipBlankLines: true, skipComments: true }],
        },
    },

    {
        files: ["**/SEORenderer.astro"],
        rules: {
            "max-lines-per-function": "off",
            "complexity": "off",
        },
    },
    {
        files: ["**/i18n/*.ts"],
        rules: {
            "max-lines": "off",
        },
    },
    {
        files: ["**/pages/**/*.astro"],
        rules: {
            "max-lines-per-function": ["error", { max: 50, skipBlankLines: true, skipComments: true }],
            "complexity": "off",
            "no-comments/disallowComments": "off",
        },
    },
    {
        files: ["**/tests/**/*.ts", "**/*.test.ts"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "max-lines-per-function": "off",
            "max-lines": "off",
        },
    },
    {
        files: ["**/*seo.astro"],
        rules: {
            "max-lines-per-function": "off",
            "complexity": "off",
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
    {
        files: ["**/i18n/**/*.ts", "**/app.ts"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "max-params": "off",
            "max-lines": "off",
            "max-lines-per-function": "off",
        },
    },
    {
        files: ["**/tool/**/component.astro"],
        rules: {
            "max-lines": "off",
            "max-lines-per-function": "off",
            "complexity": "off",
        },
    },
];

