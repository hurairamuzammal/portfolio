import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronRight, Github, Linkedin, ExternalLink, Download, Code2, Monitor, Brain, Smartphone, Mail } from 'lucide-react';
import {
    SiCplusplus, SiDart, SiPython, SiNumpy, SiTensorflow, SiPandas, SiPytorch, SiKeras,
    SiFirebase, SiVercel, SiFlutter, SiSqlite, SiSupabase, SiFigma, SiCanva, SiGimp
} from 'react-icons/si';
import { UniverseBackground } from './components/UniverseBackground';
import { RocketLaunch } from './components/RocketLaunch';

const AnimatedClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return (
        <div className="flex items-center gap-2 font-mono text-[#38bdf8] bg-[#0f172a]/80 backdrop-blur-md border border-[#38bdf8]/30 px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-shadow">
            <span className="text-xl font-black tracking-widest">{hours}</span>
            <span className="text-xl font-black animate-[pulse_1s_ease-in-out_infinite] opacity-80 text-[#0ea5e9]">:</span>
            <span className="text-xl font-black tracking-widest">{minutes}</span>
            <span className="text-sm font-bold opacity-50 ml-1 mt-1">{seconds}</span>
            <span className="ml-3 text-[10px] font-bold text-slate-400 tracking-widest uppercase bg-white/5 px-2 py-1 rounded-md">PKT</span>
        </div>
    );
};

const GITHUB_PROJECTS = [
    {
        name: "Dictionary-DataStructure",
        description: "An excellent demonstration of efficient data structures like Trie and Hash maps to store, edit, and delete words and meanings.",
        language: "C++",
        link: "https://github.com/hurairamuzammal/Dictionary-DataStructure-Project"
    },
    {
        name: "Notlyfe-Student-Organizer",
        description: "A Flutter app that contains features to facilitate students in managing lectures notes and todos across multiple devices. The app features beautiful Material You colors.",
        language: "Dart",
        link: "https://github.com/hurairamuzammal/Notlyfe-Student-Oragnizer"
    },
    {
        name: "Image Captioning Model",
        description: "An end-to-end image captioning system that combines computer vision and natural language processing to generate descriptive text for visual content.",
        language: "Python",
        link: "https://github.com/hurairamuzammal/image_captioning_model"
    },
    {
        name: "NLP_Finetuning_Bert_GPT2_T5",
        description: "Finetuning various large language models including BERT, GPT-2, and T5 for advanced NLP tasks.",
        language: "Python",
        link: "https://github.com/hurairamuzammal/NLP_Finetuning_Bert_GPT2_T5"
    },
    {
        name: "Flight-Management-System",
        description: "A comprehensive backend system built in C# .NET to manage flights, destinations, reporting, and ticketing with robust object-oriented architecture.",
        language: "C#",
        link: "https://github.com/hurairamuzammal/Flight-Management-System"
    }
];

const LINKEDIN_PROJECTS = [
    {
        name: "AI-Powered CRM System",
        description: "Built a comprehensive customer relationship management system integrating customized LLMs for dynamic query resolution and sentiment analysis.",
        role: "Lead Full Stack Developer",
        date: "2024 - Present"
    },
    {
        name: "Cross-Platform E-commerce App",
        description: "Developed and launched a scalable flutter application serving 10k+ daily users with sub-second latency and offline capabilities.",
        role: "Mobile Architect",
    },
    {
        name: "Transformer Neural Network",
        description: "Implemented a transformer neural network from scratch to understand the working of transformers.",
        role: "Machine Learning Engineer",
    }
];

const EDUCATION = [
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "National University of Computer and Emerging Sciences",
        date: "2022 - 2026",
        description: "Computer Science with Specialization in Vision and Artificial Intelligence"
    }
];

