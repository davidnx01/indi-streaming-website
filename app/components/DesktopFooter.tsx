import Image from "next/image"
import Input from "./Input"

const DesktopFooter = () => {
  return (
    <div 
      className="
        w-full 
        bg-footer 
        hidden
        md:flex 
        justify-between 
        items-center
        md:pl-8 lg:pl-12
        gap-4
    ">
      <div>
        <h3 className="text-[2.5rem] font-extrabold">
          Stay Connected
        </h3>
        <p className="my-12">
          From cult classics to modern masterpieces.<br />
          Stay updated with the latest movies, news and articles from INDI.
        </p>
        <form className="flex gap-5 items-center">
          <Input 
            type="email"
            placeholder="Your Email..."
          />
          <button 
            className="
              text-white
              border
              border-white
              outline-none
              py-1.5
              px-6
              rounded-2xl
          ">
            Submit
          </button>
        </form>
      </div>

      <div 
        className="
          md:w-[250px]
          lg:w-[420px]
          2xl:w-[500px]
          relative
          md:h-[280px]
          lg:h-[375px]
          2xl:h-[425px]
      ">
        <Image 
          src="/images/cinema.jpg"
          fill
          alt="Cinema"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  )
}

export default DesktopFooter