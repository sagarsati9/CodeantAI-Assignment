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
                    <div className='flex justify-between mt-4 items-center'>
                        <div className='flex flex-col m-2'>
                            <span className='font-bold text-xl'>Repositories</span>
                            <span className='text-sm font-light'>33 total repositories</span>
                        </div>
                        <div className='flex'>
                            <button className='border rounded-lg p-2 m-2 flex items-center'> <ArrowPathIcon className='w-4 m-2' />Refresh All</button>
                            <button className='border bg-blue-400 text-white rounded-lg p-2 m-2 flex items-center'>  <PlusIcon className='w-4 m-2' />Add Repository</button>
                        </div>
                    </div>
                    <div>
                        <label className='border flex rounded-md w-fit m-2'>
                            <MagnifyingGlassIcon className='w-4 m-2' />
                            <input type='text' placeholder='Search repositories' onChange={handleChange}>
                            </input>
                        </label>
                    </div>
                </div>
                {data.map((item) => (
                    <div className='flex flex-col border'>
                        <div className='flex items-center'>
                            <span className='m-2 p-2'>{item.title}</span>
                            <span className='m-2 p-2 border rounded-xl bg-blue-300 text-white text-sm'>{item.type}</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='flex items-center m-2 p-2 gap-2'>
                                {item.language}
                                <span className='bg-[#1570EF] p-1 rounded-full'></span>
                            </span>
                            <span className='m-2 p-2 flex items-center'> <CircleStackIcon className='m-2 w-4' /> {item.size}</span>
                            <span className='m-2 p-2'>{item.updatedAt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
