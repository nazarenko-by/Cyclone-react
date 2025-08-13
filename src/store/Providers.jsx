"use client"

import { Provider } from "react-redux"
import { createStore } from "@/store"

export function Providers({ children }) {
	const store = createStore()
	return <Provider store={store}>{children}</Provider>
}
