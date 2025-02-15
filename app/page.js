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

        <header
          className="relative bg-center md:h-[650px] h-[200px] flex flex-col text-center text-white"
          style={{
            backgroundImage: "url('/background.jpg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></header>

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

        <section
          id="repair-services"
          className="container mx-auto px-6 py-12 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800">
            🔧 Our Repair Services
          </h3>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            We provide expert <b>cell phone repair services</b> for{" "}
            <b>iPhone, Android, and all major brands.</b>
            Whether it's a cracked screen, battery issue, or water damage—
            <b>we fix it all!</b>
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold">📱 iPhone Repairs</h4>
              <p className="text-gray-600 mt-2">
                Top <b>iPhone Repair in Saskatoon!</b> We offer high-quality,
                cost-effective repairs for all iPhone models, from screen damage
                to button issues and software updates.
              </p>
              <Image
                src="/repairiphone.png"
                alt="iPhone Repair"
                width={300}
                height={200}
                className="rounded-lg shadow-md hover:scale-105 transition duration-300 mx-auto"
              />
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold">🤖 Android Repairs</h4>
              <p className="text-gray-600 mt-2">
                We repair
                <b> Samsung Galaxy, BlackBerry, HTC, and Motorola devices,</b>
                fixing issues like cracked screens, water damage, keypad
                failures, and software problems with expert care.
              </p>
              <Image
                src="/androidrepair.jpg"
                alt="Android Repair"
                width={300}
                height={200}
                className="rounded-lg shadow-md hover:scale-105 transition duration-300 mx-auto"
              />
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold">🔓 Unlocking Service</h4>
              <p className="text-gray-600 mt-2">
                <b>Break free from carrier restrictions!</b> We offer
                professional phone unlocking services, giving you the freedom to
                use any network—locally or overseas.
              </p>
              <Image
                src="/unlock.jpg"
                alt="Phone Unlocking"
                width={300}
                height={200}
                className="rounded-lg shadow-md hover:scale-105 transition duration-300 mx-auto"
              />
            </div>
          </div>
        </section>

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
