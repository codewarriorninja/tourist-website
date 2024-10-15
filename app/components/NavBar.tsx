'use client'
import { useState } from "react"
import { Menu, X} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavLinks } from "../constant"
import Button from "./Button"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <nav className="absolute top-5 py-2 z-50 w-full">
      <div className="max-conatiner padding-container flex justify-between items-center bg-transparent z-50">
        <Image src='/logo.png' alt="logo" width={154} height={41} priority={true} className="cursor-pointer"/>
        <ul className="hidden lg:flex items-center space-x-8 text-black font-Inter">
           {NavLinks.map((navlink) => (
            <li key={navlink.key}>
                <Link href={navlink.href} onClick={() => setIsOpen(false)} className="hover:font-semibold font-Inter text-base text-white">{navlink.label}</Link>
            </li>
           ))} 
            <Button
            type='button'
            title='Take a Trip'
            />
        </ul>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className=" w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
          </button>
        </div>
        {isOpen && (
            <ul className="bg-white/10 backdrop-blur-3xl absolute top-16 left-0 w-full flex flex-col items-center space-y-4 py-4 transition-all duration-500 lg:hidden">
              {NavLinks.map((navLink) => (
                <li key={navLink.key}>
                  <Link href={navLink.href} className="hover:font-semibold font-Inter text-base text-white">{navLink.label}</Link>
                </li>
              ))}
            </ul>
        )}
      </div>
    </nav>
  )
}

export default NavBar