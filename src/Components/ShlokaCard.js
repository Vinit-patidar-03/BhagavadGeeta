import React from 'react';

const ShlokaCard = (props) => {

    const { Shloka } = props;

    const readShloka = (message) => {
        const msg = new SpeechSynthesisUtterance();
        msg.lang = 'hi';
        msg.text = message;
        msg.volume = 1;
        msg.pitch = 1;
        msg.rate = 1;
        window.speechSynthesis.speak(msg);
    }

    return (
        <>
            <div>
                <div className='p-2 bg-slate-100'>
                    <div className='flex items-center'>
                        <h1 className='font-bold'>Shloka: {Shloka.verse_number}</h1>
                        <i className="fa-solid fa-volume-high cursor-pointer mx-2" onClick={() => { readShloka(Shloka.text) }} title='click to speak'></i>
                    </div>
                    <div className='flex justify-center flex-col mt-2'>
                        <h1 className='text-center font-semibold'>{Shloka.text.split('\n\n').length === 3 ? Shloka.text.split('\n\n').filter((elem, index) => { return index === 0 }) : ''}</h1>
                        <div className='text-center p-3'>
                            {
                                Shloka.text.split('\n\n').length === 3 ? Shloka.text.split('\n\n').filter((elem, index) => { return index !== 0 }).join('\n') : Shloka.text.split('\n\n').join('\n')
                            }
                        </div>
                    </div>

                </div>
                <div className='p-2 relative'>
                    <h1 className='font-bold'>Description:</h1>
                    <p className='text-center p-3'>
                        {Shloka.translations.filter((elem) => { return elem.author_name === "Swami Tejomayananda" })[0].description}
                    </p>
                    <p className='absolute bottom-0 right-0 text-sm font-semibold px-2'>
                        ~Swami Tejomayananda
                    </p>
                </div>
                <hr />
                <div className='p-2 relative'>
                    <h1 className='font-bold'>Commentry:</h1>
                    <p className='text-center p-3'>
                        {Shloka.commentaries.filter((elem) => { return elem.author_name === "Swami Chinmayananda" })[0].description}
                    </p>
                    <p className='absolute bottom-0 right-0 text-sm font-semibold px-2'>
                        ~Swami Chinmayananda
                    </p>
                </div>

            </div>
        </>
    )
}

export default ShlokaCard