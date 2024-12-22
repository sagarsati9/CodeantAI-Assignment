import React from 'react'
import SideBar from './SideBar'
import { DataMock } from '../assets/data';
import { useState } from 'react';
import { ArrowPathIcon, CircleStackIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";

const Home = () => {

    const [data, setData] = useState(DataMock);
    const handleChange = (event) => {
        const temp = DataMock.filter((item) => item.title.toLowerCase().includes(event.target.value.toLowerCase()))
        setData(temp);
    };

    return (

        <div className='p-1 w-full h-full flex'>
            <SideBar className='fixed top-0 left-0 h-screen w-64 border-r-2 bg-white' />
            <div className='flex-1 p-4 overflow-auto bg-[#FAFAFA]'>
                <div className=' flex flex-col border rounded-t-xl'>
                    <div className='flex justify-between mt-2 items-center'>
                        <div className='flex flex-col m-2'>
                            <span className='font-bold text-xl'>Repositories</span>
                            <span className='text-sm font-light'>33 total repositories</span>
                        </div>
                        <div className='flex gap-2'>
                            <button className='p-2 flex items-center text-xs px-4 gap-2 rounded-md border'> <ArrowPathIcon className='w-4' />Refresh All</button>
                            <button className='flex text-xs items-center p-2 px-4 gap-2 bg-[#1570EF] text-white rounded-md'>  <PlusIcon className='w-4' />Add Repository</button>
                        </div>
                    </div>
                    <div>
                        <label className='border flex rounded-md  gap-2 w-fit px-2 py-2 items-center m-2'>
                            <MagnifyingGlassIcon className='w-4' />
                            <input className='outline-none' type='text' placeholder='Search repositories' onChange={handleChange}>
                            </input>
                        </label>
                    </div>
                </div>
                {data.length >= 1 ? data.map((item) => (
                    <div className='flex flex-col border'>
                        <div className='flex items-center gap-2'>
                            <span className='p-2 font-medium'>{item.title}</span>
                            <span className='bg-[#EFF8FF] border border-[#B2DDFF] text-primary text-xs px-2 rounded-full text-blue-600'>{item.type}</span>
                        </div>
                        <div className='flex items-center gap-2 text-center'>
                            <span className='flex items-center p-2 gap-2 font-light text-sm'>
                                {item.language}
                                <span className='bg-[#1570EF] p-1 rounded-full'></span>
                            </span>
                            <span className='p-2 flex items-center font-light text-sm'> <CircleStackIcon className='m-2 w-4' /> {item.size}</span>
                            <span className=' p-2 font-light text-sm'>{item.updatedAt}</span>
                        </div>
                    </div>
                )) : (
                    <div className='flex flex-col border-b p-4 gap-3 text-gray-500 text-center'>
                        Looks like there is no repository to show.
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Home
