import { getTopics } from "@/models"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
	articles: [],
	events: [],
	topics: [],
	topicsTimestamp: null,
	preloader: true,
	loader: false,
}

const baseSlice = createSlice({
	name: "base",
	initialState,
	reducers: {
		setBaseState(state, action) {
			const { key, value } = action.payload
			state[key] = value
		},
		setLoader(state, action) {
			state.loader = action.payload
			state.preloader = false
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			({ type }) => type === "base/fetchTopics/fulfilled" || type === "base/fetchTopics/rejected",
			(state, action) => {
				const { data, timestamp } = action.payload
				if (timestamp >= state.topicsTimestamp) {
					state.topics = data
					state.topicsTimestamp = timestamp
					state.preloader = false
					state.loader = false
				}
			}
		)
	},
})

export const fetchTopics = createAsyncThunk("base/fetchTopics", async function (params, { rejectWithValue }) {
	try {
		const topics = await getTopics()
		return { data: topics, timestamp: Date.now() }
	} catch (error) {
		console.error(error)
		return rejectWithValue({ data: [], timestamp: Date.now() })
	}
})

export const { setBaseState, setLoader } = baseSlice.actions
export default baseSlice.reducer
