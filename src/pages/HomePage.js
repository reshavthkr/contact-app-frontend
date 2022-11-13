import React from 'react'
import Navbar from '../components/Navbar'
import ContactCard from '../components/ContactCard'
import data from '../contact.json'

export default function HomePage() {
    return (
        <div className='flex justify-between ' >
            <Navbar />
            <div className='bg-background h-screen w-8/12 p-10 flex justify-start items-center flex-col  overflow-scroll'>
                {data.contacts.map((item, idx) => {
                    return (
                        <ContactCard key={item.firstName + idx} id={item.id} firstName={item.firstName} lastName={item.lastName} imgSrc={`https://robohash.org/${item.id}?set=set4`} />
                    )
                })}

            </div>
        </div>
    )
}
