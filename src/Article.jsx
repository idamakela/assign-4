import {format} from 'date-fns';

export default ({ imageUrl, publishedAt, title, summary, url }) => {    
    const date = format(new Date(publishedAt), 'yyyy-MM-dd H:m');
    
    return (
        <div className="article-container">
            <div className="img-container">
                <img src={imageUrl} alt="" width="400px" height="300px" />
            </div>
            <div className="text-container">
                <p className="date">{date}</p>
                <h2>{title}</h2>
                <p className="summary">{summary}</p>
                <div className="btn">
                    <a href={url} target="_blank">Read article</a >
                </div>
            </div>
        </div>
    )
}