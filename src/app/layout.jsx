import { Providers } from "@/store/Providers"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

import localFont from "next/font/local"
import "@/styles/reset.css"
import "@/styles/globals.scss"

const prozaLibre = localFont({
	src: "../styles/fonts/ProzaLibre-Regular.ttf",
})

export const metadata = {
	title: "Cyclone",
	description: "Cyclone web application",
	icons: {
		icon: "/favicon.ico",
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${prozaLibre.className}`}>
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
