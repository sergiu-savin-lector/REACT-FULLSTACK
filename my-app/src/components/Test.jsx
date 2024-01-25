import { Component } from "react";
import ArticleList from "./ArticleList";
import ErrorAlert from "./common/ErrorAlert/ErrorAlert";
import newsService from "../service/newsService";

export default class Test extends Component {
    state = {
        articles: [],
        isLoading: false,
        error: ''
    }

    async retriveArticles() {
        try {
            this.setState({ isLoading: true })
            const response = await newsService.retreiveArticles();
            this.setState({ articles: response.data.hits })
        } catch (error) {
            switch (error.code) {
                case "ERR_BAD_REQUEST":
                    this.setState({ error: 'Nu a fost gasit rezultatul' });
                    break;
                default:
                    this.setState({ error: 'A aparut o eroare.' })
            }
        } finally {
            this.setState({ isLoading: false })
        }
    }

    async componentDidMount() {
        this.retriveArticles();
    }

    render() {
        const { articles, isLoading, error } = this.state;

        if (isLoading) {
            return <p> Astept dupa rezultate</p>;
        }

        return (
            <>
                {error?.length > 0 && <ErrorAlert errors={error}/>}
                {articles.length > 0 ? <ArticleList articles={articles} /> : null}
            </>
        )
    }
}