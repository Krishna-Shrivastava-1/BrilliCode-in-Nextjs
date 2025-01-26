import React from 'react'
import Formsubmer from '@/components/Formsubmer'
import HomeNavbar from '@/components/HomeNavbar'
import Footer from '@/components/Footer'
const page = () => {
    return (
        <div>

            <div className="w-full flex items-center flex-col justify-center">
                <div className='sticky top-0 z-50 w-full'>
                    <HomeNavbar />
                </div>
                <h1 className='text-center my-3 mt-5 text-2xl font-bold textshad'>We Value Your Feedback!</h1>
                <div className='w-full sm:flex-nowrap flex-wrap  flex items-center p-2 justify-between'>
                    <p className='sm:w-[85%] text-balance text-center'>
                        Your thoughts and suggestions are incredibly important to us. Whether you’ve had a great experience or noticed areas where we can improve, we want to hear from you! Feedback helps us understand what’s working well and what we can do better to serve you and our community. Take a moment to share your ideas, comments, or even a quick note of encouragement. Your input drives our growth and helps us create a platform that truly meets your needs. Thank you for helping us get better every step of the way! 🌟
                    </p>
                    <Formsubmer />
                </div>
                <Footer />
            </div>

        </div>
    )
}

export default page

export const metadata = {
    title: "BrilliCode - Feedback form",
    description: "BrilliCode is a powerful online compiler supporting multiple programming languages. Write, compile, and debug your code seamlessly with instant output and a user-friendly interface. Perfect for developers of all levels!",
};