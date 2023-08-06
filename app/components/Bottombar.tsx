import Image from "next/image";
import Link from "next/link";

import { routes } from "../constants";

const Bottombar = () => {
  return (
    <nav 
      className='
        fixed
        bottom-0
        h-[56px]
        w-full 
        bg-sidebar 
        sm:hidden
        flex 
        flex-row
        items-center
        justify-between
        px-7
    '>
      <div 
        className="
          w-full 
          max-w-[420px] 
          mx-auto 
          flex 
          items-center 
          justify-between
      ">
        {routes.map((route) => (
          <Link
            key={route.alt}
            href={route.href}
            className="p-3 hover:bg-zinc-800 transition ease-in rounded-full"
          >
            <Image 
              src={route.icon}
              alt={route.alt}
              width={19}
              height={19}
            />
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Bottombar