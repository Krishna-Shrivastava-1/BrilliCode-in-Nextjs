'use client'

// import CodeEditor from "@/components/CodeEditor";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import HomeNavbar from "@/components/HomeNavbar";
import ShowSpooner from "@/components/ShowSpooner";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { toast } = useToast()

  // useEffect(() => {
    // Define the timer using `const`
  //   const timer = setInterval(() => {
  //     toast({
  //       title: "Support Us!",
  //       description: "If you enjoy our work, consider buying us a coffee ☕ or making a donation to keep us going. 🙌",
  //     });
  //   }, 10000);

  //   // Cleanup function to clear the interval
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

 
  return (
    <div>
      <div className="sticky top-0 z-50 w-full">
        <HomeNavbar />
      </div>
      <div>
        <HomeHeader />
      </div>
      <ShowSpooner />

    </div>
  );
}
