const isProd = process.env.NODE_ENV === 'production'

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // providerImportSource: '@mdx-js/react'
  }
})
/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: isProd ? '/log' : '',
  assetPrefix: isProd ? '/log/' : '',
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
}

module.exports = withMDX(nextConfig)
