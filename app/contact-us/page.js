import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Mobile Shop</title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <nav className="bg-gradient-to-r from-blue-700 to-purple-600 p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">📱 Softer Cell</h1>
            <Link href="/">
              <button className="bg-white text-blue-600 px-5 py-2 rounded-full shadow-md font-semibold transition hover:bg-gray-200">
                Home
              </button>
            </Link>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-10 flex-grow">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Contact Us
          </h2>
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-500 text-white py-2 rounded-lg shadow-md hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <footer className="bg-gradient-to-r from-blue-700 to-purple-600 text-white text-center py-4 mt-10">
          <p>&copy; 2025 Mobile Shop. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
