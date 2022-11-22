import Image from "next/image";
import Link from "next/link";

export default function NewsCard(props) {
  return (
    <div class="xl:w-1/4 md:w-1/2 p-4">
      <Link
        href={{
          pathname: "/detailnews",
          query: { data: JSON.stringify(props) },
        }}
      >
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image
            class="h-40 rounded w-full object-cover object-center mb-6"
            src={props.data.Image}
            alt="content"
            width="720"
            height="400"
          />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
            {props.data.PublisherDate}
          </h3>
          <h2 class="text-lg text-gray-900 font-medium title-font">
            {props.data.Title}
          </h2>
        </div>
      </Link>
    </div>
  );
}
