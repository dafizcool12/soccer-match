import Meta from "../components/Meta";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
import Footer from "../components/Footer";
import NextJsCarousel from "../components/NextJsCarousel";

export default function Home() {
  return (
    <div>
      <Meta title="Soccer Match" />

      <Header />

      <NextJsCarousel />

      <NewsList />

      <Footer />
    </div>
  );
}
