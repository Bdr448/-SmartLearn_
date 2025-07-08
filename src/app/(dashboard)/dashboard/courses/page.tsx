'use client';

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "AI Fundamentals",
      description: "Learn the basics of AI, its history, and applications.",
      level: "Beginner",
      duration: "4 Weeks",
      icon: "🤖",
    },
    {
      id: 2,
      title: "Machine Learning 101",
      description: "Get started with supervised and unsupervised learning.",
      level: "Intermediate",
      duration: "6 Weeks",
      icon: "📊",
    },
    {
      id: 3,
      title: "Prompt Engineering",
      description: "Master the art of writing effective AI prompts.",
      level: "Advanced",
      duration: "3 Weeks",
      icon: "✍️",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">📚 Available Courses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">{course.icon}</div>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {course.level}
              </span>
            </div>

            <h2 className="text-xl font-bold text-gray-800">{course.title}</h2>
            <p className="text-sm text-gray-600 mt-2 mb-4">{course.description}</p>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>⏱ {course.duration}</span>
              <span className="text-green-600">🔥 Popular</span>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition">
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
