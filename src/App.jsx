import { useState } from 'react'
import { FaDiceD20 } from 'react-icons/fa' //<FaDice20 /> to use in return html
import Header from './Header.jsx';
import Footer from './Footer.jsx'

function App() {

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
