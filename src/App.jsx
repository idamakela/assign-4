import { useState, useEffect } from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx'

function App() {
    const [object, setObject] = useState([]);

    useEffect(() => {
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/67870')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
            })
    }, []);

    return (
        <>
        <Header title={'Title'} subtitle={'Subtitle'} />

        <main>
            <div className="objectContainer">
                <div className="imgContainer">
                    <img src="./" alt="pic" />
                </div>
                <div className="textContainer">
                    <h3 className="artist"></h3>
                    <h2 className="artPiece"></h2>
                    <p className="desc"></p>
                    <button className="link">Link</button>
                </div>
            </div>

        </main>

        <Footer />
        </>

    )
}

export default App
