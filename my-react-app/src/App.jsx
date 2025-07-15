import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";

const DUMMY_USER = {
  name: "Jane Doe",
  avatar: "https://ui-avatars.com/api/?name=Jane+Doe&background=0D8ABC&color=fff",
};

const FIRST_BLOG = {
  id: 1,
  author: {
    name: "Project NOVA Team",
    avatar: "https://ui-avatars.com/api/?name=Project+NOVA&background=512DA8&color=fff"
  },
  time: "June 30, 2025",
  title: "Introducing Project NOVA: Igniting Innovation on Google Cloud 🚀",
  content: (
    <>
      <p><b>Unleashing the Power of Google Cloud: Welcome to Project NOVA ✨</b></p>
      <p>
        Innovation isn't just a buzzword at Google Cloud; it's a commitment we bring to life through initiatives like Project NOVA. This ambitious undertaking is designed to push the boundaries of what's possible on Google Cloud Platform (GCP) by showcasing practical, real-world implementations of diverse use cases. Think of NOVA as our living laboratory 🔬, a dynamic environment where cutting-edge GCP services and features are orchestrated to address complex challenges and pioneer novel solutions. Our goal is to inspire and empower you by providing tangible examples of the immense power and flexibility available within the Google Cloud ecosystem.
      </p>
      <p>
        <b>The NOVA Website: Our First Leap Forward 🌐</b><br/>
        <a href="https://novacgn.com/" target="_blank" rel="noopener noreferrer">https://novacgn.com/</a>
      </p>
      <p>
        As the very first use case to be deployed under the Project NOVA umbrella, we're thrilled to launch the NOVA website. This centralized platform serves as the digital hub for our journey, showcasing our progress, our people, and our passion for innovation.
      </p>
      <p>
        The NOVA website is meticulously designed to foster transparency, collaboration, and engagement. Here, you'll find:
        <ul>
          <li><b>Spotlights on Contributors 🔦:</b> Get to know the brilliant minds behind Project NOVA.</li>
          <li><b>Updates on Upcoming Implementations 🔄:</b> Stay informed about our latest initiatives across various GCP services.</li>
          <li><b>A Hub for Insights 📚:</b> Dive into our collection of blogs, technical deep-dives, and key announcements.</li>
        </ul>
      </p>
      <p>
        More than just a project log, the NOVA website aims to inspire the broader community by openly sharing real-world applications of cloud technology. It's a testament to what can be achieved when expertise meets opportunity on Google Cloud.
      </p>
      <p><b>What's Next for Project NOVA? 🔭</b></p>
      <p>
        The launch of the NOVA website is just the beginning. Project NOVA is committed to continuously exploring new frontiers in cloud technology, bringing you more innovative use cases that demonstrate the versatility and power of GCP. We invite you to frequently visit the website for the latest updates, technical insights, and to witness innovation in action.
      </p>
      <hr/>
      <p><b>Use Case 1: A Deep Dive into Our Resilient & Scalable Cloud Architecture ⚙️</b></p>
      <p>
        The launch of the NOVA website marks a significant milestone in our journey of cloud innovation. It's more than just a new application; it's a testament to our commitment to building highly available, scalable, and secure solutions on Google Cloud Platform (GCP). In this post, we'll take you behind the scenes for a technical deep dive into the architecture that powers NOVA, sharing insights into the technologies and design principles that ensure a seamless user experience.
      </p>
      <p><b>The Foundation: Our Technology Stack</b></p>
      <ul>
        <li>💻 <b>Application Development:</b> At the core of our application, we leveraged React for a dynamic and responsive user interface, with a powerful Node.js backend. Nginx serves as our high-performance web server.</li>
        <li>🏗️ <b>Infrastructure as Code:</b> We embraced an Infrastructure as Code (IaC) approach for consistency and reliability. Terraform allows us to provision and manage our cloud resources declaratively, while Shell scripting handles essential automation tasks.</li>
        <li>☁️ <b>Cloud Platform:</b> The entire infrastructure runs on Google Cloud Platform (GCP), enabling us to leverage its powerful, managed services.</li>
      </ul>
      <p><b>Architecting for a Global Audience on GCP 🌍</b></p>
      <p>Our primary goal was to build an architecture that could serve users globally with low latency and high availability. Here’s a breakdown of the key GCP components and how they fit together to achieve this.</p>
      <ol>
        <li>
          <b>The Global Entry Point: Cloud DNS and Global Load Balancer 🚦</b>
          <br/>
          When a user navigates to our domain, the journey begins with Cloud DNS. This service securely and reliably maps our human-readable URL to the IP address of our Global HTTP(S) Load Balancer. The load balancer is the single entry point for all incoming user traffic, distributing it to the healthiest backend instances to ensure a fast, responsive experience for users, no matter their location.
        </li>
        <li>
          <b>Scalable and Resilient Compute: Managed Instance Groups (MIGs) 💪</b>
          <br/>
          Behind the load balancer sits our backend, powered by Managed Instance Groups (MIGs). MIGs are the workhorses of our application, automatically scaling the number of virtual machine instances up or down based on real-time demand 📈. This ensures we can handle sudden traffic spikes without manual intervention while keeping costs optimized.
        </li>
        <li>
          <b>Secure and Isolated Networking: Custom VPC and Cloud NAT 🛡️</b>
          <br/>
          All our resources reside within a Custom Virtual Private Cloud (VPC). This creates a private, isolated network environment, giving us complete control. We use private subnets and granular Firewall Rules to enforce a strict security posture. To allow instances to access the internet securely (for updates or APIs), we use Cloud NAT, which provides outbound access without exposing our instances to the public internet.
        </li>
        <li>
          <b>Centralized Asset Management: Cloud Storage 🖼️</b>
          <br/>
          To ensure our application renders quickly and efficiently, all UI-related assets, such as images, are stored in a Cloud Storage bucket. The application code fetches these assets directly at runtime, which allows for better scalability and easier management.
        </li>
        <li>
          <b>Proactive Reliability: Uptime Checks and Alerting 🔔</b>
          <br/>
          Availability is non-negotiable. We have configured Uptime Checks to continuously monitor the health of our website from around the globe. If an issue is detected, an integrated Alerting policy immediately notifies our engineering team so we can respond swiftly.
        </li>
      </ol>
      <p>
        <b>Join Us on the Journey 👋</b>
        <br/>
        Project NOVA is a living example of the powerful possibilities within Google Cloud. By combining these services, we have built a foundation that is not only powerful and scalable but also secure and resilient.
        <br/>
        We are incredibly proud of what we have accomplished and are excited to continue pushing the boundaries of cloud innovation.
        <br/>
        Are you passionate about building the future of technology? We are always looking for innovative minds to join our team. If our work inspires you, we encourage you to fill out the form on our website to be considered for future opportunities.
      </p>
    </>
  )
};

