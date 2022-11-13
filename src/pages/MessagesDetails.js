import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';

export default function MessagesDetails() {
    const [messgaeD, setmessageD] = useState()
    const params = useParams()
    const { id } = params

    //---- fetching single message detail--------//
    const fetchMessageDetails = async () => {
        try {
            const response = await fetch(`https://contact-app-backend-production.up.railway.app/api/getSMS/${id}`)
            const data = await response.json()
            setmessageD(data.message)
        } catch (err) {
            toast.error("Oops! Something went wrong")
        }
    }
    useEffect(() => {
        fetchMessageDetails()
    })

    return (

        <div className='flex justify-between flex-col md:flex-row ' >
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Navbar />
            <div className='bg-background h-screen md:w-8/12 w-screen md:p-10 p-2 flex justify-center items-center flex-col  overflow-scroll'>
                <div className='p-8  bg-background2 md:w-3/4 w-full flex rounded-lg'>
                    {messgaeD ? <>
                        <div className='md:ml-14 ml-0'>
                            <div className='text-white text-3xl uppercase tracking-wider font-extrabold '>{messgaeD.name}</div>
                            <div className='text-white text-xl mt-4'><span className='text-dull'>Message: </span>{messgaeD.message}</div>
                            <div className='text-white text-xl'> <span className='text-dull'>Email:</span> {messgaeD.phoneNo}</div>
                            <div className='text-btn-color text-xl'> <span className='text-dull'>OTP:</span> {messgaeD.otp}</div>
                            <div className='text-white text-xl'> <span className='text-dull'>Sent On:</span> {messgaeD.time}</div>

                        </div>

                    </> :
                        <>
                            <div className='text-3xl text-btn-color'>Loading.......</div>
                        </>}
                </div>
            </div>
        </div>
    )
}
