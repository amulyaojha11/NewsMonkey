import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {     
        let {title, description, imageUrl, url} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl?imageUrl:"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
