import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	likes: [],
	dislikes: [],
}

const likeSlice = createSlice({
	name: "like",
	initialState,
	reducers: {
		addLike(state, action) {
			const { id } = action.payload
			state.likes.push(id)
		},
		removeLike(state, action) {
			const { id } = action.payload
			state.likes = state.likes.filter((likeId) => likeId !== id)
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

export const { addLike, removeLike, addDislike, removeDislike } = likeSlice.actions
export default likeSlice.reducer
