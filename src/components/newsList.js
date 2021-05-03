import React from "react";
import Loading from "./loader.js";
import './newsList.css';
import NoResults from '../no-results.gif'


export default function NewsList({news, isLoading}) {
    
    return isLoading ? (   
        <Loading />
        ) : (           
            <ol>
                {news.length !== 0 ? (news.map((newItem) =>(
                    
                    <li key={newItem.objectID}>
                        <div className="front-title">
                            <a href={newItem.url} target='_blank' rel="noreferrer" >  
                            <p className="item-title">{newItem.title}</p> 
                            </a>
                            <span className="sourceFilter">
                                (<a href={newItem.url}>web filter</a>)                    
                            </span>
                        </div>                        
                        <span className="under-title"> 
                            {newItem.points} points 
                            by {newItem.author} 
                            X hours ago 
                            | hide |  
                             {newItem.num_comments} comments 
                        </span>                                       
                    </li> 
                ))
                ):
                ( <img src={NoResults} alt='loading' className="no-match" /> )
                }
            
            </ol>   
            )
}