const TECH_LOGOS = [
    { name: "C++", Icon: SiCplusplus, color: "text-[#00599C]", hoverBorder: "hover:border-[#00599C]" },
    { name: "Dart", Icon: SiDart, color: "text-[#0175C2]", hoverBorder: "hover:border-[#0175C2]" },
    { name: "Python", Icon: SiPython, color: "text-[#3776AB]", hoverBorder: "hover:border-[#3776AB]" },
    { name: "Firebase", Icon: SiFirebase, color: "text-[#FFCA28]", hoverBorder: "hover:border-[#FFCA28]" },
    { name: "Vercel", Icon: SiVercel, color: "text-white", hoverBorder: "hover:border-white" },
    { name: "Flutter", Icon: SiFlutter, color: "text-[#02569B]", hoverBorder: "hover:border-[#02569B]" },
    { name: "SQLite", Icon: SiSqlite, color: "text-[#003B57]", hoverBorder: "hover:border-[#003B57]" },
    { name: "Supabase", Icon: SiSupabase, color: "text-[#3ECF8E]", hoverBorder: "hover:border-[#3ECF8E]" },
    { name: "Figma", Icon: SiFigma, color: "text-[#F24E1E]", hoverBorder: "hover:border-[#F24E1E]" },
    { name: "Canva", Icon: SiCanva, color: "text-[#00C4CC]", hoverBorder: "hover:border-[#00C4CC]" },
    { name: "GIMP", Icon: SiGimp, color: "text-[#5C5543]", hoverBorder: "hover:border-[#5C5543]" },
    { name: "NumPy", Icon: SiNumpy, color: "text-[#013243]", hoverBorder: "hover:border-[#013243]" },
    { name: "TensorFlow", Icon: SiTensorflow, color: "text-[#FF6F00]", hoverBorder: "hover:border-[#FF6F00]" },
    { name: "Pandas", Icon: SiPandas, color: "text-[#150458]", hoverBorder: "hover:border-[#150458]" },
    { name: "PyTorch", Icon: SiPytorch, color: "text-[#EE4C2C]", hoverBorder: "hover:border-[#EE4C2C]" },
    { name: "Keras", Icon: SiKeras, color: "text-[#D00000]", hoverBorder: "hover:border-[#D00000]" },
];

