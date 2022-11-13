import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <>
            <div className='md:h-screen h-24 bg-background2 w-screen md:w-4/12 md:p-10 p-2 flex md:justify-start justify-evenly flex-row md:flex-col items-center'>
                <Link className='md:mb-32 m-0 ' to='/'>
                    <img className='md:w-64 w-20' src={require('../img/logo.png')} alt="Logo" />
                </Link>
                <img className='my-6 w-32  md:inline-block hidden ' alt='profile' src={require('../img/profile.png')} />
                <Link to='/' className='md:my-6 m-0 bg-btn-color text-white h-10 md:w-48 w-24 flex justify-center items-center 
                    rounded-md hover:bg-background2 hover:border-btn-color hover:border-2 hover:text-btn-color'>
                    Contacts
                </Link>
                <Link to='/messages' className=' md:my-6 m-0 bg-btn-color text-white h-10 w-24 md:w-48 flex justify-center items-center rounded-md 
                    hover:bg-background2 hover:border-btn-color hover:border-2 hover:text-btn-color'>
                    Message
                </Link>
            </div>
        </>
    )
}
