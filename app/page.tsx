import { 
  Footer, 
  Hero, 
  TopRated, 
  RercentlyAdded 
} from "./components/containers";

export default function Home() {
  return (
    <>
      <main 
        className="
          bg-main 
          text-white 
          sm:pl-[110px]
          h-full
      ">
        <Hero />
        <div 
          className="
            py-10 sm:py-14 md:py-20
            px-10 md:px-12
            space-y-24
            w-full
            bg-main
        ">
          <RercentlyAdded />
          <TopRated />
        </div>
        <Footer />
      </main>
    </>
  )
}