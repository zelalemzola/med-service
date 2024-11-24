import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const ChatInfo = () => {
    return (
        <div className='md:h-screen flex items-center justify-center flex-col md:flex-row px-10 md:px-20 py-15 md:py-0 gap-5 md:gap-0'>
            <div className="flex-1">
                <Image src='/docchat2.png' alt='doctor chatting' width={640} height={640}  />
            </div>
            <div className="flex-1 flex flex-col gap-4 items-start">
                <h1 className="text-4xl md:text-5xl font-bold text-wrap">Start an online chat with a <span className='text-primary'>Certified Doctor</span></h1>
                <p className="text-gray-400 text-md  md:text-lg">Experience the ultimate convenience and peace of mind with our cutting-edge, secure, and user-friendly platform. Connect with licensed doctors anytime, anywhere—right from the palm of your hand. Whether it&apos;s a quick question, a follow-up, or immediate medical advice, our platform makes accessing professional healthcare as easy as sending a message. Say goodbye to waiting rooms and hello to instant, reliable medical care tailored to your needs, wherever life takes you. Start your journey to better health today!</p>

                <Link href='/' className='bg-primary p-2 px-6 md:text-lg rounded-full text-white shadow-md hover:shadow-2xl'>Start Chat</Link>
            </div>

        </div>
    )
}

export default ChatInfo