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
          <a href="#Certificates" className="hover:text-white">Certificates</a>
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
            icon="/CM4.jpeg"
          />

          <ProjectCard
            title="Smart Wearables for ECG monitoring"
            desc="A new kind of smart wearable for ECG monitoring to help identify diseases early"
            icon="/ECG.jpeg"
          />

          <ProjectCard
            title="Attendance Marking System with Raspberry Pi Zero"
            desc="Attendance marking system using Raspberry Pi Zero a Very low power module"
            icon="/PiZero.jpeg"
          />

          <ProjectCard
            title = "Weather Monitoring System with IoT"
            desc="Used Raspberry Pi3 to build a weather monitoring system that collects and transmits environmental data to ThingSpeak for real-time monitoring and analysis."
            icon="/weather.jpeg"
          />
        </div>
      </section>
      <section id="certifications" className="mt-24 px-10">
        <h2 className="text-4xl font-bold">Certifications</h2>

        <div className="mt-8 space-y-6">
          <CertificationsCard
            title="Database Management Systems"
            desc="Completed a Certificate Course from NPTEL Swayam."
            file="/DBMS.pdf"
          />
          <CertificationsCard
            title="VLSI Design with EDA Tools and Reconfigurable Architectures"
            desc="Completed a Certificate Course from LPU skill Development Centre."
            file="/VLSI.pdf"
          />
          <CertificationsCard
            title="Short Term Course on Internet of Things(IoT)"
            desc="Completed a Short Term Course from LPU skill Development Centre."
            file="/IOT.pdf"
          />
        </div>
      </section>
      <section id="Certificates" className="mt-24 px-10">
        <h2 className="text-4xl font-bold">Certificates</h2>

        <div className="mt-8 space-y-6">
          <CertificatesCard
            title="Participated in InnoTek"
            desc="Participated in university-level technical symposium InnoTek and presented a project on IoT-based smart Attendance Marking System."
            file="/Innotek.pdf"
          />
          <CertificatesCard
            title="Participated in LPU Hackathon"
            desc="Participated in LPU Hackathon and developed solutions for real-world problems using IoT."
            file="/LPUH.pdf"
          />
          <CertificatesCard
            title="Complete Guide to Build IOТ Things from Scratch to Market"
            desc="Completed a course on Udemy that provided me with Basic knowledge of IoT and Product Building works in Industry Level."
            file="/udemy.pdf"
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
function SkillCard({ name, icon }: { name: string; icon: string }) {
  return (
<div className="flip-card w-full h-52">
      <div className="flip-card-inner">
        <div className="flip-card-front p-6 border border-gray-700 bg-black hover:border-white flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold">{name}</h3>
        </div>
        <div className="flip-card-back p-6 border border-gray-700 bg-black flex flex-col justify-center items-center text-center">
          <Image
            src={icon}
            alt={name}
            width={150}
            height={150}
          />
          </div>
      </div>
    </div>
  );
}
/* Project Card */
function ProjectCard({title, desc,  icon,}: {  title: string;  desc: string;  icon: string;}) {
  return (
<div className="flip-card w-full h-52">
      <div className="flip-card-inner">
        <div className="flip-card-front p-6 border border-gray-700 bg-black hover:border-white flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-gray-400">{desc}</p>
        </div>
        <div className="flip-card-back p-6 border border-gray-700 bg-black flex flex-col justify-center items-center text-center">
          <Image
            src={icon}
            alt={title}
            width={175}
            height={175}
          />
          </div>
      </div>
    </div>
  );
}
function CertificationsCard({ title, desc, file }: { title: string; desc: string; file: string }) {
  return (
    <div className="flip-card w-full h-52">
      <div className="flip-card-inner">
        <div className="flip-card-front p-6 border border-gray-700 bg-black hover:border-white flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-gray-400">{desc}</p>
        </div>
        <div className="flip-card-back p-6 border border-gray-700 bg-black flex flex-col justify-center items-center text-center">
          <a
            href={file}
            download
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
              Download
            </a>
        </div>
      </div>
    </div>
    
  );
}
function CertificatesCard({ title, desc, file }: { title: string; desc: string; file: string }) {
  return (
    <div className="flip-card w-full h-52">
      <div className="flip-card-inner">
        <div className="flip-card-front p-6 border border-gray-700 bg-black hover:border-white flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-gray-400">{desc}</p>
        </div>
        <div className="flip-card-back p-6 border border-gray-700 bg-black flex flex-col justify-center items-center text-center">
          <a
            href={file}
            download
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
              Download
            </a>
        </div>
      </div>
    </div>
  );
}