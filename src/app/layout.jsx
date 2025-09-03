import { Proza_Libre } from "next/font/google"

import { Providers } from "@/store/Providers"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

import "@/styles/reset.css"
import "@/styles/globals.scss"

const prozaLibre = Proza_Libre({
	weight: ["400", "700"],
	subsets: ["latin"],
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
