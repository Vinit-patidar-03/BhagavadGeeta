import React, { useContext, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import Context from '../context/Context';

const Navbar = () => {

    const Navigate = useNavigate();
    const [chaptNO,setChaptNO] = useState(0);
    const [shlokaNO,setShlokaNo] = useState(0);
    const {chapters} = useContext(Context);

  return (
    <>
        <nav className='bg-slate-200 fixed top-0 z-10 w-full flex items-center'>
            <ul className='list-none'>
                <li onClick={()=>{Navigate('/')}} className='cursor-pointer'><img src="/images/BhagvadGita.png" className=' w-28' alt="logo" /></li>
            </ul> 
            <select name="chapters" id="chapters" className='w-28 h-5 rounded-xl text-xs' value={chaptNO} onChange={(event)=>{setChaptNO(event.target.value)}}>
                <option value={0}>select chapter</option>
                {chapters &&
                   chapters.map((elem)=>
                   {
                      return <option value={elem.id} key={elem.id}>{elem.name}</option>
                   })
                }
            </select>
            <select name="shloka" id="shloka" className='w-28 h-5 rounded-xl text-xs ml-3' onChange={(event)=>{setShlokaNo(event.target.value)}}>
                <option value={0}>select shloka</option>
                {chaptNO !== 0 &&
                    [...Array(chapters[chaptNO-1].verses_count)].map((elem,index)=>
                    {
                          return <option value={index+1} key={index}>{index+1}</option>
                    })
                }
            </select>
            <button className='py-1 px-5 bg-black text-white rounded-full ml-3' onClick={()=>{Navigate(`/chapter/${chaptNO}/${shlokaNO}`)}}>APPLY</button>
        </nav>
    </>
  )
}

export default Navbar