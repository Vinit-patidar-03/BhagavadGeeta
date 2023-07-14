/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import fetchChapters from '../API/BhagvatGitaAPI'
import { useParams } from 'react-router-dom'
import ChapterDetailsCard from '../Components/ChapterDetailsCard';
import ShlokaCard from '../Components/ShlokaCard';

const ChapterDetails = () => {
    const {CNO,SNO} = useParams();
    const [shlokas, setShlokas] = useState(1);
    const [slokaNO, setSlokaNo] = useState(1);
    const [chapterdetails, setChapterdetails] = useState('');

    console.log(CNO)
    console.log(SNO);
    useEffect(() => {
        fetchChapterData();
        fetchChapterDetails();
    }, [CNO,SNO])

    const fetchChapterData = () => {
if(SNO !==':SNO')
{
        fetchChapters(`${CNO}/verses/${SNO}/`).then((res) => {
            console.log(res.data);
            setShlokas(res.data);
        })}
else{

fetchChapters(`${CNO}/verses/${shlokas}/`).then((res) => {
            console.log(res.data);
            setShlokas(res.data);
        })}
    }

    const fetchChapterDetails = () => {
        fetchChapters(`${CNO}/`).then((res) => {
            console.log(res.data);
            setChapterdetails(res.data)
        })
    }

    const handleSNO = (e) => {
        if (e === 'incr' && slokaNO !== shlokas.length - 1) {
            setSlokaNo(SNO + 1);
        } else if (e === 'decr' && SNO !== 1) {
            setSlokaNo(SNO - 1);
        }
    }
    return (
        <>
            <div className='mt-[60px] bg-slate-100'>
                {chapterdetails &&
                    <ChapterDetailsCard chapter={chapterdetails} />
                }
            </div>
            {shlokas &&
                <div>
                    <div>
                        <ShlokaCard Shloka={shlokas} />

                    </div>
                    <div className='flex justify-evenly my-5'>
                        <button className='px-5 py-2 bg-black text-white font-bold rounded-full' onClick={()=>{handleSNO('decr')}}>Previous</button>
                        <button className='px-5 py-2 bg-black text-white font-bold rounded-full' onClick={()=>{handleSNO('incr')}}>Next</button>
                    </div>
                </div>}
        </>
    )
}

export default ChapterDetails