import React, { useEffect, useState } from 'react'
import Context from './Context'
import fetchChapters from '../API/BhagvatGitaAPI'

const AppContext = (props) => {

    const [chapters, setChapters] = useState();
    const [slokaNO, setSlokaNo] = useState(1);
    

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetchChapters(``).then((res) => {
            setChapters(res.data);
        })
    }
     
    return (
        <Context.Provider value={{ chapters, setChapters,slokaNO,setSlokaNo }}>
            {props.children}
        </Context.Provider>
    )
}

export default AppContext