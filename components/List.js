import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function List() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://www.scorebat.com/video-api/v3/feed?token=${process.env.NEXT_PUBLIC_API_TOKEN}`)
      .then((response) => response.json())
      .then((response) => setData(response.response))
      .catch((err) => console.error(err));
  });
  
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap w-full mb-12">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Watch football from all over the world
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Missed your favourite football team recent match? Dont worry! 
            Search the match you want to watch below from hundreds of recent matches.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          {
            data === null ?
            (<p class="mx-auto text-center font-bold">Loading...</p>) :
            data.map((item, index) => (<ItemCard key={index} data={item} />))
          }
        </div>
      </div>
    </section>
  );
}
