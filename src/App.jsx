import { useState, useEffect } from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx'

function App() {
    const [object, setObject] = useState([]);

    useEffect(() => {
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
        
    });

    return (
        <>
        <Header title={'Title'} subtitle={'Subtitle'} />

        <main>
            main element
        </main>

        <Footer />
        </>

    )
}

export default App
