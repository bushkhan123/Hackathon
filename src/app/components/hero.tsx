import Image from 'next/image'
import React from 'react'
import { IoSearch } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/sheet"
import Link from "next/link";
const Hero = () => {
  return (
    <>
<header className="max-w-[1440px] h-[132px] flex flex-col items-center bg-white px-10 lg:w-full mx-auto">
        <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center">
          {/* Left: Search icon on large screens */}
          <div className="flex items-center gap-3 lg:flex-1">
            <div className="lg:block hidden">
              <IoSearch className="text-xl" />
            </div>
          </div>

          {/* Avion Title */}
          <h1 className="text-[#22202E] text-2xl font-semibold text-left lg:text-center">
            Avion
          </h1>

          {/* Right: Cart and Profile icons for large screens */}
          <div className="hidden lg:flex gap-3 text-xl lg:flex-1 justify-end">
           
            <div className="cursor-pointer lg:hidden flex flex-col gap-1 font-light">
              
                <span className="block w-6 h-1 bg-black"></span>
                <span className="block w-6 h-1 bg-black"></span>
                <span className="block w-6 h-1 bg-black"></span>
              </div>
            {/* </SheetTrigger> */}
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 text-lg text-[#726E8D]">
                <Link href="/" className="hover:text-[#5a526c]">
                 
                </Link>
                <Link href="/" className="hover:text-[#5a526c]">
                  
                </Link>
                <Link href="/" className="hover:text-[#5a526c]">
                  
                </Link>
                <Link href="/" className="hover:text-[#5a526c]">
                 
                </Link>
                <Link href="/" className="hover:text-[#5a526c]">
                 
                </Link>
                <Link href="/" className="hover:text-[#5a526c]">
                 
                </Link>
                <Link href="/" className="hover:text-[#5a526c]">
                 
                </Link>
              </nav>
            </SheetContent>
          {/* </Sheet>  */}
        </div>
</div>
        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex w-[675px] justify-between items-center h-1/2 text-[#726E8D]">
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Plant pots
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Ceramics
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Tables
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Chairs
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Crockery
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Tableware
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Cutlery
          </Link>
        </nav>
      </header>

      <section>
        <div className='px-8 py-12'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-[60%] h-auto md:h-[580px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between'>
              <div>
                <h1 className='text-xl md:text-3xl md:text-left'>
                  The furniture brand for the future with <br /> the timeless designs
                </h1>
                <div className='flex justify-center md:justify-start'>
                  <button className='w-[170px] h-[56px] bg-transparent text-white border border-gray-600 font-bold mt-12'>
                    View collection
                  </button>
                </div>
              </div>

              <div className='my-4 md:my-0'>
                <p className='text-sm md:text-base md:text-left'>
                  A new era in eco-friendly furniture with Avion, the French luxury retail brand
                  <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
                  <br /> using modern web technologies.
                </p>
              </div>
            </div>

            <div className='w-full md:w-[40%] h-auto md:h-[580px] bg-white flex justify-center items-end'>
              <Image src={'/chair.png'} width={471} height={400} alt='right' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;