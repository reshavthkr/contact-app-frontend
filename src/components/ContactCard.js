import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactCard({ firstName, lastName, imgSrc, id }) {
    return (
        <>
            <Link to={`/user/${id}`} className='my-3 cursor-pointer bg-background2 flex justify-start items-center p-4 box-border rounded-lg w-7/12 relative'>
                <div className=' w-20 h-20 bg-secondary flex justify-center items-center rounded-full border-white border-2'>
                    <img className='w-16' src={imgSrc} alt='profilePic' />
                </div>
                <div className='text-white ml-10 text-lg font-bold'>{firstName}</div>
                <div className='text-white ml-2 mr-10 text-lg font-bold'> {lastName}</div>
                <div className='h-10 w-24 bg-btn-color text-white flex justify-center items-center text-sm rounded-md absolute right-10'>View Details</div>

            </Link>
        </>
    )
}
