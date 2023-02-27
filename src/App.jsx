import { useState, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import { FaFigma, FaInfoCircle } from 'react-icons/fa';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ArticleComp from './Article.jsx';

function App() {
    const API = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true';
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(API)
            .then((response) => {
                if(!response.ok) {
                    throw new Error(response.status);
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                console.log(data.data)

                setIsLoading(false);
                setArticles(data.data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
        <Header icon={<FaInfoCircle />} title={'ValorantAgents'} menu={<FaFigma />}/>
        <main> 
            {isLoading ?
            <Bars /> :
            articles.map((article) => {
                return <ArticleComp key={article.displayName} {...article} />
            })}
        </main>
        <Footer />
        </>
    )
}

export default App
