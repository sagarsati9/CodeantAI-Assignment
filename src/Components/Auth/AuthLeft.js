import { ArrowLongUpIcon } from '@heroicons/react/16/solid'
import React from 'react'

const AuthLeft = () => {
    return (
        <div className='hidden md:flex h-full w-1/2 bg-white border-r relative flex-col justify-center items-center'>
            <img src={'/png/logoFaded.png'} alt='bg-image' className="absolute left-0 bottom-0 w-[300px] aspect-square" />
            <div className=' border flex rounded-xl flex-col w-full max-w-[400px]'>

                <div className='flex  gap-2  border-b items-center p-4'>
                    <img src='/svg/logo.svg' alt='logo' className='w-6 h-6'></img>
                    <span className='font-semibold'>AI to Detect & Autofix Bad Code</span>
                </div>
                <div className='flex gap-4 justify-between items-center p-4'>
                    <div className='flex flex-col items-center'>
                        <span className='font-semibold'>30+</span>
                        <span className='text-sm'>Language Support</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='font-semibold'>10k+</span>
                        <span className='text-sm'>Developers</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='font-semibold'>100k+</span>
                        <span className='text-sm'>Hours saved</span>
                    </div>
                </div>
            </div>

            <div className=' border flex flex-col gap-2 p-4 px-8  bg-white rounded-xl translate-x-[50%] -translate-y-[10px]'>
                <div className=' flex justify-between min-w-40'>
                    <img src='/png/GrapgAuth.png' alt='logo'></img>
                    <div className='flex flex-col'>
                        <div className='flex items-center text-primary'>
                            <ArrowLongUpIcon className='w-5' />
                            14%
                        </div>
                        <div className='font-light text-xs'>
                            This week
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <span className='font-semibold'>Issues Fixed</span>
                        <span className='font-semibold text-2xl'>500K+</span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AuthLeft;
