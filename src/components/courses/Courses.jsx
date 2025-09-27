export default function Courses() {
  const courses = [
    {
      title: "Speaking Practice",
      desc: "Interactive sessions to improve fluency.",
      image: "https://images.unsplash.com/photo-1660795670724-0dfa88fc1dda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNwZWFraW4lMjBwcmFjdGljZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Writing Modules",
      desc: "Master academic & general writing tasks.",
      image: "https://images.unsplash.com/photo-1752578753798-ff3a23e16498?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V3JpdGluZyUyME1vZHVsZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Reading Practice",
      desc: "Timed reading exercises for speed & accuracy.",
      image: "https://images.unsplash.com/photo-1720465593245-570d0a6c482f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UmVhZGluZyUyMFByYWN0aWNlfGVufDB8fDB8fHww"
    },
    {
      title: "Listening Modules",
      desc: "Practice real IELTS listening tests.",
      image: "https://plus.unsplash.com/premium_photo-1680807868977-38d4d1c27810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGlzdGVuaW5nfGVufDB8fDB8fHww"
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        Our Courses
      </h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((c, idx) => (
            <div
                key={idx}
                className="relative bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 overflow-hidden"
                >
                <img
                src={c.image}
                alt={c.title}
                className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
                <p className="text-white text-sm">{c.desc}</p>
            </div>
        </div>

        ))}
      </div>
    </section>
  );
}
