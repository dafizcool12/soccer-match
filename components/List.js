import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function List() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://www.scorebat.com/video-api/v3/feed?token=${process.env.NEXT_PUBLIC_API_TOKEN}`
      )
        .then((response) => response.json())
        .then((response) => setData(response.response))
        .catch((err) => console.error(err));
    }, 250);
  });

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-24 h-full bg-indigo-500"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Watch football
              </h1>
              <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Missed your favourite football team recent match? Dont worry!
                Search the match you want to watch below from hundreds of recent
                matches.
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -m-4">
          {data === null ? (
            <p class="mx-auto text-center font-bold">Loading...</p>
          ) : (
            data.map((item, index) => <ItemCard key={index} data={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
