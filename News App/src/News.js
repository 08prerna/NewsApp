export default function News(props) {
    return(

        <article>
            <figure>
                {
                    props.article.urlToImage!==null?
                    <img src={props.article.urlToImage}/>:
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637"/>

                }
            </figure>
            
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