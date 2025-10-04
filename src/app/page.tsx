import Image from "next/image";
import { Mail, Github, Linkedin, MapPin, Phone, Briefcase, GraduationCap, Award, Code, ExternalLink } from "lucide-react";
// import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-foreground/20 mx-auto shadow-lg bg-white flex items-center justify-center">
              <span 
                className="text-6xl font-bold text-black"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                V
              </span>
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>VIDYA SAGAR</h1>
          <p className="text-2xl text-foreground/80 mb-6 font-light" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em' }}>Computer Science Student & Full Stack Developer</p>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Passionate Computer Science student with expertise in full-stack development, AI/ML, and competitive programming. 
            Building innovative solutions with modern web technologies and contributing to hackathons.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="mailto:1dt23cs242@dsatm.edu.in" className="flex items-center gap-2 hover:text-foreground/60 transition-colors">
              <Mail className="w-4 h-4" />
              1dt23cs242@dsatm.edu.in
            </a>
            <a href="tel:+919380310456" className="flex items-center gap-2 hover:text-foreground/60 transition-colors">
              <Phone className="w-4 h-4" />
              +91-9380310456
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Bengaluru, Karnataka
            </span>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://github.com/IamSagAr28"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-foreground/20 hover:bg-foreground/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vidyasagar-shetkar-93a89034b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-foreground/20 hover:bg-foreground/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-6 h-6" />
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { category: "Languages", skills: ["Python", "Java", "C", "C++", "JavaScript", "HTML", "CSS"] },
              { category: "Web Development", skills: ["React", "Node.js", "Express.js", "MongoDB", "REST API"] },
              { category: "Core CS", skills: ["Data Structures", "Algorithms", "DBMS", "OOP", "Operating Systems"] },
              { category: "AI/ML", skills: ["Machine Learning", "Artificial Intelligence", "Gemini AI"] },
              { category: "Developer Tools", skills: ["Git", "GitHub", "VS Code", "LeetCode"] },
              { category: "Other", skills: ["Android Development", "MERN Stack", "RBAC", "Web 3.0"] },
            ].map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-lg border border-foreground/10 bg-background/50 backdrop-blur-sm hover:border-foreground/30 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-foreground/10 border border-foreground/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6" />
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Experience & Internships</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: "Advanced Software Engineering Virtual Intern",
                company: "Walmart Global Tech (Forage)",
                period: "July 2025",
                location: "Remote",
                description: "Completed comprehensive virtual internship program simulating real-world engineering challenges at Walmart's backend systems.",
                achievements: [
                  "Completed tasks in Advanced Data Structures and Algorithm optimization",
                  "Designed Software Architecture for scalable systems",
                  "Implemented Relational Database Design and Data Munging techniques",
                  "Certificate: https://drive.google.com/file/d/1yMIt1Ex-ZTxN8gm5mqSpBUF9t_T8v8Sn/view",
                ],
              },
              {
                title: "Student Volunteer",
                company: "IEEE Computer Society, DSATM - SYNTHACK Hackathon",
                period: "April 2025",
                location: "Bengaluru, India",
                description: "Volunteered for SYNTHACK, a 24-hour national-level hackathon organized by IEEE CS & CSE Department.",
                achievements: [
                  "Supported event coordination and execution for 100+ participants",
                  "Assisted in technical setup and participant guidance",
                  "Received Certificate of Appreciation from IEEE",
                  "Certificate: https://drive.google.com/file/d/1rrpSIuntCgt9gtLu6DebTNCvjOjxe3j3/view",
                ],
              },
            ].map((job, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-foreground/10 bg-background/50 backdrop-blur-sm hover:border-foreground/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-foreground/80 font-medium">{job.company}</p>
                  </div>
                  <div className="text-sm text-foreground/60 mt-2 md:mt-0 md:text-right">
                    <p>{job.period}</p>
                    <p className="flex items-center gap-1 md:justify-end">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </p>
                  </div>
                </div>
                <p className="text-foreground/70 mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-foreground/40 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-6 h-6" />
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Medi-Care",
                description: "Secure, role-based medical web portal with login authentication, encrypted MongoDB storage, and Gemini AI integration for medicine alternatives. Features REST APIs with Express.js for patient records management.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
                tech: ["HTML", "CSS", "JavaScript", "Express.js", "MongoDB", "Gemini AI", "REST API", "RBAC"],
                link: "https://medi-care1528-4b4f90.netlify.app/",
              },
              {
                title: "Government Schemes Finder",
                description: "MERN stack application that helps users discover personalized government schemes. Uses MongoDB for profile storage/querying and Gemini AI to recommend relevant schemes based on user profiles.",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
                tech: ["MongoDB", "Express.js", "React", "Node.js", "Gemini AI", "REST API"],
                link: "https://yogeshs347.github.io/government_schemes_frontend/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="rounded-lg border border-foreground/10 bg-background/50 backdrop-blur-sm hover:border-foreground/30 transition-colors overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-foreground/10 border border-foreground/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm hover:text-foreground/60 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6" />
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Education</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                degree: "BE (Computer Science)",
                school: "Dayananda Sagar Academy of Technology and Management",
                period: "09/2023 - 09/2027",
                description: "Current CGPA: 8.9/10. Coursework includes Data Structures & Algorithms, DBMS, OOP, AI/ML, Web Development, and Android Development.",
              },
              {
                degree: "Second Year PU Examination",
                school: "Sharnbasaveshwar University",
                period: "03/2021 - 03/2023",
                description: "Percentage: 87%. Completed pre-university education with focus on Science and Mathematics.",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-foreground/10 bg-background/50 backdrop-blur-sm hover:border-foreground/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-foreground/80">{edu.school}</p>
                  </div>
                  <p className="text-sm text-foreground/60 mt-2 md:mt-0">{edu.period}</p>
                </div>
                <p className="text-foreground/70 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6" />
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Web 3.0 Hackathon - BITS Pilani (Apogee '25)", date: "Apr 02, 2025", link: "https://drive.google.com/file/d/1fy2zd3molO2tP4hfYBCEo_c7cjs6vRB7/view" },
              { name: "ByteVerse 7.0 Hackathon - NIT Patna", date: "Apr 30, 2025", link: "https://drive.google.com/file/d/1BmR6vGqDO-7tOV5TDZ3qzsO_YaeAa1Eu/view" },
              { name: "Microsoft SQL - Triggers (OnWingspan)", date: "May 29, 2025", link: "https://drive.google.com/file/d/1KV78Oal054QLaD8NTot-WIl0yfgMyqOl/view" },
            ].map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-foreground/10 bg-background/50 backdrop-blur-sm hover:border-foreground/30 transition-colors flex items-start gap-3 group"
              >
                <Award className="w-5 h-5 text-foreground/60 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <span className="block font-medium group-hover:text-foreground/70">{cert.name}</span>
                  <span className="text-sm text-foreground/60">{cert.date}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-foreground/60 py-8 border-t border-foreground/10">
          <p>© 2025 Vidya Sagar. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, TypeScript, Tailwind CSS, and Three.js</p>
        </footer>
      </div>
    </div>
  );
}
