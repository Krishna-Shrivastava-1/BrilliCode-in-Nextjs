import HomeNavbar from '@/components/HomeNavbar'

import React from 'react'

const page = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 w-full">
        <HomeNavbar />
      </div>
      <div className='flex items-center justify-center w-full'>
        <div className='w-[85%] text-center'>
          <h1 className='font-bold text-xl my-4'>
            Support Our Mission and Make a Difference
          </h1>
          <p>
            Your support means the world to us! By donating, you help us continue creating valuable content, building innovative projects, and providing resources that inspire and empower our community. Every contribution—big or small—goes directly toward improving our platform, covering essential costs, and keeping our work accessible to everyone. If you’ve enjoyed our efforts, found our tools helpful, or simply want to see us grow, consider lending a hand. Together, we can achieve so much more. Let’s keep this journey going—one step, one donation, one dream at a time. Thank you for believing in us! 🙌💖
          </p>
        </div>
      </div>
    </div>
  )
}

export default page