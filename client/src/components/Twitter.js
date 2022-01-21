import React, {useState} from 'react'
import './Main.css'

function Twitter() {
    const [query,setQuery]=useState('')
    const [percent,setPercent]=useState()
    const [load, setLoad]=useState(true)
    
    const illegal_chars= /[./'";:,!@#$%^&*()\\]/
    const numbers= /[0-9]/
    
    function getResult()
    {
        setLoad(true)
        fetch(`http://127.0.0.1:5000/twitter/search?query=${query}`).then((response)=>response.json()).then((result)=>setPercent(parseFloat(result['positive']))).catch((e)=>console.log(e))
        setLoad(false)
    }

    function dots() {
        return(
            <>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            </>
        )
    }

    return (
        <div className='twitter-page'>
        <div id="input-box">
            <input type="text" onKeyDown={(e)=>{if(e.key==='Enter'&&!(illegal_chars.test(query))&&query.search(numbers)!==0&&query!==''){getResult()}}} value={query} onChange={(e)=>{setQuery(e.target.value)}} placeholder='Search a hashtag'/>
        </div>

        <div id='resultContainer'>
                <span id='percentText'>{load?dots():(percent*100).toFixed(1)}%</span>
                <span id='positive'>Positivity</span>
        </div>
        </div>
    )
}

export default Twitter
