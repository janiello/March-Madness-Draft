import React, { Component } from 'react';
import API from "../utils/API";
import "./css/style.css";

class News extends Component {
    state ={
        news: []
    }
    componentDidMount(){
        this.news()
    };
    news = () => {
        API.getVideoRules()
            .then(res => {
                this.setState({news: res.data})})
                .catch(error => console.log (error));
                    }
  
    render(){
        return(
            <React.Fragment>
                <div className="newsPage">
                {this.state.news.map( (articles, a, e ,i, o, u) =>(
                    <div key={a} className="articles">
                  <a className="aLink" key={e} href={articles.link}> 
                       <img className="aImg" key={i} alt="img.article" src={articles.img} />
                    <h1 key={o} className="aHeadLine">{articles.headline}</h1></a>
                    <p className="aP" key={u}>{articles.article.fulltext}</p>
                  
                    </div>
                ))}
                </div>
            </React.Fragment>
        )
    }

}
export default News;