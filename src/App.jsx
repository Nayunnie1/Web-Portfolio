import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Code2,
  Gamepad2,
  Brain,
  Sparkles,
  User,
  Menu,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroGlow, setHeroGlow] = useState({ x: 50, y: 50 });

  const heroRef = useRef(null);

  const fullText = useMemo(
    () =>
      "> Hi, I'm Marc — aspiring developer, QA-driven builder, and problem solver.",
    []
  );

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i += 1;
      if (i >= fullText.length) clearInterval(interval);
    }, 28);

    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    "Python",
    "Java",
    "SQL",
    "C#",
    "Unity3D",
    "TensorFlow",
    "HTML/CSS/JavaScript",
    "QA Testing",
  ];

  const projects = [
  {
    title: "Minesweeper Game",
    shortDescription: "Classic grid-based logic game.",
    description:
      "A logic-based Minesweeper game that challenges players to uncover safe tiles while avoiding hidden mines. It demonstrates grid-based mechanics, game state handling, conditional logic, and interactive desktop gameplay.",
    tech: "Python, Tkinter",
    badge: "Featured",
    images: ["/minesweeper1.png", "/minesweeper2.png", "/minesweeper3.png"],
    icon: <Gamepad2 className="h-5 w-5" />,
    glow: "from-amber-500/20 to-yellow-500/10",
  },
  {
    title: "2048 Puzzle Game",
    shortDescription: "Tile merging puzzle game with scoring.",
    description:
      "A 2048 puzzle game implementation featuring tile merging mechanics, score tracking, and win/lose conditions. It demonstrates grid manipulation, algorithmic thinking, and efficient state updates for smooth gameplay.",
    tech: "Python",
    badge: "Featured",
    images: ["/2048-1.png", "/2048-2.png", "/2048-3.png", "/2048-4.png"],
    icon: <Gamepad2 className="h-5 w-5" />,
    glow: "from-indigo-500/20 to-blue-500/10",
  },
  {
    title: "Tetris Game with Score System",
    shortDescription: "Falling blocks with score tracking.",
    description:
      "A classic Tetris implementation featuring falling block mechanics, line clearing logic, score tracking, and increasing difficulty. It demonstrates real-time game loops, collision handling, and dynamic gameplay progression.",
    tech: "Python, Pygame",
    badge: "Featured",
    images: ["/tetris1.png", "/tetris2.png", "/tetris3.png"],
    icon: <Gamepad2 className="h-5 w-5" />,
    glow: "from-pink-500/20 to-purple-500/10",
  },
  {
    title: "Modular Snake Game (OOP + GUI)",
    shortDescription: "OOP-based snake game with modular structure.",
    description:
      "An enhanced Snake game built with a modular structure using object-oriented programming. It features separated components for game logic, GUI, food system, and snake behavior, making the project more scalable and maintainable.",
    tech: "Python, Pygame, OOP",
    images: ["/snake1.png", "/snake2.png", "/snake3.png"],
    icon: <Gamepad2 className="h-5 w-5" />,
    glow: "from-cyan-500/20 to-blue-500/10",
  },
  {
    title: "Tic Tac Toe GUI Game",
    shortDescription: "Interactive GUI-based Tic Tac Toe.",
    description:
      "A desktop-based Tic Tac Toe game with a graphical user interface, featuring player turns, win detection logic, and interactive gameplay. It demonstrates core programming logic, event handling, and GUI development.",
    tech: "Python, Tkinter",
    images: ["/tictactoe1.png", "/tictactoe2.png", "/tictactoe3.png"],
    icon: <Code2 className="h-5 w-5" />,
    glow: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    title: "Real-Time Concrete Crack Detection Using CNN",
    shortDescription: "CNN-based crack detection system.",
    description:
      "A machine learning project focused on detecting concrete cracks using Python and TensorFlow, with transfer learning techniques to improve model performance and classification accuracy.",
    tech: "Python, TensorFlow, Data Analysis",
    badge: "Thesis Project",
    icon: <Brain className="h-5 w-5" />,
    glow: "from-orange-500/20 to-red-500/10",
  },
];

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        size: 4 + ((i * 7) % 10),
        left: `${(i * 11 + 7) % 100}%`,
        top: `${(i * 13 + 9) % 100}%`,
        duration: 10 + (i % 6) * 2,
        delay: (i % 5) * 0.8,
      })),
    []
  );

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.96,
      filter: "blur(6px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    if (!selectedProject?.images?.length) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    if (!selectedProject?.images?.length) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHeroMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setHeroGlow({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setHeroGlow({ x: 50, y: 50 });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-50 bg-black" />

      <motion.div
        className="absolute inset-0 -z-40 opacity-90"
        animate={{
          background: [
            "radial-gradient(circle at 15% 20%, rgba(34,211,238,0.18), transparent 28%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.16), transparent 30%), radial-gradient(circle at 50% 80%, rgba(59,130,246,0.12), transparent 28%)",
            "radial-gradient(circle at 25% 30%, rgba(34,211,238,0.18), transparent 28%), radial-gradient(circle at 70% 25%, rgba(168,85,247,0.16), transparent 30%), radial-gradient(circle at 55% 75%, rgba(59,130,246,0.12), transparent 28%)",
            "radial-gradient(circle at 15% 20%, rgba(34,211,238,0.18), transparent 28%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.16), transparent 30%), radial-gradient(circle at 50% 80%, rgba(59,130,246,0.12), transparent 28%)",
          ],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.55)]"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 18, 0],
              opacity: [0.2, 0.85, 0.2],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute left-[-10%] top-[8%] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-[8%] left-[30%] h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:40px_40px]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_25px_rgba(34,211,238,0.12)] transition group-hover:border-cyan-400/40">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold tracking-wide text-white">
                Marc Capinpin
              </p>
              <p className="text-xs text-slate-400">Developer Portfolio</p>
            </div>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    active
                      ? "bg-white text-black shadow-[0_0_24px_rgba(255,255,255,0.12)]"
                      : "text-slate-300 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="border-t border-white/10 bg-black/80 px-6 pb-4 pt-2 backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const active = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`rounded-xl px-4 py-3 text-left text-sm transition ${
                        active
                          ? "bg-white text-black"
                          : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-8 md:pb-16 md:pt-12">
        <motion.section
          id="home"
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative mb-24 grid items-center gap-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-6 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl before:absolute before:inset-0 before:rounded-[2.5rem] before:bg-gradient-to-br before:from-white/[0.05] before:to-transparent before:content-[''] lg:grid-cols-[1.15fr,0.85fr] md:px-8 md:py-12"
        >
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-100"
            animate={{
              background: `radial-gradient(circle at ${heroGlow.x}% ${heroGlow.y}%, rgba(34,211,238,0.16), transparent 22%)`,
            }}
            transition={{ duration: 0.15, ease: "linear" }}
          />

          <motion.div
            className="pointer-events-none absolute inset-0 opacity-80"
            animate={{
              background: `radial-gradient(circle at ${heroGlow.x}% ${heroGlow.y}%, rgba(168,85,247,0.10), transparent 34%)`,
            }}
            transition={{ duration: 0.22, ease: "linear" }}
          />

          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/10" />

          <div className="relative z-10">
            <motion.div
              className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"
              animate={{
                x: [0, 30, -10, 0],
                y: [0, -20, 15, 0],
                scale: [1, 1.08, 0.96, 1],
                opacity: [0.35, 0.5, 0.3, 0.35],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="pointer-events-none absolute left-40 top-44 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl"
              animate={{
                x: [0, -24, 12, 0],
                y: [0, 18, -16, 0],
                scale: [1, 1.06, 0.94, 1],
                opacity: [0.28, 0.4, 0.22, 0.28],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.08)]">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <span>Crafting clean, interactive digital experiences</span>
            </div>

            <div className="mb-6 max-w-4xl">
              <p className="mb-3 text-sm uppercase tracking-[0.32em] text-cyan-300/90">
                COMPUTER SCIENCE GRADUATE • ASPIRING DEVELOPER
              </p>

              <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl xl:text-7xl">
                Marc Kristofer
                <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Capinpin
                </span>
              </h1>
            </div>

            <motion.div
              className="relative mb-6 max-w-2xl rounded-[1.75rem] border border-cyan-500/20 bg-zinc-950/65 p-5 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-2xl"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(34,211,238,0.06)",
                  "0 0 45px rgba(34,211,238,0.12)",
                  "0 0 30px rgba(34,211,238,0.06)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-r from-cyan-500/8 via-blue-500/5 to-violet-500/8"
                animate={{
                  opacity: [0.25, 0.5, 0.25],
                  scale: [1, 1.015, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <p className="relative min-h-[48px] font-mono text-sm text-cyan-300 md:text-base">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            <p className="mb-8 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I build interactive applications with a strong focus on usability,
              reliability, and clean execution. My portfolio blends software
              development, QA-driven thinking, and creative project work into one
              polished experience.
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <a href="/Marc_Capinpin_Resume.pdf" download>
                <button className="group rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02] hover:opacity-95 active:scale-[0.98]">
                  <span className="inline-flex items-center gap-2">
                    Download Resume
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </button>
              </a>

              <a
                href="/Marc_Capinpin_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-white backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/10 active:scale-[0.98]">
                  View Resume
                </button>
              </a>
            </div>

            <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <p className="text-2xl font-bold text-white">6+</p>
                <p className="mt-1 text-sm text-slate-400">
                  Completed Projects
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <p className="text-2xl font-bold text-white">Python & JS</p>
                <p className="mt-1 text-sm text-slate-400">
                  Core build stack
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <p className="text-2xl font-bold text-white">QA</p>
                <p className="mt-1 text-sm text-slate-400">
                  Quality-first mindset
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative z-10 flex justify-center"
          >
            <motion.div
              className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-3xl"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.45, 0.7, 0.45],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-[2.5rem] border border-cyan-400/10"
              animate={{
                opacity: [0.25, 0.55, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-3 shadow-[0_0_60px_rgba(34,211,238,0.10)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <img
                src="/profile.jpg"
                alt="Marc Kristofer Capinpin"
                className="relative h-[300px] w-[300px] rounded-[1.6rem] border border-white/10 object-cover md:h-[390px] md:w-[390px]"
              />
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="about"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <User className="h-5 w-5 text-cyan-300" />
            <h2 className="text-2xl font-semibold md:text-3xl">About Me</h2>
          </div>
          <p className="leading-8 text-slate-300">
            I am a Computer Science graduate who enjoys building interactive
            applications, solving technical problems, and improving software
            quality. I’m especially interested in projects that combine logic,
            creativity, and clean user experience.
          </p>
        </motion.section>

        <motion.section
          id="skills"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-semibold md:text-3xl">Core Skills</h2>
            <p className="mt-2 text-slate-400">
              Technologies and tools I use most often
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {skills.map((s) => (
              <motion.div
                key={s}
                variants={fadeUp}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                {s}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="projects"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-20"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-semibold md:text-3xl">Projects</h2>
            <p className="mt-2 text-slate-400">
              Selected work and experiments
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                onClick={() => openProject(p)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
                className="group flex cursor-pointer"
              >
                <div className="relative flex min-h-[420px] w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.14)] before:absolute before:inset-0 before:opacity-0 before:transition before:duration-300 before:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(34,211,238,0.16),transparent_35%)] group-hover:before:opacity-100">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.glow} opacity-0 transition duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative h-48 shrink-0 overflow-hidden border-b border-white/10 bg-black/20">
                    {p.images && p.images.length > 0 ? (
                      <img
                        src={p.images[0]}
                        alt={p.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/5 to-white/[0.02]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                          {p.icon}
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                      <span className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black shadow-lg">
                        View Project
                      </span>
                    </div>
                  </div>

                  <div className="relative flex flex-1 flex-col p-5">
                    <div className="min-h-[28px]">
                      {p.badge && (
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs ${
                            p.badge === "Featured"
                              ? "bg-cyan-500/20 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.45)] animate-pulse"
                              : "bg-violet-500/20 text-violet-300"
                          }`}
                        >
                          {p.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-lg font-semibold leading-snug">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {p.shortDescription}
                    </p>

                    <div className="mt-auto pt-5">
                      <p className="text-xs uppercase tracking-[0.14em] text-cyan-300">
                        {p.tech}
                      </p>

                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/90">
                        View details
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Contact</h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 md:grid-cols-3"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            >
              <Mail className="mb-2 text-cyan-300" />
              marc.capinpin29.mc@gmail.com
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            >
              <Phone className="mb-2 text-cyan-300" />
              0905 557 0801
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            >
              <Code2 className="mb-2 text-cyan-300" />
              Software Dev / QA
            </motion.div>
          </motion.div>
        </motion.section>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
            >
              <motion.div
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-zinc-900/95 p-5 shadow-2xl md:p-6"
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 24 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-3xl font-bold">{selectedProject.title}</h3>

                {selectedProject.badge && (
                  <span
                    className={`mt-3 inline-block rounded-full px-3 py-1 text-xs ${
                      selectedProject.badge === "Featured"
                        ? "bg-cyan-500/20 text-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.5)] animate-pulse"
                        : "bg-violet-500/20 text-violet-300"
                    }`}
                  >
                    {selectedProject.badge}
                  </span>
                )}

                <p className="mt-4 leading-7 text-slate-300">
                  {selectedProject.description}
                </p>

                {selectedProject.images && selectedProject.images.length > 0 && (
                  <>
                    <div className="relative mt-6 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={selectedProject.title}
                        className="max-h-[50vh] w-full object-contain"
                      />

                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/80"
                            onClick={showPrevImage}
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/80"
                            onClick={showNextImage}
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>

                    <p className="mt-2 text-center text-sm text-slate-400">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </p>

                    {selectedProject.images.length > 1 && (
                      <div className="mt-4 flex gap-3 overflow-x-auto">
                        {selectedProject.images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            className={`overflow-hidden rounded-xl border transition ${
                              currentImageIndex === i
                                ? "border-cyan-400"
                                : "border-white/10 hover:border-white/30"
                            }`}
                          >
                            <img
                              src={img}
                              alt={`${selectedProject.title} thumbnail ${i + 1}`}
                              className="h-16 w-24 object-contain bg-black/20"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    Tech Stack
                  </p>
                  <p className="text-cyan-200">{selectedProject.tech}</p>
                </div>

                <button
                  className="mt-6 rounded-xl bg-white px-4 py-2 text-black"
                  onClick={closeProject}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}