export default ({ fullPortrait, developerName, displayName, description }) => {    
    const agentInfo = displayName.toLowerCase();

    return (
        <div className="article-container">
            <div className="img-container">
                <img src={fullPortrait} alt="" width="400px" height="300px" />
            </div>
            <div className="text-container">
                <p className="date">Dev: {developerName}</p>
                <h2>{displayName}</h2>
                <p className="summary">{description}</p>
                <div className="btn">
                    <a href={'https://playvalorant.com/en-us/agents/' + {agentInfo}} target="_blank">Read more</a >
                </div>
            </div>
        </div>
    )
}