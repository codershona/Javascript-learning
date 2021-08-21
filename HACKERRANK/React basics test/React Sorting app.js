// React Sorting App

SOLUTION:
// Articles.js

import React from 'react';

const Articles= ({articles}) => {

    return (
            <div className="card w-50 mx-auto">
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Upvotes</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {articles.map((article,index) => {
                        return (
                        <tr data-testid="article" key={index}>
                            <td data-testid="article-title">{article.title}</td>
                            <td data-testid="article-upvotes">{article.upvotes}</td>
                            <td data-testid="article-date">{article.date}</td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>  
        )

}

export default Articles;



// App.js 
import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

const App= ({articles}) => {

    const sortedByUpvotes= articles.sort((a,b)=>b.upvotes-a.upvotes)

    const [updatedArticles, modifyArticles]= useState(sortedByUpvotes)

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" onClick={()=>modifyArticles(articles.slice().sort((a,b)=>b.upvotes-a.upvotes))} className="small">Most Upvoted</button>
                <button data-testid="most-recent-link" onClick={()=>modifyArticles(articles.slice().sort((a,b)=>new Date(b.date) - new Date(a.date)))} className="small">Most Recent</button>
            </div>
            <Articles articles={updatedArticles}/>
        </div>
    );

}

export default App;