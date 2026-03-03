import { Proza_Libre, Cormorant_Garamond } from "next/font/google"

export const prozaLibre = Proza_Libre({
	weight: ["400"],
	subsets: ["latin"],
})

export const prozaLibreBold = Proza_Libre({
	weight: ["700"],
	subsets: ["latin"],
})

export const cormorant = Cormorant_Garamond({
	weight: "500",
	subsets: ["latin"],
})

export const cormorantBold = Cormorant_Garamond({
	weight: "700",
	subsets: ["latin"],
})

export const cormorantThin = Cormorant_Garamond({
	weight: "400",
	subsets: ["latin"],
})

export const cormorantItalic = Cormorant_Garamond({
	weight: ["600"],
	subsets: ["latin"],
	style: ["italic"],
})

export const cormorantBoldItalic = Cormorant_Garamond({
	weight: "700",
	style: ["italic"],
	subsets: ["latin"],
})
