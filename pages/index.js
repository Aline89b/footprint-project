import Navbar from "../components/navbar";
import Link from "next/link";


export default function Home() {
  return (
    <div className=" h-full dark:text-black">
     <section className=" w-full absolute bg-[url(../public/images/bgWorld.svg)]  bg-cover bg-center bg-no-repeat">
    
        <Navbar />
        
        <div className="relative mx-auto my-auto max-w-screen-xl px-4 pt-32 pb-[7.2rem] sm:px-6 lg:flex lg:h-screen lg:items-center justify-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Planning your next
              <strong className="block font-extrabold text-green-700">
                travel
              </strong>
              and you want to know
              <strong className="block font-extrabold text-green-700">
                your impact on the world?
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Click the green button down here to discover the flight footprint
              of your travel or Learn more to get some info directly to you e
              mail adress.
            </p>

            <div className="mt-8 sm:flex flex-wrap gap-4 text-center">
              <Link href="/form">
                <div className="animate-bounce block w-full rounded-lg bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto">
                  Check it now!
                </div>
              </Link>
              <Link
                href="/jsForm"
                className=" block w-full rounded-lg bg-white border-2 border-green-600 px-12 py-3 text-sm mt-6 sm:mt-0 font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto "
              >
                Tell me more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
