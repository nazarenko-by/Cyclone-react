import { configureStore } from "@reduxjs/toolkit"
import baseReducer from "@/store/baseSlice"
import socialReducer from "@/store/socialSlice"

// Middleware to log errors during action dispatch
const errorLogger = (store) => (next) => (action) => {
	try {
		return next(action)
	} catch (error) {
		if (typeof window !== "undefined" && window.logError) {
			window.logError(error)
		} else {
			console.error("Error during action dispatch:", error)
		}
		throw error
	}
}

// Function to create and configure the Redux store
export const createStore = () =>
	configureStore({
		reducer: {
			base: baseReducer,
			social: socialReducer,
		},
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorLogger),
		devTools: process.env.NODE_ENV !== "production",
	})
