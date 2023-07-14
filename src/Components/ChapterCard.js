import React from 'react'
import { useNavigate } from 'react-router-dom';

const ChapterCard = (props) => {
    const {chapter} = props;
    const Navigate = useNavigate();
    return (
        <>
            <div className='bg-slate-200 rounded-xl w-72 flex flex-col items-center m-3 p-2 cursor-pointer hover:bg-slate-100' onClick={()=>{Navigate(`/chapter/${chapter.chapter_number}`)}}>
                <div>
                    <img src="/images/chapter.png" className='w-60' alt="chapter" />
                </div>
                <div >
                    <h1 className='font-bold text-center'>Chapter {chapter.chapter_number}</h1>
                    <h2 className='font-semibold mt-3 text-center'>
                      {chapter.name}
                    </h2>
                    <h3 className='font-semibold text-center'>Shlokas: {chapter.verses_count}</h3>
                </div>
            </div>
        </>
    )
}

export default ChapterCard