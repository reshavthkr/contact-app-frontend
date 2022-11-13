import { fireEvent } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import data from '../contact.json'

export default function ContactDetails() {
    const [contactDetails, setcontactDetails] = useState()
    const [message, setmessage] = useState()
    const [sendingMessage, setsendingMessage] = useState(false)
    const params = useParams()
    const { id } = params
    const getItem = (id) => {
        let item = data.contacts.filter(item => item.id == id)
        setcontactDetails(item[0])
    }
    const messageText = (e) => {
        setmessage(message => {
            return e.target.value
        })
        console.log(message)
    }
    const sendMessage = async () => {
        setsendingMessage(true)
        let otp = await generateOTP()
        console.log(otp)
        setmessage(`Hi. Your OTP is: ${otp} `)
        console.log(message)
    }
    const generateOTP = () => {
        let min = 100000;
        let max = 999999
        let otp = Math.floor(Math.random() * (max - min + 1) + min)
        return otp
    }
    useEffect(() => {
        getItem(id)
    }, [])



    return (
        <>
            <div className='flex justify-between ' >
                <Navbar />

                <div className='bg-background h-screen w-8/12 p-10 flex justify-center items-center flex-col  overflow-scroll'>
                    <div className='p-8 bg-background2 w-3/4 flex rounded-lg '>
                        {contactDetails ?
                            <>
                                <div className='h-52 w-52 rounded-full bg-secondary flex justify-center items-center border-text-green border-2'>
                                    <img className='w-40' alt='Profile pic' src={`https://robohash.org/${id}?set=set4`} />
                                </div>
                                <div className='ml-14'>
                                    <div className='text-white text-3xl uppercase tracking-wider font-extrabold '>{contactDetails.firstName} {contactDetails.lastName}</div>
                                    <div className='text-white text-xl mt-4'><span className='text-dull'>Phone No: </span>{contactDetails.phone}</div>
                                    <div className='text-white text-xl'> <span className='text-dull'>Email:</span> {contactDetails.email}</div>
                                    {
                                        sendingMessage ?
                                            <>
                                                <textarea onChange={messageText} name="message" value={message} className='my-8 w-64 h-44 p-2 rounded-md bg-background text-white focus:border-btn-color focus:outline-btn-color'></textarea>
                                                <div className='bg-btn-color text-white h-10 w-64 flex justify-center cursor-pointer items-center  rounded-md'>Send </div>
                                            </> :
                                            <div onClick={sendMessage} className='bg-btn-color text-white h-10 w-52 flex justify-center cursor-pointer items-center my-8 rounded-md'>Send Message</div>

                                    }

                                </div>

                            </>
                            : <>
                                <div className='text-3xl text-btn-color'>Loading.......</div>
                            </>
                        }



                    </div>

                </div>
            </div>
        </>
    )
}
