import React, { useContext } from 'react'
import Context from '../context/Context'
import ChapterCard from '../Components/ChapterCard';

const Chapters = () => {

    const {chapters} = useContext(Context);

  return (
    <>
        <div className='flex flex-wrap justify-center mt-[60px]'>
            {chapters &&
                chapters.map((elem)=>
                {
                    return <ChapterCard chapter={elem} key={elem.id} />
                })
            }
        </div>
    </>
  )
}

export default Chapters