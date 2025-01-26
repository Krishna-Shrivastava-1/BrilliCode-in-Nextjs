import Link from 'next/link';
import React from 'react'

const Footer = () => {
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
    ];
    return (
        <div className='w-full flex items-start  justify-start md:w-[85%] flex-wrap gap-x-4 p-2 mt-5 rounded-lg border border-zinc-500'>
            <div className=''>
                <h1 className='font-bold select-none text-xl text-left'>BrilliCode</h1>
                <p className='text-zinc-400'>All rights are reserved 2025</p>
            </div>
            {/* <div className='w-full' >
                <h2 className='font-bold'>Languages</h2>
                <div className='flex items-start justify-around '>
                    <div className='flex flex-col items-center '>
                        {
                            languages.slice(0, 8).map((r, index) => (
                                <Link key={index} href={`/language/${r.value.toLowerCase()}`}>
                                <div className='hover:text-sky-500 cursor-pointer select-none'>
                                    <p>{r.label}</p>
                                </div>
                                </Link>
                                
                            ))
                        }
                    </div>
                    <div className='flex flex-col items-center'>
                        {
                            languages.slice(8, 16).map((r, index) => (
                                <Link key={index} href={`/language/${r.value.toLowerCase()}`}>
                                <div  className='hover:text-sky-500 cursor-pointer select-none'>
                                    <p>{r.label}</p>
                                </div>
                                </Link>
                            ))
                        }
                    </div>

                </div>
            </div> */}

        </div>
    )
}

export default Footer