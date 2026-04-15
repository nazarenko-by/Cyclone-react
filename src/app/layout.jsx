import { Providers } from "@/store/Providers"
import Header from "@/features/ui/Header"
import Footer from "@/features/ui/Footer"
import Preloader from "@/features/ui/Preloader/Preloader"

import { prozaLibre } from "@/shared/helpers/fonts"

import "@/styles/reset.css"
import "@/styles/globals.scss"
import { assetPath } from "@/shared/helpers/assetPath"

export const metadata = {
	title: "Cyclone",
	description: "Cyclone web application",
	icons: {
		icon: assetPath("/favicon.ico"),
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${prozaLibre.className}`}>
				<Providers>
					<Preloader />
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
