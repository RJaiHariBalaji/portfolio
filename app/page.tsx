import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">R JAI HARI BALAJI</h1>

        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#certifications" className="hover:text-white">Certifications</a>
          <a href="#Achievements" className="hover:text-white">Achievements</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-20 px-6">
        <Image
          src = "/pro.jpeg"
          alt = "R JAI HARI BALAJI"
          width={180}
          height={180}
          className="rounded-full border-4 border-blue-400 shadow-lg"
        />
        <h2 className="text-5xl font-extrabold">
          Hi, I'm <span className="text-blue-400">R JAI HARI BALAJI</span>
        </h2>

        <p className="mt-4 text-lg text-gray-400 max-w-xl">
          IoT Solutions Developer
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white rounded-xl font-semibold"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mt-32 px-10">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-400 max-w-3xl">
          I am an IoT Solutions Developer with a passion for creating innovative and efficient solutions. I hunt for problem statements that aren't popular so that new problems get Innovative solutions. I have worked on multiple projects in the IoT domain curating a wide range of skills that help me in my journey.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="mt-24 px-10">
        <h2 className="text-4xl font-bold">Skills</h2>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
          <SkillCard name="IoT Development" icon = "/iot.png"/>
          <SkillCard name="Embedded Systems" icon = "/embedded.png"/>
          <SkillCard name="PCB Designing" icon = "/pcb1.png"/>
          <SkillCard name="Python Programming" icon = "/python.png"/>
          <SkillCard name="Raspberry Pi" icon = "/pi.png"/>
          <SkillCard name="Machine Learning" icon = "/ml.png"/>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-24 px-10">
        <h2 className="text-4xl font-bold">Projects</h2>

        <div className="mt-8 space-y-6">
          <ProjectCard
            title="Attendance Marking System with Raspberry Pi"
            desc="Attendance marking system using Raspberry Pi and facial recognition technology with Anti-Spoofing measures."
          />

          <ProjectCard
            title="Smart Wearables for ECG monitoring"
            desc="A new kind of smart wearable for ECG monitoring to help identify diseases early"
          />

          <ProjectCard
            title="Calorie Tracker using ML in Python"
            desc="A calorie tracker that uses machine learning algorithms to predict the calorie content of meals based on their ingredients and nutritional information."
          />

          <ProjectCard
            title = "Smart Energy Meter with IoT"
            desc="An IoT-based smart energy meter that provides real-time energy consumption data, allowing users to monitor and manage their energy usage more efficiently."
          />
        </div>
      </section>
      <section id="certifications" className="mt-24 px-10">
        <h2 className="text-4xl font-bold">Certifications</h2>

        <div className="mt-8 space-y-6">
          <CertificationsCard
            title="Database Management Systems"
            desc="Completed a Certificate Course from NPTEL Swayam."
          />
        </div>
      </section>
      <section id="Achievements" className="mt-24 px-10">
        <h2 className="text-4xl font-bold">Achievements</h2>

        <div className="mt-8 space-y-6">
          <AchievementsCard
            title="3rd Place in InnoTek"
            desc="Participated and won 3rd place in university-level technical symposium InnoTek and presented a project on IoT-based smart Attendance Marking System."
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-24 px-10 pb-20">
        <h2 className="text-4xl font-bold">Contact</h2>

        <div className="mt-6 flex gap-6">
          <a href="mailto:jaihari3399@gmail.com" className="underline hover:text-blue-400">
            Email
          </a>
          <a href="https://github.com/RJaiHariBalaji" className="underline hover:text-blue-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/r-jai-hari-balaji-272541294/" className="underline hover:text-blue-400">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © 2026 R Jai Hari Balaji. All rights reserved.
      </footer>
    </main>
  );
}

/* Skill Card */
function SkillCard({ name, icon }: { name: string, icon: string }) {
  return (
    <div className="p-4 border border-gray-700 rounded-2xl hover:border-white transition">
      <Image
        src = {icon}
        alt = {name}
        width={40}
        height={40}
      />
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
}

/* Project Card */
function ProjectCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 border border-gray-700 rounded-2xl hover:border-white transition">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-400">{desc}</p>
    </div>
  );
}
function CertificationsCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 border border-gray-700 rounded-2xl hover:border-white transition">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-400">{desc}</p>
    </div>
  );
}
function AchievementsCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 border border-gray-700 rounded-2xl hover:border-white transition">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-400">{desc}</p>
    </div>
  );
}