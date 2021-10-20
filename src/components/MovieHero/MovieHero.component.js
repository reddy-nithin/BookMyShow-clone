import React from "react";
import launchRazorPay from "../../pages/Movie.page.js";

const MovieHero = () => {
  return (
    <>
   <div className="md:hidden">
    <img
      src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg"
      alt="poster"
     />
   </div>

   <div className="hidden md:block lg:hidden">
   <img
     src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg"
     alt="poster"
    />
   </div>

   <div className="relative hidden lg:block" style={{height: "40rem"}}>

<div className="absolute h-full w-full z-10"
style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
/>

<div className="absolute z-30 w-64 h-96 left-10 top-10">
<div className=" flex flex-row w-full max-w-screen-lg">
<img
src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg"
alt="poster"
className="h-full w-full rounded-xl"
/>
</div>


<div className="absolute z-30 w-96 h-96 left-64 top-1  ">
     <div className="flex flex-col gap-4 pl-8">
        <div>
           <h1 className="text-3xl font-bold text-white ">The SUICIDE SQUAD</h1>
        </div>
        <div className="conatiner rounded w-full h-16 flex ">
         <div className="flex flex-col  items-start w-2/3" >
          <h2 className="text-white font-bold ml-1 text-left  h-1/2">
             4K - ENGLISH
          </h2>
          <h2 className="text-white h-1/2 ml-1"> LANGUAGES - Audio(4)</h2>
         </div>
  

        </div>
        <div className="container h-15 gap-2">
           <div className=" w-52 rounded-sm">
           <a className=" text-white ml-2 text-sm">2D, 3D, IMAX-4D, 4DX</a>
           </div>
           <div className=" w-82 mt-2 rounded-sm">
           <a className="text-white ml-2 text-sm">  English, Tamil, Hindi, Telugu</a>
           </div>
        </div>


           <button onClick={launchRazorPay} class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
            Book tickets
           </button>
     </div>
     </div>

</div>

   <img
     src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg"
     alt="poster"
     className="w-full h-full"
    />
</div>
    </>
  )
};

export default MovieHero;
