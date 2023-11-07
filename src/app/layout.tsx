import type { Metadata } from 'next'
import './globals.scss'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
	title: 'Zernova',
	description: 'Coffee online shop'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ua">
			<body>
				<div className="wrapper">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
