import React, {useState} from 'react'
import './Main.css'

function Twitter() {
    const [query,setQuery]=useState('')
    const [percent,setPercent]=useState(0.0)
    const [load, setLoad]=useState('none') // 0 for neither loading nor result, 1 result, -1 for loading
    
    function getResult()
    {
        setLoad('load')
        fetch(`http://127.0.0.1:5000/twitter/search?query=${query}`).then((response)=>response.json()).then((result)=>{setPercent(parseFloat(result['positive'])); setLoad('result');}).catch((e)=>console.log(e))
    }

    function dots() {
        return(
            <div id='load'>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            </div>
        )
    }

    function get_percent(){
        return(
            <div id='resultContainer'>
            <span id='percentText'>{(percent*100).toFixed(1)}%</span>
            <span id='positive'>Positivity</span>
            </div>
        )
    }

    return (
        <div className='twitter-page'>
        <div id='inputContainer'>
            <input type="text" id='input-box' onKeyDown={(e)=>{if(e.key==='Enter'){getResult();}}} value={query} onChange={(e)=>{setQuery(e.target.value)}} placeholder='Search a hashtag'/>
        </div>
        <div>
            {load==='none'?<div/>:(load==='result'?get_percent():dots())}
        </div>
        </div>
    )
}

export default Twitter
