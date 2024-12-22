import React from 'react'

const AuthLeft = () => {
    return (
        <div className='w-2/4'>
            <div className='flex-col w-full'>
                <img src={'/png/logoFaded.png'} alt='bg-image' className="absolute left-0 bottom-0 w-[260px]" />
                <div className='w-full flex flex-col items-center justify-center h-screen'>
                    <div className='border  rounded-xl mb-4'>
                        <div className='flex flex-row border-b-2'>
                            <img src='/svg/logo.svg' alt='logo' className='p-2'></img>
                            <p className='font-bold p-4'>AI to Detect & Autofix Bad Code</p>
                        </div>
                        <div className='flex flex-wrap'>
                            <div className='m-2 text-center p-4'>
                                <p className='font-bold'>30+</p>
                                <p>Language Support</p>
                            </div>
                            <div className='m-2 text-center p-4'>
                                <p className='font-bold'>10k+</p>
                                <p>Developers</p>
                            </div>
                            <div className='m-2 text-center p-4'>
                                <p className='font-bold'>100k+</p>
                                <p>Hours Saved</p></div>
                        </div>
                    </div>
                    <div className='flex gap-2 p-4 px-8 border bg-white rounded-xl translate-x-[50%] -translate-y-[30px]'>
                        <div className='m-2'>
                            <img src='/png/GrapgAuth.png' alt='logo'></img>
                            <p className='font-bold'>Issues Fixed</p>
                            <p className='font-bold'>500k+</p>
                        </div>
                        <div className='m-2'>
                            <p>⬆️14%</p>
                            <p>This week</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLeft
