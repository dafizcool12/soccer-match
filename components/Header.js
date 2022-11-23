import Link from "next/link";
import Image from "next/image";
import HeaderIcon from "../public/assets/soccer-ball.png";

export default function Header() {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            src={HeaderIcon}
            alt="Header Icon"
            width="40"
            height="40"
          />
          <span class="ml-3 text-xl">Soccer Match</span>
        </Link>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/" class="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/watch" class="mr-5 hover:text-gray-900">
            Watch
          </Link>
          <Link href="/reference" class="mr-5 hover:text-gray-900">
            Reference
          </Link>
          <Link href="/faq" class="mr-5 hover:text-gray-900">
            FAQ
          </Link>
          <Link href="/about" class="mr-5 hover:text-gray-900">
            About App
          </Link>
        </nav>
      </div>
    </header>
  );
}
