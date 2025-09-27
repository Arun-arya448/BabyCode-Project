const testimonials = [
  {
    name: "Anita Sharma",
    role: "Student",
    review:
      "The mock tests and speaking practice really helped me boost my confidence. Highly recommend!",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Student",
    review:
      "The AI Band Score feature is amazing! I could track my progress and improve fast.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Singh",
    role: "Student",
    review:
      "Excellent mentors and structured courses. I achieved my dream IELTS score!",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Students Say
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Hear from students who achieved success with our IELTS program.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {t.name}
              </h3>
              <p className="text-gray-500 text-sm">{t.role}</p>
              <p className="mt-3 text-gray-600 text-sm">{t.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
