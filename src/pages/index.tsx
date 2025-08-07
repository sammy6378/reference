import React, { useState, useEffect } from "react";
import {
  Code2,
  BookOpen,
  Zap,
  ArrowRight,
  Play,
  Rocket,
  Check,
  Search,
} from "lucide-react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("javascript");
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedCount((prev) => (prev + 1) % 1000);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const technologies = [
    {
      id: "javascript",
      name: "JavaScript",
      icon: "🟨",
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: "typescript",
      name: "TypeScript",
      icon: "🔷",
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "react",
      name: "React",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "react-native",
      name: "React Native",
      icon: "📱",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Advanced Search",
      description:
        "Find exactly what you need with our powerful search across all documentation",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Interactive Examples",
      description:
        "Run code examples directly in your browser with live syntax highlighting",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Guides",
      description:
        "From beginner tutorials to advanced patterns, we've got you covered",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Optimized for speed with instant search and smooth navigation",
    },
  ];

  const stats = [
    { number: "50K+", label: "Developers" },
    { number: "1M+", label: "Page Views" },
    { number: "500+", label: "Code Examples" },
    { number: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            {/* Sponsor Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <Rocket className="w-4 h-4 mr-2" />
              Proudly sponsored by Nuvex Solutions
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Master Modern
              <br />
              <span className="relative">
                JavaScript
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive guide to JavaScript, TypeScript, React, and
              React Native. Learn, build, and ship with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center">
                  Start Learning
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Technology Tabs */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {technologies.map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => setActiveTab(tech.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tech.id
                        ? `bg-gradient-to-r ${tech.color} text-white shadow-lg transform scale-105`
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="mr-2">{tech.icon}</span>
                    {tech.name}
                  </button>
                ))}
              </div>

              {/* Code Preview */}
              <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-sm font-mono">
                    {technologies
                      .find((t) => t.id === activeTab)
                      ?.name.toLowerCase()}
                    .example
                  </span>
                </div>
                <pre className="text-left text-sm md:text-base">
                  <code className="text-green-400">
                    {activeTab === "javascript" &&
                      `// Modern JavaScript ES2024\nconst fetchUserData = async (userId) => {\n  const response = await fetch(\`/api/users/\${userId}\`);\n  return response.json();\n};\n\n// Using optional chaining\nconst userName = user?.profile?.name ?? 'Anonymous';`}
                    {activeTab === "typescript" &&
                      `// TypeScript with strict types\ninterface User {\n  id: number;\n  name: string;\n  email?: string;\n}\n\nconst createUser = (userData: User): Promise<User> => {\n  return api.post<User>('/users', userData);\n};`}
                    {activeTab === "react" &&
                      `// React with Hooks\nconst UserProfile = ({ userId }: { userId: string }) => {\n  const [user, setUser] = useState<User | null>(null);\n  \n  useEffect(() => {\n    fetchUser(userId).then(setUser);\n  }, [userId]);\n  \n  return <div>{user?.name}</div>;\n};`}
                    {activeTab === "react-native" &&
                      `// React Native Navigation\nconst App = () => {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen \n          name="Home" \n          component={HomeScreen}\n          options={{ title: 'Welcome' }}\n        />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From beginner-friendly tutorials to advanced architectural
              patterns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Structured paths for every skill level
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {["Beginner", "Intermediate", "Advanced"].map((level, index) => (
              <div key={level} className="relative group">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        index === 0
                          ? "bg-green-500"
                          : index === 1
                          ? "bg-blue-500"
                          : "bg-purple-500"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold ml-4 text-gray-900 dark:text-white">
                      {level}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {index === 0 &&
                      [
                        "Variables & Functions",
                        "Control Flow",
                        "DOM Manipulation",
                        "Async Basics",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    {index === 1 &&
                      [
                        "ES6+ Features",
                        "React Hooks",
                        "State Management",
                        "API Integration",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    {index === 2 &&
                      [
                        "Design Patterns",
                        "Performance",
                        "Architecture",
                        "Advanced TypeScript",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <Check className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                  </ul>

                  <button
                    className={`w-full mt-8 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      index === 0
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : index === 1
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-purple-500 hover:bg-purple-600 text-white"
                    }`}
                  >
                    Start {level} Path
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Level Up Your Skills?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are building amazing things with
            our comprehensive documentation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get Started Free
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
