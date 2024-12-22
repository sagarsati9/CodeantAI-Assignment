import React from 'react'
import { useState } from 'react';
import { KeyIcon } from "@heroicons/react/16/solid";

const AuthRight = () => {

    const [isSaas, setIsSaas] = useState(true);

    return (
        <div className='w-2/4'>
            <div className='border bottom-2 mt-14 ml-2 mr-2 rounded-xl'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex m-1 p-2 items-center justify-center'>
                        <img src='/svg/logo.svg' alt='' className='w-8 m-2'></img>
                        <p className='m-2'>CodeAnt AI</p>
                    </div>
                    <p className='m-1 p-2 text-2xl font-semibold'>Welcome to CodeAnt AI</p>
                </div>
                <div className='flex flex-col border-b-1 m-2'>
                    <div className=' flex flex-wrap border-b-2 m-2'>
                        <button className={`p-3 rounded-xl w-1/2 mb-2 ${isSaas ? 'bg-[#1570EF] text-white' : ''}`} onClick={() => setIsSaas(true)}>SAAS</button>
                        <button className={`p-3 rounded-xl w-1/2 mb-2 ${isSaas ? '' : 'bg-[#1570EF] text-white'}`} onClick={() => setIsSaas(false)}>Self Hosted</button>
                    </div>
                    {isSaas ?
                        (<div className='flex flex-col justify-center items-center m-2'>
                            <a href='/dashboard' className='flex flex-row m-1 w-3/4 p-2 gap-3 border rounded-lg justify-center'>
                                <img src={'/svg/github.svg'} alt={'github'} className={`w-5`} />
                                Sign in with Github
                            </a>
                            <a href='/' className='flex flex-row m-1 w-3/4 p-2 gap-3 border rounded-lg justify-center'>
                                <img src={'/svg/bitbucket.svg'} alt={'bitbucket'} className={`w-5`} />
                                Sign in with Bitbucket
                            </a>
                            <a href='/' className='flex flex-row m-1 w-3/4 p-2 gap-3 border rounded-lg justify-center'>
                                <img src={'/svg/azure-devops.svg'} alt={'azure-devops'} className={`w-5`} />
                                Sign in with Azure Devops
                            </a>
                            <a href='/' className='flex flex-row m-1 w-3/4 p-2 gap-3 border rounded-lg justify-center'>
                                <img src={'/svg/gitlab.svg'} alt={'gitlab'} className={`w-5`} />
                                Sign in with GitLab
                            </a>
                        </div>) :
                        (<div>
                            <a href='/' className='flex flex-row m-1 w-3/4 p-2 gap-3 border rounded-lg justify-center'>
                                <img src={'/svg/gitlab.svg'} alt={'gitlab'} className={`w-5`} />
                                Sign in with GitLab
                            </a>
                            <a href='/' className='flex flex-row m-1 w-3/4 p-2 gap-3 border rounded-lg justify-center'>
                                <KeyIcon className={`w-5`} />
                                Sign in with SSO
                            </a>
                        </div>)
                    }
                </div>
            </div>
            <div className='flex items-center justify-center m-3'>
                <span className=''>By signing up you agree to the <b>Privacy Policy.</b></span>
            </div>

        </div>

    )
}

export default AuthRight;
