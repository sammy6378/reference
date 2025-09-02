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
import { useHistory } from "@docusaurus/router";
import Layout from "@theme/Layout";
import "../css/landing.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("javascript");
  const [animatedCount, setAnimatedCount] = useState(0);
  const history = useHistory();

  const handleGetStarted = () => {
    history.push("/docs/getting-started");
  };

  const handleWatchDemo = () => {
    // You can add a link to a demo video or modal here
    window.open("https://github.com/sammy6378/reference", "_blank");
  };

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
    <Layout
      title="Modern JavaScript Documentation"
      description="Your comprehensive guide to JavaScript, TypeScript, React, and React Native. Learn, build, and ship with confidence."
    >
      <div className="landing-container">
        {/* Hero Section */}
        <section className="hero-section">
          {/* Background Effects */}
          <div className="hero-background"></div>

          <div className="hero-content">
            <div>
              {/* Sponsor Badge */}
              <div className="sponsor-badge">
                <Rocket className="w-4 h-4 mr-2" />
                Proudly sponsored by Nuvex Solutions
              </div>

              {/* Main Heading */}
              <h1 className="hero-title">
                Master Modern
                <br />
                JavaScript
              </h1>

              <p className="hero-subtitle">
                Your comprehensive guide to JavaScript, TypeScript, React, and
                React Native. Learn, build, and ship with confidence.
              </p>

              {/* CTA Buttons */}
              <div className="cta-buttons">
                <button className="btn-primary" onClick={handleGetStarted}>
                  <span className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform" />
                  </span>
                </button>

                {/* <button className="btn-secondary" onClick={handleWatchDemo}>
                  <Play className="mr-2 w-5 h-5 transition-transform" />
                  Watch Demo
                </button> */}
              </div>

              {/* Technology Tabs */}
              <div className="tech-tabs">
                <div className="tech-buttons">
                  {technologies.map((tech) => (
                    <button
                      key={tech.id}
                      onClick={() => setActiveTab(tech.id)}
                      className={`tech-button ${
                        activeTab === tech.id ? "active" : "inactive"
                      }`}
                    >
                      <span className="mr-2">{tech.icon}</span>
                      {tech.name}
                    </button>
                  ))}
                </div>

                {/* Code Preview */}
                <div className="code-preview">
                  <div className="code-header">
                    <div className="code-dot red"></div>
                    <div className="code-dot yellow"></div>
                    <div className="code-dot green"></div>
                    <span className="code-filename">
                      {technologies
                        .find((t) => t.id === activeTab)
                        ?.name.toLowerCase()}
                      .example
                    </span>
                  </div>
                  <pre>
                    <code className="code-content">
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
        {/* <section className="stats-section">
          <div className="stats-container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>*/}

        {/* Features Section */}
        <section className="features-section">
          <div className="features-container">
            <div className="features-header">
              <h2 className="features-title">Everything You Need to Succeed</h2>
              <p className="features-subtitle">
                From beginner-friendly tutorials to advanced architectural
                patterns
              </p>
            </div>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Start Your Journey?</h2>
              <p className="cta-description">
                Join thousands of developers who are mastering modern
                JavaScript, TypeScript, and React Native with our comprehensive
                guides.
              </p>
              <div className="cta-buttons-section">
                <button
                  className="btn-primary large"
                  onClick={handleGetStarted}
                >
                  <span className="flex items-center">
                    Start Learning Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </button>
                <button
                  className="btn-secondary large"
                  onClick={() =>
                    window.open(
                      "https://github.com/sammy6378/reference",
                      "_blank"
                    )
                  }
                >
                  <BookOpen className="mr-2 w-5 h-5" />
                  View on GitHub
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
