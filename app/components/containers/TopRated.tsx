import { topMovies } from "@/app/constants";
import MovieCard from "../MovieCard";

const RercentlyAdded = () => {
  return (
    <section className="w-full max-w-[1520px] mx-auto">
      <h2 className="mb-10 text-lg sm:text-xl w-fit">
        Top Rated Films
      </h2>
      <div 
        className="
          w-full 
          grid 
          grid-responsivity
          grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-4
      ">
        {topMovies.map((movie) => (
          <MovieCard 
            movie={movie}
          />
        ))}
      </div>
    </section>
  )
}

export default RercentlyAdded