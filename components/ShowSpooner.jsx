'use client'
import { toast } from '@/hooks/use-toast';
import React, { useEffect } from 'react'
import { Button } from './ui/button';
import { ToastAction } from '@radix-ui/react-toast';
import Link from 'next/link';

const ShowSpooner = () => {
    useEffect(() => {
        // Define the timer using `const`
        const timer = setInterval(() => {
            toast({
                title: "Support Us!",
                description: "If you enjoy our work, consider buying us a coffee ☕ or making a donation to keep us going. 🙌",
                action: <Link href={'/donation'}><ToastAction altText="Try again">Donate</ToastAction></Link>,
            })
        }, 300000);

   
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>

        </div>
    )
}

export default ShowSpooner