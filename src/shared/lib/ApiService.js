import axios from "axios"

const HTTP_STATUS = {
	NOT_FOUND: 404,
	UNAUTHORIZED: 401,
}

const getClearCacheHeader = (state) => {
	if (state) {
		return {
			"Access-Control-Allow-Origin": "*",
			"Cache-Control": "no-cache, no-store, must-revalidate",
			Pragma: "no-cache",
			Expires: "0",
		}
	}

	return {}
}
const getHeaders = (arrayOfHeaders) => {
	let headers = { ...getClearCacheHeader(window.this_cacheData) }
	if (arrayOfHeaders && arrayOfHeaders.includes("json")) {
		headers = { ...headers, "Content-Type": "application/json;charset=utf-8" }
	}
	if (arrayOfHeaders && arrayOfHeaders.includes("no-cache")) {
		headers = { ...headers, ...getClearCacheHeader(true) }
	}

	return headers
}
const prepareRequest = ({ method, url, params, headers, abortController, cache }) => {
	if (!cache) headers.push("no-cache")

	const request = {
		method: method,
		url: url,
		headers: getHeaders(headers),
	}
	if (method === "get") request.params = params
	if (method === "post" || method === "put" || method === "delete" || method === "patch") {
		request.data = JSON.stringify(params)
	}
	if (abortController) request.signal = abortController.signal
	return request
}

export const ApiService = {
	call: async function ({
		cache = true,
		url,
		params,
		headers,
		method = "get",
		callback,
		abortKey,
		defaultReturn = null,
	}) {
		const abortController = ApiService.abort.get(abortKey)

		const fullParams = JSON.stringify({ url, ...params })

		if (cache && !window.this_cacheData && ApiService.cache.is(fullParams)) {
			const cachedData = ApiService.cache.get(fullParams)
			return Promise.resolve(callback ? callback(cachedData, params) : cachedData)
		}

		try {
			const request = prepareRequest({ method, url, params, headers, abortController, cache })
			const response = await axios(request)
			ApiService.abort.clean(abortKey)
			ApiService.cache.set(fullParams, response.data)

			if (callback) return callback(response.data, params)
			return response.data
		} catch (e) {
			console.error(e)
			if (e.code === "ERR_CANCELED") {
				throw e
			} else {
				window.logError({
					...e,
					file: `ApiService::call -> ${e.config.url} with params ${JSON.stringify(e.config.params)}`,
				})
				ApiService.abort.clean(abortKey)
			}
			if (e.response.status === HTTP_STATUS.UNAUTHORIZED) {
				window.location.reload()
			}
			return defaultReturn
		}
	},
	multipleCall: async function ({ url, params, headers, method = "get", callback, allCallback, abortKey }) {
		try {
			const requests = params.map((opts) =>
				ApiService.call({ method, url, headers, params: opts, callback, allCallback, abortKey })
			)
			const response = await axios.all(requests)
			return allCallback ? allCallback(response) : response
		} catch (e) {
			window.logError({ ...e, file: "ApiService:multipleCall" })
			console.error(e)
			return null
		}
	},
	abort: {
		abortControllers: {},
		set: function (key) {
			if (!this.abortControllers[key]) this.abortControllers[key] = new AbortController()
		},
		clean: function (key) {
			this.abortControllers[key] = null
		},
		get: function (key) {
			if (!key) return null
			if (this.abortControllers[key]) {
				this.abortControllers[key].abort()
				this.abortControllers[key] = null
			}
			this.abortControllers[key] = new AbortController()
			return this.abortControllers[key]
		},
	},
	cache: {
		data: {},
		set: function (key, data) {
			if (!this.data) {
				this.data = {}
			}
			this.data[key] = JSON.stringify(data)
		},
		get: function (key) {
			return this.data && Object.prototype.hasOwnProperty.call(this.data, key) ? JSON.parse(this.data[key]) : null
		},
		clear: function (key) {
			if (key && this.data[key]) {
				this.data[key] = {}
			} else {
				this.data = {}
			}
		},
		is: function (key) {
			return this.data && Object.prototype.hasOwnProperty.call(this.data, key)
		},
	},
}
