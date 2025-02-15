import Image from "next/image";
import Link from "next/link";
import { Footer } from "./components/footer";
const images = [
  { src: "/phone.webp", alt: "Shop View", orientation: "horizontal" },
  { src: "/laptop.jpg", alt: "Interior", orientation: "horizontal" },
  {
    src: "/PHOTO-2025-02-15-23-02-11.jpg",
    alt: "Mobile Display",
    orientation: "horizontal",
  },
];
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-gradient-to-r from-blue-700 to-purple-600 p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">📱 Softer Cell</h1>
          </div>
        </nav>

        {/* Hero Section */}
        <header
          className="relative bg-center md:h-[650px] h-[200px] flex flex-col text-center text-white"
          style={{
            backgroundImage: "url('/background.jpg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-extrabold">Best Mobile Deals & Accessories</h2>
            <p className="text-lg mt-2">Latest smartphones, gadgets, and repair services all in one place.</p>
            <Link href="/contact">
              <button className="mt-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-300 transition">
                Get in Touch
              </button>
            </Link>
          </div> */}
        </header>

        {/* About Us Section */}
        <section className="container mx-auto px-6 py-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800">Why Choose Us?</h3>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            We offer the{" "}
            <strong>
              best quality mobile phones, accessories, and repair services
            </strong>{" "}
            at unbeatable prices.
          </p>

          {/* Features Grid */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {/* Latest Phones */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold">📱 Latest Phones</h4>
              <p className="text-gray-600 mt-2">
                Find the latest smartphones at the best prices.
              </p>
              <div className="mt-4">
                <Image
                  src="/output.jpg"
                  alt="Latest Phones"
                  width={1000}
                  height={2000}
                  className="rounded-lg shadow-md hover:scale-105 transition duration-300 mx-auto"
                />
              </div>
            </div>

            {/* Accessories */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold">⚡ Accessories</h4>
              <p className="text-gray-600 mt-2">
                Get high-quality chargers, cases, and headphones.
              </p>
              <div className="mt-4">
                <Image
                  src="/accessories.png"
                  alt="Mobile Accessories"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md hover:scale-105 transition duration-300 mx-auto"
                />
              </div>
            </div>

            {/* Repairs */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold">🔧 Repairs</h4>
              <p className="text-gray-600 mt-2">
                Fast and affordable mobile repair services.
              </p>
              <div className="mt-4">
                <Image
                  src="/repair.png"
                  alt="Mobile Repair"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md hover:scale-105 transition duration-300 mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {/* Gallery Section */}
        <section className="bg-gray-200 py-12">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800">Our Shop</h3>
            <p className="text-gray-600 mt-2">Take a look inside our store!</p>

            {/* Gallery Grid */}
            <div className="mt-6 grid md:grid-cols-3 gap-6 px-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`rounded-lg shadow-lg overflow-hidden bg-white p-2 
                ${
                  image.orientation === "horizontal"
                    ? "aspect-[16/9]"
                    : "aspect-[3/4]"
                }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-md hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="mt-6">
              <Link href="/gallery">
                <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
}
