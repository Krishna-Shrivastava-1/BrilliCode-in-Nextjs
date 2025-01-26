'use client'
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import PopularSection from './PopularSection'
import Footer from './Footer'

const HomeHeader = () => {
    const [querry, setquerry] = useState('')
    const [searchresult, setsearchresult] = useState([])
    const languages = [
        { value: "javascript", label: "JavaScript" },
        { value: "typescript", label: "TypeScript" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
        { value: "csharp", label: "C#" },
        { value: "php", label: "PHP" },
        { value: "c", label: "C" },
        { value: "cpp", label: "C++" },
        { value: "swift", label: "Swift" },
        { value: "rust", label: "Rust" },
        // { value: "r", label: "R" },
        { value: "ruby", label: "Ruby" },
        { value: "go", label: "Go" },
        { value: "kotlin", label: "Kotlin" },
        { value: "perl", label: "Perl" },
        { value: "jelly", label: "Jelly" },
        { value: "dart", label: "Dart" },
        { value: "html-css-js", label: "HTML-CSS-JS-Webpack" },
    ];


    const searchmatch = () => {
        const lable = languages.map((lang) => lang.label)
        const result = lable.filter((r) => r.toLowerCase().includes(querry.toLowerCase()))
        setsearchresult(result)
    }
    useEffect(() => {
        searchmatch()

    }, [querry])
    const lan = languages.map(e => e.label)

    // console.log(lan)
    return (
        <div className='w-full flex items-center justify-center pt-12 flex-col p-2'>
            <div className='text-5xl font-extrabold text-center'>
                <h1 className='textshad dark:textshlig'>Code online with BrilliCode Compiler.</h1>
            </div>
            <div className='mt-3 text-zinc-400 text-xl text-balance text-center'>
                <p>Write, Compile, and Debug Code Effortlessly Across Multiple Languages</p>
            </div>
            <div className='w-full flex items-center justify-center mt-5 relative  group'>
                <Input onChange={(e) => setquerry(e.target.value)} type="search" placeholder="Search by language..." className='text-xl w-full md:w-[40%]' />
                <div className='absolute shadow-lg shadow-zinc-700 rounded-md transition-all duration-300 h-auto max-h-44 overflow-y-auto bg-zinc-100 p-2 dark:bg-[#0a0a0a] border-zinc-700 border group-focus-within:block hidden top-10 w-full md:w-[40%]' >
                    {searchresult && searchresult.length > 0 ? (
                        searchresult.map((e, index) => (
                            <Link key={index}   href={`/language/${e.toLowerCase()}`}>
                                <div key={index} className='w-full hover:bg-zinc-300 dark:hover:bg-zinc-900 pl-3 cursor-pointer select-none p-2 rounded-md' >
                                    <h3> {e && e.split('-').join(' ')}</h3>
                                </div>
                            </Link>

                        ))

                    )
                        :
                        (
                            <p className='text-white'>No Language Found</p>
                        )

                    }
                </div>
            </div>
            <div className='w-full flex items-center justify-center flex-col'>
                <div className='w-[85%] p-2'>
                    <h1 className='font-bold select-none text-xl text-left'>Popular</h1>
                </div>
                <PopularSection />
            </div>
            <div className='w-full flex items-center justify-center flex-col'>
                <div className='w-[85%] p-2'>
                    <h1 className='font-bold select-none text-xl text-left'>About BrilliCode</h1>
                </div>
                <p className='text-balance w-[85%] text-center'>Welcome to the ultimate online code compiler, a powerful and intuitive platform designed to support developers of all levels. With support for more than 15 programming languages, including popular choices like JavaScript, Python, and Java, as well as unique languages like Jelly, Dart, and Perl, you can write, run, and test your code seamlessly in one place. Experience lightning-fast execution and real-time output without the hassle of installations or setup. Completely free to use, this compiler is perfect for quick debugging, learning, or building small projects. If you enjoy using this platform, consider supporting us with a donation or buying us a coffee to help keep this tool accessible for everyone. Start coding smarter today!</p>

            </div>
            <Footer />
        </div>
    )
}

export default HomeHeader