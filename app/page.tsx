import CertificationFlipCard from "./components/CertificationFlipCard";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">Portfolio</h1>

        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#certifications" className="hover:text-white">Certifications</a>
          <a href="#resume" className="hover:text-white">Resume</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          

        </div>
      </nav>

<div className="flex justify-center w-full mb-8">
  <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
    <img
      src="/pro.jpeg"
      alt="Profile"
      className="w-full h-full object-cover 
                 transition duration-500 hover:scale-110"
    />
  </div>
</div>



      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-20 px-6
                    animate-[fadeIn_1.5s_ease-in-out]">

        <h2 className="text-5xl font-extrabold">
          Hi, I'm <span className="text-blue-400">R Jai Hari Balaji</span>
        </h2>

        <p className="mt-4 text-lg text-gray-400 max-w-xl">
            IOT Solutions Developer
        </p>

          {/* Welcome Sentence (Put Before Tech Pills) */}
  <p className="mt-6 text-gray-300 text-lg max-w-2xl leading-relaxed">
    I am an IoT Solutions Developer with a passion for creating innovative and efficient solutions. I hunt for problem statements that aren't popular so that new problems get Innovative solutions. I have worked on multiple projects in the IoT domain curating a wide range of skills that help me in my journey.
  </p>
        
          {/* Tech Stack Pills */}
  <div className="flex justify-center gap-4 mt-8 flex-wrap">

    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      Raspberry Pi
    </span>

    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      ESP32
    </span>

    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      Embedded C
    </span>

    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      MicroPython
    </span>
    
    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      Machine Learning
    </span>
    
    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      PCB Design
    </span>

    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      Cadence Virtuoso
    </span>

    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      Verilog VHDL
    </span>

    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      Embedded Linux
    </span>
  </div>


      </section>

      
      
      <section id="about" className="mt-32 px-10">

  {/* Section Heading */}
  <h2 className="text-4xl font-bold mb-10">
    About Me
  </h2>

  {/* Two Box Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* ABOUT BOX */}
    <div className="p-10 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-xl">

      <h3 className="text-2xl font-bold text-blue-400 mb-5">
        Who I Am
      </h3>

      <p className="text-gray-300 leading-relaxed text-lg">
        I am an IoT and Embedded Systems Developer specializing in real-time intelligent systems using Raspberry Pi, embedded hardware, and computer vision. My projects focus on automation, system integration, and scalable monitoring architectures that bridge hardware and software for efficient and reliable operation. I aim to develop advanced IoT and embedded solutions that improve efficiency, reliability, and sustainability in industrial and energy-driven applications.
      </p>
    </div>

    {/* MY APPROACH BOX */}
    <div className="p-10 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-xl">

      <h3 className="text-2xl font-bold text-blue-400 mb-5">
        My Approach
      </h3>

      <p className="text-gray-300 leading-relaxed text-lg">
        I am focused on developing efficient embedded and IoT solutions, including real-time monitoring, automation, and real world problem solving. I am passionate about building intelligent systems that integrate hardware and software to create practical, scalable, and reliable solutions. My approach emphasizes hands-on learning, continuous skill development, and a commitment to creating impactful engineering solutions in the IoT and embedded systems domain.
      </p>
    </div>


 {/* Career Objective Box */}
    <div className="p-8 rounded-2xl bg-[#0b1220] border border-gray-700">
      <h3 className="text-2xl font-bold text-green-400">
        Career Objective
      </h3>
      <p className="text-gray-300 mt-4 leading-relaxed">
        I aspire to build a career in Industrial IoT and Embedded Systems, focusing on the development of real-time monitoring and automation solutions. My goal is to design intelligent embedded architectures that improve operational efficiency, reliability, and system performance. I am particularly interested in creating scalable solutions that enhance safety and enable smarter decision-making in modern industrial environments.
      </p>
    </div>

    {/* Internship Interest Box */}
    <div className="p-8 rounded-2xl bg-[#0b1220] border border-gray-700">
      <h3 className="text-2xl font-bold text-yellow-400">
        Looking for Opportunities
      </h3>
      <p className="text-gray-300 mt-4 leading-relaxed">
        I am seeking opportunities in IoT and Embedded Systems to develop real-time automation and monitoring solutions using Raspberry Pi, embedded platforms, and sensor integration. My interests include Industrial IoT, VLSI Design and Chip Manufacturing, PCB Designing for scalable embedded architectures. I am eager to contribute to building reliable, intelligent, and practical engineering solutions.
      </p>
    </div>

    </div>
  </section>



      
      {/* Skills Section */}
        <section id="skills" className="mt-32 px-10">

  {/* Small Title */}
  <p className="text-lg text-teal-400 tracking-widest uppercase">
  Skills
