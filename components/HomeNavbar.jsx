'use client';
import Link from 'next/link'
import React from 'react'
import DarkmodeToggle from './DarkmodeToggle'
import { useRouter } from 'next/navigation'

const HomeNavbar = () => {
    const router = useRouter()
    // console.log(router.pathname)
    return (
        <div className='w-full  flex items-center justify-center  sticky top-0 z-50'>
            
            <div className=' justify-around  flex items-center p-1 bg-zinc-200 dark:bg-zinc-900 dark:bg-opacity-45 bg-opacity-45 dark:backdrop-blur-sm backdrop-blur-sm   rounded-full w-[98%]'>
                <div className='flex items-center justify-center  '>
                    <Link href={'/'}>
                        <div><h1 className='font-bold cursor-pointer select-none text-zinc-800 dark:text-white text-xl'>BrilliCode</h1>
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center gap-x-1'>
                    {/* <div>
                    <DarkmodeToggle />
                </div> */}
                    <Link href="/donation">
                        {
                            router.pathname?.startsWith('/donation') ?
                                <div className='cursor-pointer select-none hover:bg-zinc-200 dark:bg-zinc-800 bg-zinc-200 dark:hover:bg-zinc-800 py-1 px-3 rounded-md transition-all duration-300'>
                                    <h2 className='font-semibold'>Donate</h2>
                                </div>
                                :
                                <div className='cursor-pointer select-none hover:bg-zinc-200 dark:hover:bg-zinc-800 py-1 px-3 rounded-md transition-all duration-300'>
                                    <h2 className='font-semibold'>Donate</h2>
                                </div>
                        }




                    </Link>


                    <Link href={'/language/javascript'}>

                        <div className='cursor-pointer select-none hover:bg-zinc-200  dark:hover:bg-zinc-800 py-1 px-3 rounded-md transition-all duration-300'>
                            <h2 className='font-semibold '>Editors</h2>
                        </div>
                    </Link>
<Link href='/contact-us'>
 <div className='cursor-pointer select-none hover:bg-zinc-200  dark:hover:bg-zinc-800 py-1 px-3 rounded-md transition-all duration-300'>
                        <h2 className='font-semibold '>Contact</h2>
                    </div>
</Link>
                   
                    {/* <div className='cursor-pointer select-none hover:bg-zinc-900 py-1 px-3 rounded-md transition-all duration-300'>
                    <h2 className='font-semibold '>Login</h2>
                </div> */}

                </div>
            </div></div>

    )
}

export default HomeNavbar