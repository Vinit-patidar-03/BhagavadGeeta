import React from 'react'

const ChapterDetailsCard = (props) => {

    const { chapter } = props;
    return (
        <>
            <div className='flex justify-center flex-col items-center bg-slate-100'>
                <div>
                    <img src="/images/BhagvadGita.png" className='w-60' alt="chapter" />
                </div>
                <div className='text-center'>
                    <h1 className='font-bold'>Chapter {chapter.chapter_number}</h1>
                    <h2 className='font-semibold mt-3'>Name: {chapter.name}</h2>
                    <h3 className='font-semibold'>Shlokas: {chapter.verses_count}</h3>
                </div>
            </div>
            <hr />
        </>
    )
}

export default ChapterDetailsCard