</p>


  {/* Main Title */}
  <h1 className="text-2xl font-extrabold mt-2">
    Hard & Soft Skills 
  </h1>

  {/* Skills Grid */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Card 1 */}
    <SkillBox
      title="Programming"
      skills={["C++", "Python", "Embedded C" , "MicroPython", "VHDL"  ]}
    />

    {/* Card 2 */}
    <SkillBox
      title="Tools"
      skills={["Arduino IDE", "Raspberry Pi os", "AWS", "Blynk IoT platform", "Proteus 8 Professional","Thinkspeak IoT platform", "Fusion360","Ubuntu","WSL","Xilinx Vivado","Cadence Virtuoso", "Altium"]}
    />

 
    {/* Card 3 */}
    <SkillBox
      title="Core Competencies "
      skills={["Leadership","Effective Communication", "Team Collaboration", "Problem Solving", "Time Management", "Adaptability"]}
    />
  
    {/* Learning Journey Box */}
<div className="p-8 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-lg">

  {/* Title */}
  <h3 className="text-xl font-bold text-purple-400 mb-4">
    Learning Journey 
  </h3>

  {/* Description */}
  <p className="text-gray-300 leading-relaxed mb-5">
    My skill set is constantly evolving. Currently exploring:
  </p>

  {/* Learning Chips */}
  <div className="flex flex-wrap gap-3">
    {["IoT Device Security", "Raw-Tcp", "PCB Design","VLSI Design"].map(
      (tech, index) => (
        <span
          key={index}
          className="px-4 py-1 rounded-full bg-gray-800 
          text-gray-200 text-sm hover:bg-gray-700 transition"
        >
          {tech}
        </span>
      )
    )}
  </div>
</div>

  </div>
</section>

      {/* Projects */}
      <section id="projects" className="mt-24 px-10">
  <h2 className="text-4xl font-bold mb-10">
    Projects
  </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            title="Weather Monitoring System using Raspberry Pi 3"
            desc=" Designed and developed an IoT-based Weather Monitoring 
            System using Raspberry Pi 3 to measure temperature, humidity, 
            and atmospheric pressure. Integrated DHT11 and BMP280 sensors with a 16×2 LCD
             for real-time local display. Implemented cloud connectivity using ThingSpeak for 
             remote monitoring and data visualization. Demonstrates skills in embedded systems, 
             sensor interfacing, Python programming, and IoT cloud integration. "

            img="/weather.jpeg"
            githubLink="https://github.com/RJaiHariBalaji/Weather-Monitoring-System"
          />

          <ProjectCard
            title="Smart Attendance Marking System(anti-spoof) "
            desc=" AI-powered Smart Attendance Marking System built to automate and secure classroom attendance using facial recognition.
            Designed with a dual-camera IR-based anti-spoofing mechanism to prevent proxy and photo attacks.
            Implements server-side processing with Raspberry Pi-based capture modules over LAN (TCP communication).
            Engineered with a scalable architecture transitioning from Proof of Concept to product-ready deployment."
            img="/CM4.jpeg"
            githubLink="https://github.com/RJaiHariBalaji/Attendance-Marking-System"
          />
          
          <ProjectCard
            title="Smart Attendance Marking System Using Raspberry Pi Zero"
            desc=" Raspberry Pi Zero 2W-based Smart Attendance System integrating facial recognition and RFID authentication.
            Enabled on-device face registration, dataset creation, and local model training using OpenCV.
            Implemented Ethernet-based LAN communication for secure attendance data transfer.
            Designed as a low-cost embedded prototype that laid the foundation for a scalable, product-oriented attendance platform."
            img="/pizero.jpeg"
            githubLink="https://github.com/RJaiHariBalaji/Attendance-Marking-System-with-pi-zero"
          />
          
          <ProjectCard
            title="Smart Energy Meter with Thingspeak Integration"
            desc= "Made a Smart Energy Meter using ESP32 to monitor real-time energy consumption. Integrated current and voltage sensors to measure power usage, and connected the system to the ThingSpeak IoT platform for remote monitoring and data visualization. The project demonstrates skills in embedded systems, sensor inegration and IoT cloud connectivity, providing a practical solution for energy management and efficiency improvement."
            img="/SEM.jpeg"
            githubLink="https://github.com/RJaiHariBalaji/Smart-Energy-Meter"
          />
          <ProjectCard
            title="4X4 ROM using Cadence Virtuoso"
            desc=" Designed a 4x4 Read only Memory (ROM) using Cadence Virtuoso. The ROM stores a 4 bit data across 4 addresses. The design includes a 2-to-4 decoder for address selection and a 4-bit output. The project demonstrates proficiency in VLSI design, digital logic, and the use of industry-standard EDA tools for creating memory architectures."
            img="/CADENCE.jpg"
            githubLink="https://github.com/RJaiHariBalaji/4x4ROM"
          />
          <ProjectCard
            title="Calorie Tracker using python and AI"
            desc=" Developed a Calorie Tracker application using Python and AI technologies. The application allows users to input their meals and activities, and utilizes machine learning algorithms to estimate calorie intake and expenditure. It provides personalized recommendations for maintaining a healthy lifestyle based on user data and goals. The project demonstrates skills in Python programming, AI integration, and health-focused application development."
            img="/calorie.png"
            githubLink="https://github.com/RJaiHariBalaji/health-app"
          />

        </div>
      </section>


