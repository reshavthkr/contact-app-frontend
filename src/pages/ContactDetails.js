
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import data from '../contact.json'

import 'react-toastify/dist/ReactToastify.css';

export default function ContactDetails() {
    const [contactDetails, setcontactDetails] = useState()
    const [otpValue, setotpValue] = useState()
    const [message, setmessage] = useState()
    const [sendingMessage, setsendingMessage] = useState(false)
    const params = useParams()
    const { id } = params

    //---- function for fetching specific user--------//
    const getItem = (id) => {
        let item = data.contacts.filter(item => item.id === id)
        setcontactDetails(item[0])
    }

    //---- On changing the text value--------//
    const messageText = (e) => {
        setmessage(message => {
            return e.target.value
        })
    }

    //---- getting otp form backend--------//
    const fetchOTP = async () => {
        try {
            const response = await fetch('https://contact-app-backend-production.up.railway.app/api/generateOTP');
            const data = await response.json()
            if (data.otp) {
                setotpValue(data.otp)
                setmessage(`Hi. Your OTP is: ${data.otp}. `)
            }

        }
        catch (err) {
            toast.error(`${err}`);
        }

    }

    const sendMessage = async () => {
        await fetchOTP()
        setsendingMessage(true)
    }
    //---- function for sending the message --------//
    const deliverMessage = async () => {
        try {
            if (otpValue && message) { //checking if value are empty or not
                if (message.includes(`Hi. Your OTP is: ${otpValue}.`)) { //checking whether the default message is deleted
                    const response = await fetch('https://contact-app-backend-production.up.railway.app/api/sendSMS', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: contactDetails.firstName + contactDetails.lastName,
                            otp: otpValue,
                            message: message,
                            phoneNo: contactDetails.phone
                        })
                    });
                    const data = await response.json()
                    if (data.status) {
                        toast.error("Oops! Something went wrong")
                    }
                    else {
                        toast.success("Woohoo! Message sent successfuly")
                        setsendingMessage(false)
                    }
                }
                else toast.error("Oops! It seems that you had deleted the default message. Please refresh and try again ")

            }
            else {
                toast.warning("Please enter the message")
            }
        }
        catch (err) {

        }
    }
    useEffect(() => {
        getItem(id)
    })

    return (
        <>
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

                <div className='bg-background h-screen md:w-8/12 w-screen md:p-10 p-1 pt-20  flex md:justify-center justify-start  items-center flex-col  overflow-scroll'>
                    <div className='md:p-8 p-4 bg-background2 md:w-3/4 w-11/12 flex rounded-lg md:flex-row flex-col justify-center items-center'>
                        {contactDetails ?
                            <>
                                <div className='h-52 w-52 rounded-full bg-secondary flex justify-center items-center border-text-green border-2'>
                                    <img className='w-40' alt='Profile pic' src={`https://robohash.org/${id}?set=set4`} />
                                </div>
                                <div className='md:ml-14 my-4 md:my-0'>
                                    <div className='text-white text-3xl uppercase tracking-wider font-extrabold '>{contactDetails.firstName} {contactDetails.lastName}</div>
                                    <div className='text-white text-xl mt-4'><span className='text-dull'>Phone No: </span>{contactDetails.phone}</div>
                                    <div className='text-white text-xl'> <span className='text-dull'>Email:</span> {contactDetails.email}</div>
                                    {
                                        sendingMessage ?
                                            <>
                                                <textarea onChange={messageText} name="message" value={message} className='my-8 w-64 h-44 p-2 rounded-md bg-background text-white focus:border-btn-color focus:outline-btn-color'></textarea>
                                                <div onClick={deliverMessage} className='bg-btn-color text-white h-10 w-64 flex justify-center cursor-pointer items-center  rounded-md'>Send </div>
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
