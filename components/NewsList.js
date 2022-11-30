import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4c99382be4mshc7b7622efa3f01ap122ba1jsna54b409e8d7c",
    "X-RapidAPI-Host": "football98.p.rapidapi.com",
  },
};
export default function List() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://football98.p.rapidapi.com/premierleague/news", options)
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => console.error(err));
    }, 250);
  });

  return (
    <section class="text-gray-600 body-font">
      <div class="flex flex-wrap w-full mb-12">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            All about football , All over the world
          </h1>
          <div class="h-1 w-20 bg-gray-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Learn the latest news of your favorite football club. From player
          transfer, award, score and more behind the scene of your beloved sport
        </p>
      </div>
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap -m-4">
          {data === null ? (
            <p class="mx-auto text-center font-bold">Loading...</p>
          ) : (
            data.map((item, index) => <NewsCard key={index} data={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
