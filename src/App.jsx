import { useState, useEffect } from 'react'
import { Bars } from 'react-loader-spinner'
import Header from './Header.jsx';
import Footer from './Footer.jsx'
import ArticleComp from './Article.jsx';

function App() {
    const API = 'https://api.spaceflightnewsapi.net/v3/articles';
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setArticles(data)
            })
            .catch((error) => console.error(error))
    }, []);

    return (
        <>
        <Header title={'Title'} subtitle={'Subtitle'} />

        <main> 
            {isLoading ?
            <Bars /> :
            articles.map((article) => {
                return <ArticleComp key={article.id} {...article}></ArticleComp>
            })}
        </main>

        <Footer />
        </>

    )
}

export default App
