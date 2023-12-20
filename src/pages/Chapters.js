import React, { useContext, useEffect } from 'react'
import Context from '../context/Context'
import ChapterCard from '../Components/ChapterCard';

const Chapters = () => {

    const { chapters, setSlokaNo } = useContext(Context);

    useEffect(() => {
        setSlokaNo(1);
    }, [setSlokaNo])

    return (
        <>
            <div className='flex flex-wrap justify-center mt-[60px]'>
                {
                    chapters &&
                    chapters.map((elem) => {
                        return <ChapterCard chapter={elem} key={elem.id} />
                    })
                }
            </div>
        </>
    )
}

export default Chapters