import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function MessageCard({ name, time, id, otp }) {
    const [timeFormat, settimeFormat] = useState()
    const convertDate = () => {
        var newDate = new Date(`${time}`).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
        settimeFormat(newDate)
    }
    useEffect(() => {
        convertDate()
    }, [])

    return (

        <>
            <Link to={`/messages/${id}`} className='my-3 cursor-pointer bg-background2 flex justify-start items-center p-2 py-8  box-border rounded-lg md:w-10/12 w-11/12 relative'>
                <div className='text-white md:ml-10 ml-1 md:text-lg text-sm font-bold'>{name}</div>
                <div className='text-white md:ml-10 ml-1 md:mr-10 mr-1 text-xs  font-bold'><span className='text-dull hidden md:inline-block'>Sent On:</span>{timeFormat}</div>
                <div className='h-10 md:w-24 w-20 bg-btn-color text-white flex justify-center items-center md:text-sm text-xs rounded-md absolute md:right-10 right-2'>OTP: {otp}</div>
            </Link>
        </>
    )
}
