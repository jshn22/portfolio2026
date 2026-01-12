import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Cpu, 
  Terminal, 
  Award, 
  Smartphone, 
  Globe,
  ChevronRight,
  Menu,
  X,
  FileText,
  Download
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Your Specific Social Links
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/jashanpreet-kaur-b90202318/",
    github: "https://github.com/jshn22",
    email: "mailto:Jashanpreetdandiwalll@gmail.com",
    phone: "+91 9253154322",
    resumeUrl: "#" // Add your hosted resume link here (e.g., Google Drive or Vercel link)
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certs' },
    { name: 'Contact', id: 'contact' }
  ];

  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    ai: ['Generative AI', 'Prompt Engineering', 'LLM Interaction'],
    tools: ['Git & GitHub', 'Netlify', 'Vercel', 'Render', 'Agile/Scrum'],
    others: ['Python', 'SQL', 'Data Structures & Algorithms']
  };

  const projects = [
    {
      title: "Civic Assist",
      type: "MERN Stack Project",
      description: "A full-stack community issue tracker allowing users to post, track, and manage local civic issues like public service problems.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"],
      link: "#",
      github: socialLinks.github 
    },
    {
      title: "Restaurant Website",
      type: "Responsive UI",
      description: "A single-page, fully responsive restaurant platform focusing on clean layout and intuitive user experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: socialLinks.github
    },
    {
      title: "LMS Landing Page",
      type: "Frontend Design",
      description: "Visually appealing landing page for a Learning Management System built with responsive design principles.",
      tech: ["HTML", "CSS", "RWD"],
      link: "#",
      github: socialLinks.github
    }
  ];

  const certifications = [
    { name: "Prompt Engineering", issuer: "Vanderbilt University", date: "Aug 2024" },
    { name: "Introducing Generative AI", issuer: "AWS", date: "July 2025" },
    { name: "Agile Development & Scrum", issuer: "IBM", date: "April 2025" },
    { name: "Introduction to Git & GitHub", issuer: "Google", date: "Jan 2025" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            JK.
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className="text-sm font-medium hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className="text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6">
                  Available for Internships
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Aspiring <span className="text-indigo-600">Frontend Developer</span> & Prompt Engineer.
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
                  Hi, I'm Jashanpreet Kaur. I'm a 2nd-year BCA student at Eternal University and a residential student at NavGurukul. 
                  I bridge the gap between creative frontend design and AI-driven efficiency.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href="#contact" className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all flex items-center gap-2">
                    Get in touch
                  </a>
                  <a href={socialLinks.resumeUrl} className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center gap-2">
                    <Download size={18} />
                    Resume
                  </a>
                  <div className="flex gap-3">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-slate-200 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 transition-all">
                      <Github size={20} />
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 border border-slate-200 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 transition-all">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-3xl rotate-6 absolute -z-10 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-center items-center text-center relative">
                 {/* Replace the src with your uploaded image path or a hosted link */}
                 <img 
                    src="/api/placeholder/400/400" 
                    alt="Jashanpreet Kaur" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                 />
                 <div className="hidden absolute inset-0 flex-col items-center justify-center bg-slate-50 p-8">
                    <div className="w-24 h-24 rounded-full bg-indigo-50 mb-6 flex items-center justify-center">
                        <Code size={40} className="text-indigo-600" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 italic">"Crafting modern web experiences with code and AI."</h3>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Globe size={24} />
              </div>
              <h3 className="font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map(s => <span key={s} className="px-3 py-1 bg-white rounded-lg text-xs font-medium border border-slate-200">{s}</span>)}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all">
              <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center mb-4">
                <Cpu size={24} />
              </div>
              <h3 className="font-bold mb-4">AI & GenAI</h3>
              <div className="flex flex-wrap gap-2">
                {skills.ai.map(s => <span key={s} className="px-3 py-1 bg-white rounded-lg text-xs font-medium border border-slate-200">{s}</span>)}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Terminal size={24} />
              </div>
              <h3 className="font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(s => <span key={s} className="px-3 py-1 bg-white rounded-lg text-xs font-medium border border-slate-200">{s}</span>)}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <FileText size={24} />
              </div>
              <h3 className="font-bold mb-4">Fundamentals</h3>
              <div className="flex flex-wrap gap-2">
                {skills.others.map(s => <span key={s} className="px-3 py-1 bg-white rounded-lg text-xs font-medium border border-slate-200">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 bg-slate-100 relative flex items-center justify-center">
                  <div className="text-slate-300 group-hover:scale-110 transition-transform">
                    <Code size={60} />
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-sm hover:text-indigo-600 transition-colors">
                      <Github size={18} />
                    </a>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-sm hover:text-indigo-600 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{project.type}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 bg-slate-50 rounded font-bold text-slate-500">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section id="certs" className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Certs */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Award className="text-indigo-600" />
                Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors flex justify-between items-center group">
                    <div>
                      <h4 className="font-bold group-hover:text-indigo-600 transition-colors">{cert.name}</h4>
                      <p className="text-sm text-slate-500">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-semibold text-slate-400">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Smartphone className="text-indigo-600" />
                Education
              </h2>
              <div className="relative border-l-2 border-slate-100 ml-4 pl-8 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
                  <h4 className="font-bold text-lg">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-slate-600">Eternal University, Baru Sahib</p>
                  <p className="text-sm font-semibold text-indigo-600 mt-1 italic">Expected: Jan 2027</p>
                  <p className="text-sm text-slate-500 mt-2">Residential student at NavGurukul intensive residential program.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
                  <h4 className="font-bold text-lg">Senior Secondary (Arts)</h4>
                  <p className="text-slate-600">Govt. Sen Sec. School Phaggu</p>
                  <p className="text-sm font-semibold text-slate-500 mt-1">Grade: 86%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's build something together.</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">
            I'm currently looking for frontend development or prompt engineering internships. If you have a project in mind or just want to say hi, feel free to reach out.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <a href={socialLinks.email} className="p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-4 group">
              <Mail className="text-indigo-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm md:text-base">Jashanpreetdandiwalll@gmail.com</span>
            </a>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center gap-4">
              <Smartphone className="text-indigo-400" />
              <span>{socialLinks.phone}</span>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-slate-100 bg-white text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Jashanpreet Kaur. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
};

export default App;