import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/footer";

export default function Gallery() {
  const images = [
    "/PHOTO-2025-02-15-22-58-55.jpg",
    "/PHOTO-2025-02-15-22-00-14.jpg",
    "/PHOTO-2025-02-15-22-57-57.jpg",
    "/PHOTO-2025-02-15-22-00-23.jpg",
    "/PHOTO-2025-02-15-23-00-43.jpg",
    "/PHOTO-2025-02-15-22-00-31.jpg",
    "/PHOTO-2025-02-15-22-00-39.jpg",
    "/PHOTO-2025-02-15-22-00-48.jpg",
    "/PHOTO-2025-02-15-22-58-19.jpg",
  ];

  return (
    <>
      <Head>
        <title>Gallery - Softer Cell</title>
        <meta name="description" content="Explore our mobile shop gallery." />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-gradient-to-r from-blue-700 to-purple-600 p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">📱 Softer Cell</h1>
            <div className="flex md:space-x-4 space-x-2">
              <Link href="/">
                <button className="bg-white text-blue-600 px-5 py-2 rounded-full shadow-md font-semibold transition hover:bg-gray-200">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Gallery Section */}
        <section className="container mx-auto px-6 py-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800">
            Take a Look Inside
          </h3>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            See our shop and the products we offer.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg shadow-md hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </section>

        <Footer></Footer>
      </div>
    </>
  );
}
