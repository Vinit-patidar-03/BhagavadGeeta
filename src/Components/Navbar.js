import React, { useContext, useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import Context from '../context/Context';

const Navbar = () => {

    const Navigate = useNavigate();
    const [chaptNO,setChaptNO] = useState(0);
    const [shlokaNO,setShlokaNo] = useState(0);
    const {chapters} = useContext(Context);

    useEffect(()=>
    {
       setChaptNO(0);
       setShlokaNo(0);
    },[])
  return (
    <>
        <nav className='bg-slate-200 fixed top-0 z-10 w-full flex items-center justify-between'>
            <ul className='list-none'>
                <li onClick={()=>{Navigate('/')}} className='cursor-pointer'><img src="/images/BhagvadGita.png" className=' w-28' alt="logo" /></li>
            </ul> 
            <li className='list-none'>
            <select name="chapters" id="chapters" className='w-28 h-5 rounded-xl text-xs' value={chaptNO} onChange={(event)=>{setChaptNO(event.target.value)}}>
                <option value={0}>select chapter</option>
                {chapters &&
                   chapters.map((elem)=>
                   {
                      return <option value={elem.id} key={elem.id}>{elem.name}</option>
                   })
                }
            </select>
            <select name="shloka" id="shloka" className=' w-12 h-5 rounded-xl text-xs ml-3 px-1' value={shlokaNO} onChange={(event)=>{setShlokaNo(event.target.value)}}>
                <option value={0}>select shloka</option>
                {chaptNO !== 0 &&
                    [...Array(chapters[chaptNO-1].verses_count)].map((elem,index)=>
                    {
                          return <option value={index+1} key={index}>{index+1}</option>
                    })
                }
            </select>
            <button className='px-2 bg-slate-300 rounded-full ml-3' disabled={shlokaNO === 0 || chaptNO === 0} onClick={()=>{Navigate(`/chapter/${chaptNO}/${shlokaNO}`)}}><i className="fa-solid fa-arrow-right fa-lg"></i></button>
            </li>
        </nav>
    </>
  )
}

export default Navbar