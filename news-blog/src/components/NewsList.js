import { React } from "react";
import NewsItem from "./NewsItem";
import styled from "styled-components";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

const NewsList = ({ category }) => {
	const [loading, response, error] = usePromise(() => {
		const query = category === "all" ? "" : `&category=${category}`;
		return axios.get(
			`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c6b0ed1e9c7e40cc8c97036e73cd9076`
		);
	}, [category]);

	if (loading) {
		return <NewsListBlock>대기중</NewsListBlock>;
	}
	if (!response) {
		return null;
	}
	if (error) {
		return <NewsListBlock>error</NewsListBlock>;
	}
	console.log("데이터", response.data);
	const { articles } = response.data;

	return (
		<NewsListBlock>
			{articles.map((article) => (
				<NewsItem key={article.url} article={article} />
			))}
		</NewsListBlock>
	);
};

export default NewsList;

/*
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(false);
	const query = category === "all" ? "" : `&category=${category}`;

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c6b0ed1e9c7e40cc8c97036e73cd9076`
				);
				setArticles(response.data.articles);
			} catch (err) {
				console.log(err);
			}
			setLoading(false);
		};
		fetchData();
	}, [category]);
*/
