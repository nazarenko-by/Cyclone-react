import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	likes: [],
	dislikes: [],
}

const socialSlice = createSlice({
	name: "social",
	initialState,
	reducers: {
		setLikeValue(state, action) {
			const { id } = action.payload
			if (state.likes.includes(id)) {
				state.likes = state.likes.filter((likeId) => likeId !== id)
			} else {
				state.likes.push(id)
			}
		},
		addDislike(state, action) {
			const { id } = action.payload
			state.dislikes.push(id)
		},
		removeDislike(state, action) {
			const { id } = action.payload
			state.dislikes = state.dislikes.filter((dislikeId) => dislikeId !== id)
		},
	},
})

export const { setLikeValue, addDislike, removeDislike } = socialSlice.actions
export default socialSlice.reducer
