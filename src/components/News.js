import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=18caf9e32ea447948edbf209ad649211&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }
    handlePrev = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=18caf9e32ea447948edbf209ad649211&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
                articles: parsedData.articles,
                page: this.state.page - 1
            })
    }
    handleNext = async() => {
        if(this.state.page+1>Math.ceil(this.state.totalResults/20))
        {

        }
        else
        {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=18caf9e32ea447948edbf209ad649211&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1
            })
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h1>NewsMonkey - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} url={element.url}/>
                    </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
