export default ({ title: primaryImage, artistDisplayName, title, objectDate, medium, objectURL, artistWikidata_URL }) => {   
    return (
        <div className="objectContainer">
            <div className="imgContainer">
                <img src={primaryImage} alt="pic" width="400px" height="400px"/>
            </div>
            <div className="textContainer">
                <h3 className="artist">{artistDisplayName}</h3>
                <h2 className="artPiece">{title}</h2>

                <p className="desc">
                    {`${objectDate} - ${medium}`}
                </p>

                <div className="linkContainer">
                    <a href={objectURL} target="_blank">object</a>
                    <a href={artistWikidata_URL} target="_blank">artist</a>
                </div>
            </div>
        </div>
    )
}