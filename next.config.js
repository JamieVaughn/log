const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: isProd ? '/log' : '',
  assetPrefix: isProd ? '/log/' : '',
}

module.exports = nextConfig
