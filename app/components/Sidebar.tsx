import Image from "next/image";
import Link from "next/link";

import { routes } from "../constants";

const Sidebar = () => {
  return (
    <nav 
      className='
        fixed
        h-full 
        w-[110px] 
        bg-sidebar 
        hidden
        sm:flex 
        flex-col
        items-center
        justify-start
        py-7
    '>
      <div 
        className="
          flex
          flex-col
          items-center
          space-y-8
      ">
        <Image 
          src="/images/indi-logo.svg"
          width={40}
          height={32}
          alt="logo"
        />
        {routes.map((route) => (
          <Link
            key={route.alt}
            href={route.href}
            className="p-3 hover:bg-zinc-800 transition ease-in rounded-full"
          >
            <Image 
              src={route.icon}
              alt={route.alt}
              width={16}
              height={16}
            />
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar