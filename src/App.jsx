import { useState, useEffect } from 'react'
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
            {articles.map((article) => {
                <ArticleComp key={aricle.id} {...currentData}></ArticleComp>
            })
            }
        </main>

        <Footer />
        </>

    )
}

export default App
