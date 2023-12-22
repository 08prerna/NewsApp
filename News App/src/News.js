export default function News(props) {
    return(

        <article>
            <figure><img src={props.article.urlToImage}/></figure>
            
            <div className="article-preview">
                <h2>{props.article.title}</h2>
                <p>{props.article.description?.concat("....")}<a href={props.article.url} target="_blank">Read More</a></p>
                <div className="source">
                    <p className="author">Author : {props.article.author}</p>
                    <p className="src-name">{props.article.source.name}</p>
                </div>
                
            </div>
        </article>










        // <div className="news">
        //     <div className="news-img">
        //         <img src={props.article.urlToImage}/>
        //     </div>
            
        //     <h1>{props.article.title}</h1>

        //     <p>{props.article.description?.concat("....")}<a href={props.article.url} target="_blank">Read More</a></p>

        
        //     <div className="source">
        //         <p className="author">Author : {props.article.author}</p>
        //         <p className="src-name">{props.article.source.name}</p>
        //     </div>
        // </div>
    )
}