function App() {
    const [scrolled, setScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#000000] text-white relative font-sans w-full max-w-[100vw] overflow-x-hidden" style={{ overflowX: 'clip' }}>
            {/* Global Spotlight Effect */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.06), transparent 40%)`
                }}
            />

            <UniverseBackground mousePosition={mousePosition} />

            {/* Navigation */}
            <nav className="fixed top-6 w-full z-50 transition-all duration-500 ease-in-out px-6">
                <div className="mx-auto rounded-full border border-[#38bdf8]/30 bg-[#020617]/60 backdrop-blur-xl shadow-[0_0_20px_rgba(56,189,248,0.15)] flex items-center justify-between max-w-5xl px-8 py-4 transition-all duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:border-[#38bdf8]/50">
                    <div className="text-xl font-bold text-[#38bdf8]">
                        Muhammad Abu Huraira
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#about" className="text-sm font-semibold text-slate-300 hover:text-[#38bdf8] transition-colors">About</a>
                        <a href="#projects" className="text-sm font-semibold text-slate-300 hover:text-[#38bdf8] transition-colors">Projects</a>
                        <a href="#experience" className="text-sm font-semibold text-slate-300 hover:text-[#38bdf8] transition-colors">Experience</a>
                        <a href="#contact" className="text-sm font-semibold text-slate-300 hover:text-[#38bdf8] transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 pt-40 pb-24 px-6 lg:px-12 max-w-6xl mx-auto w-full flex flex-col gap-32">



                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 min-h-[60vh] w-full p-8 md:p-12 lg:p-16 rounded-[3rem] bg-[#020617]/40 backdrop-blur-xl border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                    id="about"
                >
                    <div className="flex-1 flex flex-col items-start gap-8">
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#34d399] tracking-widest text-[10px] font-bold uppercase shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                            Open for New Projects
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight -ml-1">
                            <span className="text-white block mb-2">Hello! I'm</span>
                            <div className="min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] flex items-start w-full">
                                <TypeAnimation
                                    sequence={[
                                        'Muhammad Abu Huraira.', 2500,
                                        'a Flutter App Developer.', 2500,
                                        'an AI Model Builder.', 2500,
                                        'an AI App Creator.', 2500
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#67e8f9] block whitespace-normal break-words"
                                    repeat={Infinity}
                                />
                            </div>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-light text-balance mt-4">
                            I specialize in high-performance, intelligent solutions through custom AI integration and native-feel cross-platform excellence.
                        </p>

                        <div className="flex items-center gap-6 mt-2">
                            <button className="px-8 py-4 rounded-full bg-[#0ea5e9] text-white font-bold text-lg hover:bg-[#0284c7] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_10px_20px_rgba(14,165,233,0.3)]">
                                View Work <ChevronRight className="w-5 h-5" />
                            </button>
                            <a href="mailto:huraira.eqeel@gmail.com" className="text-slate-400 hover:text-[#38bdf8] transition-colors hover:scale-110 active:scale-95 ml-4">
                                <Mail className="w-7 h-7" />
                            </a>
                            <a href="https://github.com/hurairamuzammal" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 active:scale-95">
                                <Github className="w-7 h-7" />
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-abu-huraira-a44a60248/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 active:scale-95">
                                <Linkedin className="w-7 h-7" />
                            </a>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full max-w-[300px] lg:max-w-[380px] flex-shrink-0 group"
                    >
                        <div className="absolute -left-6 lg:-left-12 top-20 w-20 h-20 lg:w-24 lg:h-24 bg-[#1e293b] rounded-[1.5rem] flex items-center justify-center border border-white/5 shadow-2xl z-20 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:scale-110 group-hover:bg-[#0f172a] transition-all duration-500">
                            <Code2 className="w-8 h-8 lg:w-10 lg:h-10 text-white group-hover:text-[#38bdf8] transition-colors duration-500" />
                        </div>
                        <div className="absolute -right-4 lg:-right-8 bottom-32 w-16 h-16 lg:w-20 lg:h-20 bg-[#1e293b] rounded-[1.2rem] flex items-center justify-center border border-white/5 shadow-2xl z-20 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:scale-110 group-hover:bg-[#0f172a] transition-all duration-500 delay-75">
                            <Brain className="w-6 h-6 lg:w-8 lg:h-8 text-white group-hover:text-[#34d399] transition-colors duration-500" />
                        </div>
                        <div className="absolute left-8 -bottom-6 w-14 h-14 lg:w-16 lg:h-16 bg-[#1e293b] rounded-2xl flex items-center justify-center border border-white/5 shadow-2xl z-20 group-hover:-translate-y-4 group-hover:scale-110 group-hover:bg-[#0f172a] transition-all duration-500 delay-150">
                            <Smartphone className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:text-[#818cf8] transition-colors duration-500" />
                        </div>
                        <div className="aspect-[3.5/5] rounded-[2.5rem] overflow-hidden relative border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] group-hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.25)] transition-all duration-500 cursor-pointer">
                            <img src="/me.jpg" alt="Muhammad Abu Huraira" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Tech Skills Marquee (The Small Different Section) */}
                <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
                    <section className="relative overflow-hidden py-24 bg-[#0a0f1c] border-y border-[#38bdf8]/20 shadow-[0_0_50px_rgba(56,189,248,0.05)_inset]">
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/50 to-transparent"></div>
                        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/50 to-transparent"></div>
                        <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-[#0a0f1c] to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-[#0a0f1c] to-transparent z-10 pointer-events-none"></div>
                        <div className="flex w-max animate-marquee items-center gap-16 py-4">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex gap-16 items-center flex-nowrap shrink-0">
                                    {['Flutter', 'Dart', 'Python', 'AI Model Finetuning', 'Full Stack Apps'].map((tech) => (
                                        <span key={`${i}-${tech}`} className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10 uppercase tracking-tighter whitespace-nowrap px-4 mix-blend-screen">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            {/* --- ROCKET LAUNCH TRANSITION --- */}
            <RocketLaunch />

            <main className="relative z-10 py-24 px-6 lg:px-12 max-w-6xl mx-auto w-full flex flex-col gap-32">

                {/* Tech Stack Universe Section */}
                <section id="tech-stack" className="scroll-mt-32 w-full p-8 md:p-12 lg:p-16 rounded-[3rem] bg-[#020617]/40 backdrop-blur-xl border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                    <h2 className="text-4xl font-black text-white mb-16 tracking-tight text-center">Tools & Technologies</h2>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-4 pb-12">
                        {TECH_LOGOS.map((tech, j) => (
                            <div
                                key={j}
                                className={`flex flex-col items-center justify-center gap-4 w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-[#0f172a] border border-white/5 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer group ${tech.hoverBorder} hover:bg-[#1e293b]/50`}
                            >
                                <tech.Icon className={`w-10 h-10 md:w-12 md:h-12 ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg`} />
                                <span className="text-slate-400 font-semibold text-xs md:text-sm tracking-wider uppercase group-hover:text-white transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="scroll-mt-32 w-full p-8 md:p-12 lg:p-16 rounded-[3rem] bg-[#020617]/40 backdrop-blur-xl border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                    <h2 className="text-4xl font-black text-white mb-16 tracking-tight">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {GITHUB_PROJECTS.map((project, idx) => (
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx}
                                className="flex flex-col justify-start gap-6 w-full p-10 rounded-[2.5rem] bg-[#020617]/80 backdrop-blur-xl border border-white/10 hover:bg-[#0f172a]/90 hover:border-[#38bdf8]/30 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                                    <ExternalLink className="w-6 h-6 text-[#38bdf8]" />
                                </div>
                                <div className="flex flex-col items-start gap-6 w-full h-full">
                                    <div className="w-16 h-16 rounded-[1.2rem] bg-[#0f172a] border border-white/5 flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover:bg-[#38bdf8]/10 group-hover:border-[#38bdf8]/30 transition-colors">
                                        <Github className="w-8 h-8 text-white group-hover:text-[#38bdf8] transition-colors" />
                                    </div>
                                    <div className="flex-1 max-w-full flex flex-col pt-2">
                                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#38bdf8] transition-colors leading-tight tracking-tight break-all md:break-words">{project.name}</h3>
                                        <p className="text-sm lg:text-base text-slate-400 font-light leading-relaxed flex-1">{project.description}</p>
                                    </div>
                                    <div className="flex items-center gap-3 mt-auto pt-4 w-full">
                                        <div className="w-3 h-3 rounded-full bg-[#0ea5e9] shadow-[0_0_12px_rgba(14,165,233,0.8)] group-hover:scale-125 transition-transform"></div>
                                        <span className="text-[13px] font-bold text-white tracking-[0.2em] uppercase">{project.language}</span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </section>

                {/* Experience & Resources Vertical Layout */}
                <section className="flex flex-col gap-32">
                    {/* Experience Section */}
                    <div id="experience" className="scroll-mt-32 w-full p-8 md:p-12 lg:p-16 rounded-[3rem] bg-[#020617]/40 backdrop-blur-xl border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                        <h2 className="text-4xl font-black text-white mb-16 tracking-tight">Experience</h2>
                        <div className="flex flex-col">
                            {LINKEDIN_PROJECTS.map((exp, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    key={idx}
                                    className="border-b border-white/10 py-10 flex flex-col group"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-[#34d399] transition-colors">{exp.name}</h3>
                                        <span className="text-sm font-bold text-slate-400 tracking-widest uppercase">{exp.date}</span>
                                    </div>
                                    <h4 className="text-[#0ea5e9] font-semibold text-lg mb-6">{exp.role}</h4>
                                    <p className="text-lg text-slate-400 font-light leading-relaxed">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Resources Section */}
                    <div id="resources" className="scroll-mt-32 w-full p-8 md:p-12 lg:p-16 rounded-[3rem] bg-[#020617]/40 backdrop-blur-xl border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                        <h2 className="text-4xl font-black text-white mb-16 tracking-tight">Resources</h2>
                        <div className="flex flex-col md:flex-row gap-6">
                            <motion.a
                                href="/cricket_world.pdf"
                                target="_blank"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-8 p-8 rounded-3xl bg-[#020617]/80 backdrop-blur-xl border border-white/10 hover:bg-[#0f172a]/90 hover:border-[#38bdf8]/30 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all group"
                            >
                                <div className="w-16 h-16 rounded-[1.2rem] bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                    <Code2 className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2">Resume Profile</h3>
                                    <p className="text-slate-400 text-sm tracking-wide uppercase font-semibold">PDF Document • 1.4MB</p>
                                </div>
                                <Download className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                            </motion.a>

                            <motion.a
                                href="/Notlyfe Posters-1 conv 3_compressed.pdf"
                                target="_blank"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-center gap-8 p-8 rounded-3xl bg-[#020617]/80 backdrop-blur-xl border border-white/10 hover:bg-[#0f172a]/90 hover:border-[#38bdf8]/30 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all group"
                            >
                                <div className="w-16 h-16 rounded-[1.2rem] bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                    <Monitor className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2">Notlyfe Posters</h3>
                                    <p className="text-slate-400 text-sm tracking-wide uppercase font-semibold">PDF Document • 835KB</p>
                                </div>
                                <Download className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                            </motion.a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Expanded Footer Layer */}
            <footer id="contact" className="relative z-10 py-16 px-6 lg:px-12 border-t border-white/10 bg-gradient-to-b from-[#020617]/90 to-[#000000] backdrop-blur-3xl shadow-[0_-30px_60px_rgba(0,0,0,0.5)]">
                <div className="max-w-6xl mx-auto flex flex-col gap-12">

                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                        <div className="flex flex-col gap-4 max-w-sm">
                            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">Muhammad Abu Huraira.</span>
                            <p className="text-slate-400 font-light leading-relaxed">
                                Building Intelligent & Premium Digital Experiences. Constantly exploring the deep universe of AI and beautiful interface design.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 md:text-right">
                            {/* Contact Info */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2">Get in Touch</h4>
                                <a href="mailto:huraira.eqeel@gmail.com" className="flex items-center md:justify-end gap-3 text-slate-400 hover:text-[#38bdf8] transition-colors group">
                                    <span className="font-medium">huraira.eqeel@gmail.com</span>
                                    <Mail className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                                </a>
                                <div className="flex items-center md:justify-end gap-3 text-slate-400 select-all group">
                                    <span className="font-medium leading-relaxed max-w-[150px]">Lahore, Pakistan</span>
                                </div>
                                <div className="flex md:justify-end mt-2 cursor-default">
                                    <AnimatedClock />
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2">Socials</h4>
                                <div className="flex items-center md:justify-end gap-6">
                                    <a href="https://github.com/hurairamuzammal" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-[#0f172a] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/10 transition-all hover:-translate-y-1">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/muhammad-abu-huraira-a44a60248/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-[#0f172a] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/10 transition-all hover:-translate-y-1">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider & Copyright */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4"></div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-light text-slate-500">
                        <span>© 2026 Muhammad Abu Huraira. All rights reserved.</span>
                        <span className="flex items-center gap-1">Designed with <span className="text-[#ef4444] text-lg animate-pulse">♥</span> from deep space</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
