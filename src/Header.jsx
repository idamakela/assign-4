export default ({ title, icon, menu }) => {
    return (
        <header>
            <div className="container">
                <div className="icon">{icon}</div>
                <h1>{title}</h1>
            </div>
            <a href="https://www.figma.com/community/file/1209724056553648259" target="_blank" className="icon">{menu}</a>
        </header>
    )
};