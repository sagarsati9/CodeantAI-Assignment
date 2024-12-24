import React from 'react';
import AuthLeft from './Auth/AuthLeft';
import AuthRight from './Auth/AuthRight';

const Auth = () => {
  return (

    <div className='flex gap-2 w-full justify-center'>
            <AuthLeft/>
            <AuthRight />
        </div >
    
  )
}

export default Auth;
