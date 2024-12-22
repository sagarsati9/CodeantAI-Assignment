import React from 'react'
import {
    ArrowRightStartOnRectangleIcon, Bars4Icon,
    BookOpenIcon,
    ChevronDownIcon,
    CloudIcon,
    CodeBracketIcon,
    Cog6ToothIcon,
    HomeIcon, PhoneIcon
} from "@heroicons/react/24/outline";

const SideBar = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-wrap my-6 p-2 font-bold items-center'>
                <img src='/svg/logo.svg' alt='' className='w-4'></img>
                <p className='mx-2'>CodeAnt AI</p>
            </div>
            <span className='flex text-center border-2 rounded-xl p-1'>
                <span className='text-sm m-1'>UtkarshDhairyaPanwar...</span> 
                <ChevronDownIcon className='w-4'/>
            </span>
            <nav className='px-4 py-2'>
               <a href='#' className='flex m-2 py-2 px-4 bg-blue-500 text-white rounded-xl'>
               <span> <HomeIcon className='w-6'/></span>
                <span className='ml-2'>Repositories</span>
               </a>
               <a href='#' className='flex m-2 py-2 px-4'>
                <span><CodeBracketIcon className='w-6'/></span>
                <span className='ml-2'>AI Code review</span>
               </a>
               <a href='#' className='flex m-2 py-2 px-4'>
                <span><CloudIcon className='w-6'/></span>
                <span className='ml-2'>Cloud Security</span>
               </a>
               <a href='#' className='flex m-2 py-2 px-4'>
                <span><BookOpenIcon className='w-6'/></span>
                <span className='ml-2'>How To Use</span>
               </a>
               <a href='#' className='flex m-2 py-2 px-4'>
                <span><Bars4Icon className='w-6'/></span>
                <span className='ml-2'>Settings</span>
               </a>
              
            </nav>

            <div className='px-4 py-4'>
                <a className='flex m-2 py-2 px-4'>
                 <span><PhoneIcon className='w-6'/></span>
                 <span className='ml-2'>Support</span>
                </a>
                <a className='flex m-2 py-2 px-4'>
                    <span><ArrowRightStartOnRectangleIcon className='w-6'/></span>
                    <span className='ml-2'>Logout</span>
                </a>
            </div>


        </div>
    )
}

export default SideBar
