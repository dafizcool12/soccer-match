import Slider from "./Slider";

export default function BannerSlider() {
  const images = [
    "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
  ];

  return (
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Slider
        slides={images}
        size="medium"
        slideInterval={6}
        inContainer
        className="mt-20 mb-20"
      />
      <Slider slides={images} size="medium" slideInterval={2} />
    </div>
  );
}
