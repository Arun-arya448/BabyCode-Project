export default function Contact() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        Contact Us
      </h2>

      <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <p className="text-gray-600"><strong>Email:</strong> info@ieltsinstitute.com</p>
          <p className="text-gray-600"><strong>Phone:</strong> +91 98765 43210</p>
          <p className="text-gray-600"><strong>Address:</strong> 123, IELTS Street, Delhi, India</p>
        </div>

        {/* Simple Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