<section id="certifications" className="mt-20 px-10"> 

  {/* Section Heading */}
  <h2 className="text-4xl font-bold mb-10">
    Certifications
  </h2>

  {/* ✅ ONE GRID FOR ALL CARDS */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    <CertificationFlipCard
      title="LPU Hackathon 2025"
      issuer="LPU(SEEE)"
      date="March 2025"
      skills={[
        "Image Preprocessing",
        "Network Architecture Design",
        "Deep Learning with TensorFlow",
      ]}
      img="/LPUH.png"
      file="/LPUH.pdf"
    />



    <CertificationFlipCard
      title="Innotek 2025"
      issuer="LPU(Student welfare wing) "
      date="April 2025"
      skills={[
        "Microcontroller Programming",
        "Hardware Coding",
        "Circuit Design",
      ]}
      img="/Innotek.png"
      file="/Innotek.png"
    />

<CertificationFlipCard
      title="Internship as a Embedded Engineer"
      issuer="Meras Plugins"
      date="August 2025"
      skills={[
        "M2M Comunications",
        "Embedded Systems",
      ]}
      img="/Internship.jpg"
      file="/Internship.pdf"
    />
    <CertificationFlipCard
      title=" Short-Term Course on IoT "
      issuer="LPU HRDC "
      date="August 2024"
      skills={[
      "Microcontroller Programming",
      "IoT Fundamentals"
      ]}
      img="/IOT.jpg"
      file="/IOT.pdf"
    />
    <CertificationFlipCard
      title=" Building IoT Things "
      issuer="Udemy "
      date="November 2023"
      skills={[
      "Industrial IoT",
      "IoT Fundamentals",
      "Sensor Integration",
      ]}
      img="/udemy.png"
      file="/udemy.pdf"
    />
    <CertificationFlipCard
      title="Database Management Systems"
      issuer="NPTEL Swayam"
      date="October 2025"
      skills={["Database Management Systems","SQL", "Databse Design"]}
      img="/DBMS.png"
      file="/DBMS.pdf"
    />

    
  </div>

</section>


{/* ================= RESUME SECTION ================= */}
<section id="resume" className="mt-32 px-10">



  {/* Title */}
  <div className="text-center">
    <h2 className="text-5xl font-extrabold">
      My <span className="text-blue-400">Resume</span>
    </h2>

    <div className="w-28 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
  </div>

  {/* Contact Pills Row */}
<div className="flex justify-center flex-wrap gap-6 mt-10">

  {/* Email */}
<a
  href="mailto:jaihari3399@gmail.com"
  className="flex items-center gap-2 px-5 py-2 rounded-full 
             bg-[#0b1220] border border-gray-700 text-gray-200 shadow-md
             hover:border-blue-500 hover:text-white transition"
>
  📧
  <span className="text-sm">jaihari3399@gmail.com</span>
</a>


  {/* Phone */}
  <div className="flex items-center gap-2 px-5 py-2 rounded-full 
                  bg-[#0b1220] border border-gray-700 text-gray-200 shadow-md">
    📱
    <span className="text-sm">+91-8903001280</span>
  </div>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/r-jai-hari-balaji-272541294/1/"
    target="_blank"
    className="flex items-center gap-2 px-5 py-2 rounded-full 
               bg-[#0b1220] border border-gray-700 text-gray-200 shadow-md 
               hover:border-blue-500 hover:text-white transition"
  >
    🔗 <span className="text-sm">LinkedIn</span>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/RJaiHariBalaji"
    target="_blank"
    className="flex items-center gap-2 px-5 py-2 rounded-full 
               bg-[#0b1220] border border-gray-700 text-gray-200 shadow-md 
               hover:border-blue-500 hover:text-white transition"
  >
    💻 <span className="text-sm">GitHub</span>
  </a>

</div>


  {/* Tabs */}
  <div className="flex justify-center gap-8 mt-12 text-gray-400 font-semibold">
    <button className="px-6 py-2 rounded-xl bg-blue-600 text-white">
      Education
    </button>
    {/* <button className="hover:text-white">Skills</button>
    <button className="hover:text-white">Projects</button>
    <button className="hover:text-white">Certificates</button> */}
  </div>

  {/* Resume Cards */}
  <div className="mt-16 space-y-8 max-w-5xl mx-auto">

  

    {/* Card 1 */}
    <div className="p-8 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-lg">
      <div className="flex justify-between items-start">

        <div>
          <h3 className="text-2xl font-bold text-blue-400">
            Lovely Professional University
          </h3>
          <p className="text-gray-400 mt-1">Punjab, India</p>

          <p className="mt-4 text-gray-200">
            Bachelor of Technology - Electronics & Communication Engineering(IOT)
          </p>

          <p className="text-gray-400 mt-2">
            CGPA: 6.61
          </p>
        </div>

        <span className="px-4 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
          Since Aug 2023
        </span>
      </div>
    </div>

    {/* Card 2 */}
    <div className="p-8 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-lg">
      <div className="flex justify-between items-start">

        <div>
          <h3 className="text-2xl font-bold text-blue-400">
            Velammal Bodhi Campus, Coimbatore
          </h3>
          <p className="text-gray-400 mt-1">Tamil Nadu, India</p>

          <p className="mt-4 text-gray-200">
            12th Grade (Higher Secondary)
          </p>
          
          <p className="mt-4 text-gray-200">
            Percentage: 83.4%
          </p>
        </div>

        <span className="px-4 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
          2022 - 2023
        </span>
      </div>
    </div>

    {/* Card 3 */}
    <div className="p-8 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-lg">
      <div className="flex justify-between items-start">

        <div>
          <h3 className="text-2xl font-bold text-blue-400">
            Valaraigate Vidyalayam, Tiruchengode
          </h3>
          <p className="text-gray-400 mt-1">Tamil Nadu, India</p>

          <p className="mt-4 text-gray-200">
             10th Grade (Secondary)
          </p>
          
          <p className="mt-4 text-gray-200">
            Percentage: 90%
          </p>
        </div>

        <span className="px-4 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
          2020 - 2021
        </span>
      </div>
    </div>
  </div>

  {/* Download Button */}
  <div className="flex justify-center mt-16">
    <a
      href="/CV.pdf"
      download
      className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
    >
      📄 Download Resume
    </a>
  </div>
</section>


      {/* Contact */}
      {/* Contact Section */}
<section id="contact" className="mt-32 px-10 pb-20">



  <h2 className="text-5xl font-extrabold mt-2">
    Contact
  </h2>

  {/* Grid Layout */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* Left Form Box */}
    <div className="p-10 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-lg">

      <form className="space-y-6">

        {/* Name */}
        <div>
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-teal-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            placeholder="your.email@example.com"
            className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-teal-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            placeholder="Your message..."
            rows={5}
            className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-teal-400"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-lg hover:opacity-90 transition"
        >
          Send Message ↗️
        </button>
      </form>
    </div>

    {/* Right Contact Info Box */}
    <div className="p-10 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-lg">

      <h3 className="text-3xl font-bold text-blue-400">
        Contact Information
      </h3>

      <div className="mt-8 space-y-6">

        {/* Email */}
        <ContactItem
          title="✉️Email"
          value="jaihari3399@gmail.com"
        />

        {/* Phone */}
        <ContactItem
          title="📞Phone"
          value="+91-8903001280"
        />

        {/* LinkedIn */}
        <ContactItem
          title="🔗LinkedIn"
          value="https://www.linkedin.com/in/r-jai-hari-balaji-272541294/1/"
        />

        {/* GitHub */}
        <ContactItem
          title="💻GitHub"
          value="https://github.com/RJaiHariBalaji"
        />
      </div>

      {/* Follow Me */}
      <div className="mt-10 border-t border-gray-700 pt-7">
        <p className="text-gray-400 mb-4">Let’s Build Intelligent Systems Together </p>

      
      </div>
    </div>

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
function SkillCard({ name }: { name: string }) {
  return (
    <div className="p-4 border border-gray-700 rounded-2xl hover:border-white transition">
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
}

function SkillBox({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="p-8 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-lg">

      {/* Title */}
      <h3 className="text-xl font-bold flex items-center gap-2">
        {title}
      </h3>

      {/* Chips */}
      <div className="mt-5 flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-1 rounded-full bg-gray-800 text-gray-200 text-sm hover:bg-gray-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactItem({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-lg text-gray-200">{value}</p>
    </div>
  );
}

function SocialCircle({ text }: { text: string }) {
  return (
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white font-bold hover:bg-gray-700 transition cursor-pointer">
      {text}
    </div>
  );
}


/* Certificate Card */
function CertificateCard({
  title,
  desc,
  platform,
  date,
  link,
}: {
  title: string;
  desc: string;
  platform: string;
  date: string;
  link: string;
}) {
  return (
    <div
      className="bg-[#0b1220] border border-gray-700 rounded-2xl overflow-hidden shadow-xl 
      transform hover:scale-105 hover:border-blue-500 transition duration-300"
    >
      {/* Content */}
      <div className="p-8">

        {/* Title */}
        <h3 className="text-2xl font-bold text-blue-400">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mt-4 text-sm leading-relaxed">
          {desc}
        </p>

        {/* Footer Info */}
        <div className="flex justify-between text-gray-400 text-sm mt-6">
          <span>{platform}</span>
          <span className="text-blue-300">{date}</span>
        </div>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block w-full text-center px-6 py-3 
          bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition"
        >
          View Certificate →
        </a>
      </div>
    </div>
  );
}

function AchievementCard({
  icon,
  title,
  desc,
  date,
}: {
  icon: string;
  title: string;
  desc: string;
  date: string;
}) {
  return (
    <div className="bg-[#0b1220] border border-gray-700 rounded-2xl p-8 flex items-start justify-between hover:border-blue-500 transition shadow-lg">

      {/* Left */}
      <div className="flex items-start gap-6">

        {/* Icon Circle */}
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-900 text-2xl">
          {icon}
        </div>

        {/* Text */}
        <div>
          <h3 className="text-xl font-bold text-blue-400">
            {title}
          </h3>

          <p className="text-gray-300 mt-2 max-w-xl leading-relaxed">
            {desc}
          </p>
        </div>

      </div>

      {/* Date */}
      <div className="bg-purple-900 text-purple-300 px-4 py-1 rounded-full text-sm whitespace-nowrap">
        {date}
      </div>

    </div>
  );
}

/* Project Card */
function ProjectCard({
  title,
  desc,
  img,
  githubLink,
}: {
  title: string;
  desc: string;
  img: string;
  githubLink?: string;
}) {
  return (
    <div className="bg-[#0b1220] border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500 transition w-full max-w-lg shadow-xl">

      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-base mt-4 leading-relaxed">
          {desc}
        </p>

        {/* ✅ View Code Button */}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-2 rounded-xl 
                       bg-[#111827] border border-blue-500 
                       text-blue-400 font-semibold 
                       hover:bg-blue-600 hover:text-white transition"
          >
             View Code
          </a>
        )}
      </div>
    </div>
  );
}




 