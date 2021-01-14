// create your App component here

import React, {useState, useEffect} from 'react'



function App (){

    const [breed, setBreed] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((response) => response.json())
        .then((data) => {
            setBreed(data)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <p>Loading...</p>

    return (
        <div>
            <h1>Hey There</h1>
            <h2>{breed.status}</h2>
            <img src={breed.message} alt="A Random Dog"/>
        </div>
    )
}

export default App