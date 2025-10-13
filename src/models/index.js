import { ApiService } from "@/models/ApiService"

const urls = {
	topics: "https://raw.githubusercontent.com/nazarenko-by/Cyclone-react/data/topics.json",
}
export const getTopics = async () => {
	return ApiService.call({
		method: "get",
		url: urls.topics,
	})
}
