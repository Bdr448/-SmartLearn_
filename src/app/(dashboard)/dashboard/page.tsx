import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | SmartLearn',
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10 p-6 sm:p-10 bg-gray-50 min-h-screen">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-tight">Welcome back, Bhavya 👋</h1>
        <p className="mt-2 text-sm sm:text-base text-blue-100">
          Let’s continue your learning journey!
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Start New Course', icon: '🎯' },
          { label: 'Resume Last Lesson', icon: '⏯️' },
          { label: 'Join Live Class', icon: '📡' },
          { label: 'View Certificates', icon: '📄' },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-xl p-4 text-center shadow hover:shadow-md transition">
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="text-sm font-medium text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: 'Courses Enrolled', value: 5 },
          { label: 'Lessons Completed', value: 23 },
          { label: 'Progress', value: '76%' },
          { label: 'Certificates Earned', value: 2 },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Learning Progress */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">📈 Your Progress</h2>
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[76%] rounded-full transition-all duration-700"></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">You’ve completed 76% of your course.</p>
      </div>

      {/* Upcoming Classes */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">📅 Upcoming Classes</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li>🧠 AI & Ethics - <span className="text-blue-600">Today, 5 PM</span></li>
          <li>📊 Data Structures - <span className="text-blue-600">Tue, 11 AM</span></li>
          <li>⚙️ Machine Learning 101 - <span className="text-blue-600">Fri, 6 PM</span></li>
        </ul>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">🕒 Recent Activity</h2>
        <ol className="relative border-l border-gray-300 ml-2">
          {[
            'Completed Lesson 4: Loops in Python',
            'Attended Live Class: Intro to AI',
            'Scored 85% in Quiz: JavaScript Basics',
            'Enrolled in: Data Structures & Algorithms',
          ].map((event, i) => (
            <li key={i} className="mb-4 ml-4">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-1" />
              <p className="text-sm text-gray-700">{event}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Recommended Courses */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">⭐ Recommended Courses</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'UI/UX Design for Beginners',
            'Python for Data Science',
            'React & Next.js Mastery',
          ].map((course) => (
            <div
              key={course}
              className="bg-gradient-to-r from-indigo-100 to-blue-100 p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <p className="font-semibold text-blue-800">{course}</p>
              <p className="text-sm text-gray-600 mt-1">4 weeks · Beginner</p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Goals */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">🎓 Your Learning Goals</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>✅ Complete 3 courses this month</li>
          <li>✅ Practice coding 5 hours/week</li>
          <li>✅ Build 1 personal project</li>
        </ul>
      </div>
    </div>
  );
}
