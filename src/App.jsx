import { useState, useEffect } from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx'
import Object from './Object.jsx';

function App() {
    const API = 'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=19/';
    const API_OBJECT = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/260067'
    
    //first fetch API then randomise a number and feth the random number (aka index in the data) obejctId, then fetch the objects 


    const apiObject = (arr) => {
        return Math.floor(Math.random() * arr.length)
    }
    const [objects, setObject] = useState([]);

    useEffect(() => {
        fetch(API_OBJECT)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                
                setObject(data)
            })
    }, []);

    return (
        <>
        <Header title={'Title'} subtitle={'Subtitle'} />

        <main> 
            {/* the below should return ALL, it should only return 10 objects at a time
            {
                objects.map((object) => { */}
                    <Object key={data.objectID} {...data} />
                {/* })

            } */}
        </main>

        <Footer />
        </>

    )
}

export default App
