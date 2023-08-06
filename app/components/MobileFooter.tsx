import Input from "./Input"

const MobileFooter = () => {
  return (
    <div 
      className="
        flex 
        flex-col
        md:hidden
        w-full
        bg-footer-bg
        px-7
        py-10
        bg-no-repeat
        bg-cover
        pb-24
        sm:pb-10
    ">
      <h3 className="font-extrabold text-3xl">
        Stay Connected
      </h3>
      <p className="max-w-[380px] mt-5 mb-12">
        From cult classics to modern masterpieces.
        Stay updated with the latest movies, 
        news and articles from INDI.
      </p>
      <form className="flex flex-col items-start justify-start gap-6">
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
  )
}

export default MobileFooter