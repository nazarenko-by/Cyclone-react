import ArticlePage from "@/features/articles/components/ArticlePage"

export async function generateStaticParams() {
	const articles = await fetch("https://raw.githubusercontent.com/nazarenko-by/Cyclone-react/data/topics.json").then(
		(res) => res.json()
	)

	return articles.map((article) => ({
		id: article.id.toString(),
	}))
}

export default function Page({ params }) {
	return <ArticlePage params={params} />
}
