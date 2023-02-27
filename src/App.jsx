import { useState, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import { FaFigma, FaSplotch } from 'react-icons/fa';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ArticleComp from './Article.jsx';

function App() {
    const API = 'https://api.spaceflightnewsapi.net/v3/articles';
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
                setIsLoading(false);
                setArticles(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
        <Header icon={<FaSplotch />} title={'SpaceNews'} menu={<FaFigma />}/>
        <main> 
            {isLoading ?
            <Bars /> :
            articles.map((article) => {
                return <ArticleComp key={article.id} {...article} />
            })}
        </main>
        <Footer />
        </>
    )
}

export default App
