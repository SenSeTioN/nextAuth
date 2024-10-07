/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		missingSuspenseWithCSRBailout: false
	},
	env: {
		SERVER_URL: process.env.SERVER_URL,
		GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
		ALLOW_ORIGIN_DOMAIN: process.env.ALLOW_ORIGIN_DOMAIN
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com'
			},
			{
				protocol: 'https',
				hostname: 'avatars.yandex.net'
			}
		]
	}
}

export default nextConfig
