import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MessageCard from '../components/MessageCard'

export default function Messages() {
    const [messagDetail, setmessagDetail] = useState()

    //---- fetching Messages--------//
    const fetchMessages = async () => {
        const response = await fetch('https://contact-app-backend-production.up.railway.app/api/getSMS');
        const data = await response.json()
        setmessagDetail(data.messages)
    }

    useEffect(() => {
        fetchMessages()
    }, [])

    return (

        <div className='flex justify-between flex-col md:flex-row ' >
            <Navbar />
            <div className='bg-background h-screen md:w-8/12 w-screen md:p-10 p-2 flex justify-start items-center flex-col  overflow-scroll'>
                {messagDetail ?
                    <>
                        {messagDetail.map((item, idx) => {
                            return (
                                <MessageCard key={item._id + idx} name={item.name} time={item.time} otp={item.otp} id={item._id} />
                            )
                        })}

                    </> :
                    <><div className='text-3xl text-btn-color'>Loading.....</div></>
                }
            </div>
        </div>
    )
}
