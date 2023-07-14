import React, { useEffect, useState } from 'react'
import Context from './Context'
import fetchChapters from '../API/BhagvatGitaAPI'

const AppContext = (props) => {

    const [chapters, setChapters] = useState();

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetchChapters(``).then((res) => {
            setChapters(res.data);
        })
    }
    console.log(chapters);
    return (
        <Context.Provider value={{ chapters, setChapters }}>
            {props.children}
        </Context.Provider>
    )
}

export default AppContext