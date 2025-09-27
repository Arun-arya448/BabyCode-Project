import { MessageCircle, FileText, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="w-10 h-10 text-blue-600" />,
    title: "Speaking Practice",
    desc: "Interactive speaking sessions with instant feedback to boost confidence.",
  },
  {
    icon: <FileText className="w-10 h-10 text-blue-600" />,
    title: "Mock Tests",
    desc: "Full-length IELTS mock tests that simulate the real exam environment.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
    title: "AI Band Score",
    desc: "Get instant AI-evaluated band scores and track your improvement.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Expert Mentors",
    desc: "Learn from certified IELTS trainers with years of teaching experience.",
  },
];

export default function Features() {
  return (
    <section id="courses" className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          We provide everything you need to prepare effectively and achieve your dream IELTS band score.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
