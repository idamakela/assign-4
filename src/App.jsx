import { useState, useEffect } from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx'
import Object from './Object.jsx';

function App() {
    // API info: https://metmuseum.github.io/
    const API = 'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=19/';
    const API_OBJECT = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
    
    //first fetch API then randomise a number and feth the random number (aka index in the data) obejctId, then fetch the objects 
    const [currentData, setData] = useState();
    const [object, setObjects] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const apiObject = (arr) => {
                    return Math.floor(Math.random() * arr.length)
                }
                setData(data.objectIDs[apiObject(data.objectIDs)])
                console.log(data)
                console.log(currentData);
                

                //fetch object 
                // fetch(API_OBJECT + currentData)
                // .then((response) => response.json())
                // .then((data) => {
                //     console.log(data);
                //     setObjects(data);
                // })
                // .catch((error) => console.error(error))
            })
            .catch((error) => console.error(error))
    }, []);

    console.log(currentData);
    // console.log(API_OBJECT + currentData)

    return (
        <>
        <Header title={'Title'} subtitle={'Subtitle'} />

        <main> 
            <Object key={currentData} {...currentData}></Object>
        </main>

        <Footer />
        </>

    )
}

export default App
