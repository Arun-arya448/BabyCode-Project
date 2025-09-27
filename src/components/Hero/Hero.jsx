export default function Hero() {
  return (
    <section id="home" className="bg-gray-50 pt-20 md:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Achieve Your <span className="text-blue-600">Dream IELTS Score</span>
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg">
            Join thousands of students improving their English with expert mentors, AI-driven feedback, and unlimited practice tests.
          </p>
          <div className="mt-8">
            <a
              href="#courses"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZGVudHMlMjBpbiUyMGNsYXNzfGVufDB8fDB8fHww"
            alt="IELTS Learning"
            className="rounded-xl shadow-lg w-full h-72 md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
