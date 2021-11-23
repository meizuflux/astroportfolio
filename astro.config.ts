import astroRemark from '@astrojs/markdown-remark';

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
    buildOptions: {
        site: "https://meizuflux.com",
        pageUrlFormat: 'file'
    },
    renderers: ['@astrojs/renderer-preact'],
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
});
