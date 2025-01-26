import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

const PopularSection = () => {
  const languages = [
    { value: "javascript", label: "JavaScript", img: 'https://onecompiler.com/images/logos/javascript.svg' },
    { value: "typescript", label: "TypeScript", img: 'https://onecompiler.com/images/logos/typescript.svg' },
    { value: "python", label: "Python", img: 'https://onecompiler.com/images/logos/python.svg' },
    { value: "java", label: "Java", img: 'https://onecompiler.com/images/logos/java.svg' },
    { value: "php", label: "PHP", img: 'https://onecompiler.com/images/logos/php.svg' },
    { value: "csharp", label: "C#", img: 'https://onecompiler.com/images/logos/csharp.svg' },
    { value: "c", label: "C", img: 'https://onecompiler.com/images/logos/c2.svg' },
    { value: "cpp", label: "C++", img: 'https://onecompiler.com/images/logos/cpp.svg' },
    { value: "swift", label: "Swift", img: 'https://onecompiler.com/images/logos/swift.svg' },
    { value: "rust", label: "Rust", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuIvfgAHh-SNLfXoMmwN99omnfvgT335aWQ&s' },
    // { value: "r", label: "R" },
    { value: "ruby", label: "Ruby", img: 'https://onecompiler.com/images/logos/ruby.svg' },
    { value: "go", label: "Go", img: 'https://onecompiler.com/images/logos/go.svg' },
    { value: "kotlin", label: "Kotlin", img: 'https://onecompiler.com/images/logos/kotlin.svg' }
  ];
  // console.log(languages)
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 grid-row-auto w-[85%] gap-x-4'>
      {
        languages.slice(0, 12).map((e, index) => (
          <div key={index} className='' >
            <Link href={`/language/${e.value.toLowerCase()}`}>
              <Button variant={'outline'} className='m-2 w-full flex justify-between p-6 transition-all duration-300'>
                <h2 className='font-bold'>{e.label}</h2>
                {e.img && ( // Only render Image if e.img exists and is not empty
                  <Image src={e.img} alt={e.label} width={30} height={30} />
                )}
              </Button>
            </Link>


          </div>
        ))
      }
    </div>
  )
}

export default PopularSection