import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import AboutProfile from "../public/assets/about.png";

export default function Reference() {
  return (
    <div>
      <Meta title="Soccer Match" />

      <Header />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={AboutProfile}
            width="400"
            height="400"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Daffa Abhyasa Santoso
            </h1>
            <p class="mb-8 leading-relaxed">
              Hi there! Still learning to tell computers what to do. Sometimes
              they listen. This app is created as a practice for developing a
              Mobile Device Program. If the API wont load, it means the limit
              have been exceeded. Sorry
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
