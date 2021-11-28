import astroRemark from '@astrojs/markdown-remark';
import WindiCSS from "vite-plugin-windicss"

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
    buildOptions: {
        site: "https://meizuflux.com",
        pageUrlFormat: 'file'
    },
    renderers: [],
    markdownOptions: {
        render: [
            astroRemark, {
                remarkPlugins: ["remark-gfm"],
                rehypePlugins: [
                    ['rehype-autolink-headings', { behavior: 'prepend' }],
                ],
            },
        ],
    },
    devOptions: {
        trailingSlash: "ignore"
    },
    vite: {
        plugins: [
            WindiCSS()
        ]
    }
});
