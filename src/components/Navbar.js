import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <>
            <div className='h-screen bg-background2 w-4/12 p-10 flex justify-start flex-col items-center'>
                <Link className='mb-32' to='/'>
                    <img className='w-64' src={require('../img/logo.png')} alt="Logo" />
                </Link>
                <img className='my-6 w-32' alt='profile' src={require('../img/profile.png')} />
                <Link to='/' className='my-6 bg-btn-color text-white h-10 w-48 flex justify-center items-center 
                    rounded-md hover:bg-background2 hover:border-btn-color hover:border-2 hover:text-btn-color'>
                    Contacts
                </Link>
                <Link to='/messages' className=' my-6 bg-btn-color text-white h-10 w-48 flex justify-center items-center rounded-md 
                    hover:bg-background2 hover:border-btn-color hover:border-2 hover:text-btn-color'>
                    Message
                </Link>
            </div>
        </>
    )
}
