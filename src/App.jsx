import { useState } from 'react'
import { FaDiceD20 } from 'react-icons/fa' //<FaDice20 /> to use in return html
import Header from './Header.jsx'
import './App.css'

function App() {

  return (
    <>
    <Header title={'DnD wiki'} subtitle={'What do I cast?'} />

    <main>
        <div class="search-field">
            <label for="class">I am a</label>
            <select name="class" id="class">
                <option value="none" selected disabled hidden>class</option>
                <option value="bard">bard</option>
                <option value="cleric">cleric</option>
                <option value="druid">druid</option>
                <option value="paladin">paladin</option>
                <option value="sorcerer">sorcerer</option>
                <option value="wizard">wizard</option>
                <option value="warlock">warlock</option>
            </select>
            <label for="level">and I want cast something at spell level </label>
            <select name="level" id="level">
                <option value="none" selected disabled hidden>level</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
        </div>


        <div class="button-container">
            <button class="search">Cast spell</button>
            <button class="randomize">Randomize</button>
        </div>


        <div class="spell-result">
            <h2 class="name"></h2>
            <div class="first box"></div>
            <div class="second box"></div>
            <div class="third box"></div>
        </div>
    </main>


    </>

  )
}

export default App
