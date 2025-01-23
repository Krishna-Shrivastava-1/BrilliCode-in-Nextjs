import React from 'react'
import DarkmodeToggle from './DarkmodeToggle'
import { Button } from './ui/button'
import Comboselector from './Comboselector'

const Navbar = ({runnerfunc,stateisloading ,handlefunc, langu,ste}) => {
    return (
        <div className='w-full  flex items-center justify-center sticky top-0 z-50'>
            <div className=' justify-around  flex items-center bg-zinc-200 dark:bg-zinc-900 dark:bg-opacity-45 bg-opacity-45 dark:backdrop-blur-sm backdrop-blur-sm  p-1 rounded-full w-[98%]'>
                <div><h1 className='font-bold cursor-pointer select-none text-zinc-800 dark:text-white text-xl'>BrilliCode</h1></div>
                <div className='flex items-center justify-center gap-x-3'>
                    <div>
                        <DarkmodeToggle ste={ste} />
                    </div>
                    <div>
                        <Comboselector handlefunc={handlefunc} langu={langu}/>
                    </div>
                    <div className='md:block hidden'>
                        <Button className='transition-all duration-500' onClick={runnerfunc}  disabled={stateisloading} ><h2 className='font-bold'> {stateisloading ? "Running..." : "Run"}</h2></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar