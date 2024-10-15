import Image from "next/image"
import { NavLinks } from "../constant"
import Button from "./Button"
import Link from "next/link"
import { InstagramIcon } from "lucide-react"
import { LinkedinIcon } from "lucide-react"
import { FacebookIcon } from "lucide-react"
const Footer = () => {
  return (
    <section className="w-full pt-16 pb-4">
      <div className="max-container padding-container">
        <div className="flex justify-between items-center flex-wrap gap-8 pb-7">
        <Image src='/secondLogo.png' alt="logo" width={154} height={41} priority className="max-sm:mx-auto"/>
        <ul className="flex items-center justify-center flex-wrap gap-8 text-black font-Inter max-sm:mx-auto">
           {NavLinks.map((navlink) => (
            <li key={navlink.key}>
                <Link href={navlink.href} className="hover:font-semibold font-Inter text-base text-black">{navlink.label}</Link>
            </li>
           ))} 
            <Button
            type='button'
            title='Take a Trip'
            color="button_black"
            />
        </ul>
        </div>
        <hr></hr>
        <div className="flex items-center justify-between flex-wrap gap-8 pt-5">
          <span className="font-Inter font-medium text-base text-black max-sm:mx-auto">copyright@ prydetravel 2024</span>
          <div className="flex items-center max-sm:mx-auto gap-5 pb-3">
           <InstagramIcon />
           <LinkedinIcon />
           <FacebookIcon />
          </div>
        </div>
        <code className="text-black font-playFair font-bold text-base"><Link href='https://github.com/codewarriorninja' className="max-sm:flex max-sm:justify-center max-sm:items-center">Develop by Henok Aragaw</Link></code>
      </div>
    </section>
  )
}

export default Footer