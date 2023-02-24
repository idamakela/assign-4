import { useState } from 'react'
import { FaDiceD20 } from 'react-icons/fa' //<FaDice20 /> to use in return html
import Header from './Header.jsx';
import Footer from './Footer.jsx'
import './App.css'

function App() {

  return (
    <>
    <Header title={'DnD wiki'} subtitle={'What do I cast?'} />

    <main>
        <div className="search-field">

            {/* classtag for select class  */}

            {/* leveltag for select level */}
        </div>

        <div className="button-container">
            <button className="search">Cast spell</button>
            <button className="randomize">Randomize</button>
        </div>

        <div className="spell-result">
            <h2 className="name"></h2>
            <div className="first box"></div>
            <div className="second box"></div>
            <div className="third box"></div>
        </div>
    </main>

    <Footer />
    </>

  )
}

export default App
