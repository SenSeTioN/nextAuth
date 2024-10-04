import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { ToggleTheme } from '@/shared/components/ui'
import { MainProvider } from '@/shared/providers'
import '@/shared/styles/globals.css'

export const metadata: Metadata = {
	title: {
		absolute: 'Авторизация',
		template: '%s | Авторизация'
	},
	description:
		'Это учебный проект, созданный для демонстрации полного цикла авторизации пользователей'
}

const geistSans = localFont({
	src: '../shared/assets/fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
})
const geistMono = localFont({
	src: '../shared/assets/fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<MainProvider>
					<div className='relative flex min-h-screen flex-col'>
						<ToggleTheme />
						<div className='flex h-screen w-full items-center justify-center px-4'>
							{children}
						</div>
					</div>
				</MainProvider>
			</body>
		</html>
	)
}