export default function App() {
  const [user, setUser] = useState(null);
  const [posts] = useState([FIRST_BLOG]);
  const navigate = useNavigate();

  // In-memory login: just set user object
  const handleLogin = (userData) => {
    setUser({ name: userData.name, email: userData.email, avatar: DUMMY_USER.avatar });
    navigate("/");
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div style={{ background: "#f3f2ef", minHeight: "100vh" }}>
      {/* Top Navigation */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "#fff", borderBottom: "1px solid #e0e0e0", padding: "0 32px", height: 56
      }}>
        <div style={{ fontWeight: "bold", color: "#0a66c2", fontSize: "1.6rem", letterSpacing: -2 }}>
          Welcome to NOVA
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button className="linkedin-nav-btn" onClick={() => navigate("/")}>Home</button>
          {user ? (
            <>
              <img src={user.avatar} alt="avatar" style={{ width: 36, height: 36, borderRadius: "50%", marginLeft: 12, border: "2px solid #d1e7f7" }} />
              <span style={{ marginLeft: 8 }}>{user.name}</span>
              <button onClick={handleLogout} style={{ marginLeft: 12 }}>Logout</button>
            </>
          ) : (
            <>
              <button className="linkedin-nav-btn" onClick={() => navigate("/login")}>Login</button>
              <button className="linkedin-nav-btn" onClick={() => navigate("/register")}>Register</button>
            </>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={
          user
            ? <Navigate to="/" replace />
            : <Login onLogin={handleLogin} />
        } />
        <Route path="/register" element={
          user
            ? <Navigate to="/" replace />
            : <Register onRegister={handleLogin} />
        } />
        <Route path="/" element={
          user
            ? <Home user={user} posts={posts} />
            : <Navigate to="/login" replace />
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}