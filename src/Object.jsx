export default ({object: artistDisplayName, medium, objectDate, title, artistDisplayBio}) => {   
    return (
        <div className="objectContainer">
            <div className="imgContainer">
                <img src={primaryImg} alt="pic"/>
            </div>
            <div className="textContainer">
                <h3 className="artist">{artistDisplayName}</h3>
                <h2 className="artPiece">{title}</h2>

                <p className="desc">{`
                        Medium: ${medium}
                        Date: ${objectDate}
                        Bio: ${artistDisplayBio}
                    `}
                </p>

                <div className="btnContainer">
                    <button className="link" onClick={() => {
                        // artistDisplayBio: link to artist, open in new window
                    }}>artist</button>
                    <button className="link" onClick={() => {
                        // objectURL: link to object, open in new window
                    }}>object</button>
                </div>
            </div>
        </div>
    )
}