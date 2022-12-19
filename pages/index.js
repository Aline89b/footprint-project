import Head from 'next/head'
import Form from "../public/src/components/form"
import { Autocomplete, TextField } from "@mui/material"
import { useRef } from "react"
import Result from "../public/src/components/result"

export default function Home() {
const footprint = useRef(null)
const scrollDown = () => {
  window.scrollTo({
    top: footprint.current.offsetTop,
    behavior: 'smooth',
  });
};

  return (
   
    <div>
      <Head />
      <section
  class="relative bg-[url(../public/images/bg.img.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
  ></div>

  <div
    class="relative mx-auto my-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center justify-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Let us find your

        <strong class="block font-extrabold text-green-700">
          Forever Home.
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          onClick={scrollDown}
          class="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
        >
          Check it now!
        </a>

        <a
          href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
<section className="p-3" ref ={footprint}>
  <h1 className="text-black text-2xl font-bold text-center my-10">Let's start</h1>
  <Form />
  <Result />
</section>

    </div>
  )
  
} 


