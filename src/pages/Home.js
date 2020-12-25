import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config'

const Home = () => {

    const [input,setInput] = useState('')
    const [results,setResults] = useState(null)

    const onInputChange = (e)=>{
        setInput(e.target.value)
    }

    const onSearch = ()=>{
        
        apiGet(`shows?q=${input}`).then(result => {
                      setResults(result)
        })
        
           

    }

    const onKeyDown = e =>{
        if(e.keyCode === 13)
            {
                console.log(e.keyCode)
                onSearch()
            }
    }

    const renderResults = () => {

        if(results && results.length === 0){

            return <div>No result</div>

        }

        if(results && results.length > 0){
            return <div> { results.map((item)=> <div key={item.show.id}> {item.show.name} </div> )}</div>
        }

        return null;

    }


    return (
       <MainPageLayout>
        <div>
            <input type="text" onChange= {onInputChange} onKeyDown= {onKeyDown} value= { input }></input>
            <button onClick={onSearch} >Search</button>
            {renderResults()}
        </div>
        </MainPageLayout> 
    )
}

export default Home
