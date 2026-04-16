import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Brain,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  LayoutDashboard,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Summary", id: "summary" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const quickSummary = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Software Development",
    text: "Built academic and personal projects using Python, Java, SQL, React, and modern frontend tools.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Machine Learning Thesis",
    text: "Developed a real-time concrete crack detection project using TensorFlow, OpenCV, and transfer learning.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "QA Mindset",
    text: "Hands-on exposure to testing, UI review, and usability thinking through internship and project work.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Leadership",
    text: "Former student council president with experience organizing events, coordinating teams, and communicating clearly.",
  },
];

const featuredProject = {
  title: "Real-Time Concrete Crack Detection System",
  label: "Featured Project",
  description:
    "A computer vision and machine learning project designed to detect concrete cracks in real time, combining image processing and transfer learning for practical structural monitoring use cases.",
  impact:
    "This project represents my strongest technical work because it combines software development, model training, data handling, and real-time image analysis into one end-to-end system.",
  role: [
    "Built and trained the classification workflow using TensorFlow and Keras.",
    "Integrated OpenCV for image handling and real-time processing.",
    "Worked with crack image datasets and model evaluation during thesis development.",
  ],
  challenge:
    "Balancing model accuracy with responsiveness while handling different crack appearances, lighting conditions, and image quality.",
  stack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
};

const projects = [
  {
    title: "Minesweeper Game",
    category: "Desktop Game",
    shortDescription:
      "A logic-driven game focused on grid interaction, mine placement, and responsive tile reveal behavior.",
    summary:
      "Built a playable Minesweeper game to practice core logic design, game state handling, and GUI interaction.",
    contributions: [
      "Implemented mine placement and safe-tile reveal behavior.",
      "Handled win and loss conditions through game state logic.",
      "Structured the game flow for reliable and replayable interaction.",
    ],
    challenge:
      "Ensuring the tile-reveal behavior felt correct and predictable while keeping the gameplay responsive.",
    tech: ["Python", "Tkinter"],
    images: ["/minesweeper1.png", "/minesweeper2.png", "/minesweeper3.png"],
    accent: "from-amber-400/20 via-yellow-300/10 to-transparent",
  },
  {
    title: "2048 Puzzle Game",
    category: "Desktop Game",
    shortDescription:
      "A number-merging puzzle game focused on movement logic, score tracking, and board state updates.",
    summary:
      "Created a 2048 game to strengthen algorithmic thinking and improve how I structure interactive logic.",
    contributions: [
      "Implemented tile movement and merge behavior.",
      "Added score tracking and game-over handling.",
      "Managed state updates for a smooth player experience.",
    ],
    challenge:
      "Getting merge behavior and directional updates to work consistently across all move states.",
    tech: ["Python"],
    images: ["/2048-1.png", "/2048-2.png", "/2048-3.png", "/2048-4.png"],
    accent: "from-indigo-400/20 via-blue-300/10 to-transparent",
  },
  {
    title: "Tetris with Score System",
    category: "Desktop Game",
    shortDescription:
      "A falling-block game built around timing, collision handling, line clearing, and score progression.",
    summary:
      "Developed a Tetris clone to work on real-time gameplay loops, collision logic, and incremental difficulty.",
    contributions: [
      "Built block movement and board collision handling.",
      "Implemented line clearing and score tracking.",
      "Managed gameplay pacing to keep the loop playable and stable.",
    ],
    challenge:
      "Keeping the gameplay logic reliable as multiple moving parts changed at the same time.",
    tech: ["Python", "Pygame"],
    images: ["/tetris1.png", "/tetris2.png", "/tetris3.png"],
    accent: "from-fuchsia-400/20 via-pink-300/10 to-transparent",
  },
  {
    title: "Modular Snake Game",
    category: "Desktop Game",
    shortDescription:
      "An OOP-based Snake game with separated components for game logic, UI behavior, and food handling.",
    summary:
      "Built this project with a more modular structure to practice maintainability and cleaner code organization.",
    contributions: [
      "Separated core game responsibilities into reusable components.",
      "Used object-oriented structure for game entities and state behavior.",
      "Improved maintainability compared with a single-file approach.",
    ],
    challenge:
      "Designing the project in a way that stayed simple while still showing clear separation of concerns.",
    tech: ["Python", "Pygame", "OOP"],
    images: ["/snake1.png", "/snake2.png", "/snake3.png"],
    accent: "from-cyan-400/20 via-sky-300/10 to-transparent",
  },
  {
    title: "Tic Tac Toe GUI",
    category: "Desktop Game",
    shortDescription:
      "A GUI-based game that demonstrates event handling, turn logic, and win-condition validation.",
    summary:
      "Created a desktop Tic Tac Toe game to reinforce interactive programming and user input handling.",
    contributions: [
      "Implemented turn-based player logic.",
      "Added win and draw detection rules.",
      "Built a simple desktop interface for direct interaction.",
    ],
    challenge:
      "Keeping the logic clean while making the interface easy to follow for repeated play.",
    tech: ["Python", "Tkinter"],
    images: ["/tictactoe1.png", "/tictactoe2.png", "/tictactoe3.png"],
    accent: "from-violet-400/20 via-purple-300/10 to-transparent",
  },
];

const experiences = [
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "UI/UX Designer & QA Tester",
    subtitle: "EGC Extreme Unreal Technology Inc.",
    points: [
      "Supported UI review and usability-focused improvements for game-related projects.",
      "Contributed to QA testing by identifying issues and observing user experience gaps.",
      "Gained practical exposure to how design decisions affect product quality.",
    ],
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "BS Computer Science Graduate",
    subtitle: "New Era University",
    points: [
      "Built a strong foundation in programming, systems thinking, and software project development.",
      "Completed a machine learning thesis focused on real-time crack detection.",
      "Worked on multiple academic and personal projects that strengthened coding discipline.",
    ],
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Former Student Council President",
    subtitle: "College of Informatics and Computing Studies",
    points: [
      "Led student-focused initiatives and coordinated events related to the computing field.",
      "Worked with teams, speakers, and faculty to organize technical and academic activities.",
      "Strengthened leadership, communication, and responsibility under pressure.",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "SQL", "JavaScript", "C#"],
  },
  {
    title: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    items: ["VS Code", "Git", "Figma", "Unity3D"],
  },
  {
    title: "Data / ML / Testing",
    items: ["TensorFlow", "Keras", "OpenCV", "MySQL", "QA Testing"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div variants={fadeUp} className="max-w-3xl">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200/90">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-zinc-300 sm:text-lg">{text}</p>
    </motion.div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        top: `${(index * 17 + 11) % 100}%`,
        left: `${(index * 13 + 7) % 100}%`,
        duration: 12 + (index % 5) * 2,
        delay: (index % 4) * 0.8,
      })),
    []
  );

  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-18% 0px -18% 0px",
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const showPrevImage = (event) => {
    event.stopPropagation();
    if (!selectedProject?.images?.length) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const showNextImage = (event) => {
    event.stopPropagation();
    if (!selectedProject?.images?.length) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 -z-50 bg-[#050816]" />
      <div className="absolute inset-0 -z-40 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.10),transparent_24%)]" />
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_20%,rgba(255,255,255,0.01))]" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="pointer-events-none absolute -z-20 h-1.5 w-1.5 rounded-full bg-cyan-300/30 blur-[1px]"
          style={{ top: particle.top, left: particle.left }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.6, 0.15],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">Marc Capinpin</p>
              <p className="text-xs text-zinc-400">Junior Software Developer</p>
            </div>
          </button>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeSection === item.id
                    ? "bg-white text-black"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/Marc_Capinpin_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-300/30 hover:bg-white/10 lg:inline-flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-200 lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="border-t border-white/10 bg-[#050816]/95 px-6 py-4 backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`rounded-2xl px-4 py-3 text-left text-sm transition ${
                      activeSection === item.id
                        ? "bg-white text-black"
                        : "bg-white/5 text-zinc-200"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="/Marc_Capinpin_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-medium text-slate-950"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        <section id="home" className="px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
              >
                <Sparkles className="h-4 w-4" />
                Building software that is functional, clean, and user-aware
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
              >
                Hi, I’m Marc Capinpin — a junior software developer focused on building
                <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
                  {" "}useful, well-structured applications.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg"
              >
                I’m a Computer Science graduate with experience across software development,
                machine learning, QA thinking, and UI-focused project work. My goal is to
                contribute as a developer who can build, test, and continuously improve real
                products.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="/Marc_Capinpin_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 grid gap-4 text-sm text-zinc-300 sm:grid-cols-3"
              >
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-2xl font-semibold text-white">Python</p>
                  <p className="mt-1">Primary language across thesis and game projects</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-2xl font-semibold text-white">QA-aware</p>
                  <p className="mt-1">Pays attention to usability, bugs, and product behavior</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-2xl font-semibold text-white">ML Thesis</p>
                  <p className="mt-1">Computer vision project with practical technical depth</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-violet-400/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-black/30">
                <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300">
                  <span className="inline-flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4 text-cyan-200" />
                    Recruiter Snapshot
                  </span>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                    Open to opportunities
                  </span>
                </div>

                <img
                  src="/profile.jpg"
                  alt="Marc Capinpin"
                  className="h-[360px] w-full rounded-[1.5rem] object-cover object-top"
                />

                <div className="mt-5 grid gap-3 text-sm text-zinc-300">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-medium text-white">Focus</p>
                    <p className="mt-1">Junior software development, frontend projects, and QA-aware execution.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-medium text-white">Strength</p>
                    <p className="mt-1">Can combine code implementation, clean UI thinking, and practical problem solving.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="summary" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <SectionTitle
                eyebrow="Quick Overview"
                title="A faster way to understand what I bring to a team"
                text="This section is designed for recruiters and hiring managers who want the clearest possible summary of my technical profile, project background, and work style."
              />

              <motion.div variants={stagger} className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {quickSummary.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-100">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
              <SectionTitle
                eyebrow="Featured Work"
                title="Projects that show how I think, build, and improve"
                text="Instead of showing projects as a simple gallery, I’ve structured them to reflect problem solving, implementation decisions, and the kind of work I want to do professionally."
              />

              <motion.div
                variants={fadeUp}
                className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05]"
              >
                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
                    <p className="inline-flex rounded-full border border-orange-300/20 bg-orange-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-orange-100">
                      {featuredProject.label}
                    </p>
                    <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-zinc-300">
                      {featuredProject.description}
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                      <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                          Why it matters
                        </p>
                        <p className="mt-3 text-sm leading-7 text-zinc-300">{featuredProject.impact}</p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                          Key challenge
                        </p>
                        <p className="mt-3 text-sm leading-7 text-zinc-300">{featuredProject.challenge}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                        My role
                      </p>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300">
                        {featuredProject.role.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-200" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                        Tech stack
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {featuredProject.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-medium text-zinc-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={stagger} className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <motion.button
                    key={project.title}
                    variants={fadeUp}
                    onClick={() => openProject(project)}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-0 text-left"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-100 transition duration-300 group-hover:opacity-100`} />
                    <div className="relative flex h-full flex-col p-6">
                      <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
                        {project.category}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-zinc-300">
                        {project.shortDescription}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {project.images?.[0] ? (
                        <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/20">
                          <img
                            src={project.images[0]}
                            alt={project.title}
                            className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                      ) : null}

                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-100">
                        View case study
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
              <SectionTitle
                eyebrow="Experience & Background"
                title="Proof that I can contribute beyond coursework"
                text="Even as a fresh graduate, I already have relevant experience through internship work, project execution, and leadership responsibilities that reflect how I operate in team environments."
              />

              <motion.div variants={stagger} className="mt-10 grid gap-6 lg:grid-cols-3">
                {experiences.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-100">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{item.subtitle}</p>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-300">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-cyan-200" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
              <SectionTitle
                eyebrow="Skills"
                title="A focused stack instead of an overloaded list"
                text="I’ve kept this section intentional. These are the tools and technologies I can confidently talk about based on actual project, thesis, and learning experience."
              />

              <motion.div variants={stagger} className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {skillGroups.map((group) => (
                  <motion.div
                    key={group.title}
                    variants={fadeUp}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
                  >
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs font-medium text-zinc-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24 pt-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03]"
            >
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 sm:p-10 lg:p-12">
                  <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100">
                    <User className="h-3.5 w-3.5" />
                    Let’s connect
                  </p>
                  <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    I’m ready to contribute to a team where I can keep building, learning, and delivering quality work.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
                    I’m currently open to junior software development opportunities where I can bring my technical foundation, QA awareness, and willingness to grow through real-world work.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="mailto:marc.capinpin29.mc@gmail.com"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                    >
                      <Mail className="h-4 w-4" />
                      Email Me
                    </a>
                    <a
                      href="/Marc_Capinpin_Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Resume
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                  <div className="space-y-4">
                    <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                      <p className="text-sm text-zinc-400">Email</p>
                      <a
                        href="mailto:marc.capinpin29.mc@gmail.com"
                        className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-white hover:text-cyan-100"
                      >
                        <Mail className="h-4 w-4" />
                        marc.capinpin29.mc@gmail.com
                      </a>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                      <p className="text-sm text-zinc-400">Phone</p>
                      <a
                        href="tel:09055570801"
                        className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-white hover:text-cyan-100"
                      >
                        <Phone className="h-4 w-4" />
                        09055570801
                      </a>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-black/20 p-5 text-sm leading-7 text-zinc-300">
                      Available for junior developer opportunities, entry-level software roles, and teams that value both technical growth and product quality.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1020] shadow-2xl shadow-black/40"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={closeProject}
                className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-white transition hover:bg-white/10"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[1fr_0.95fr]">
                <div className="relative border-b border-white/10 bg-black/20 lg:border-b-0 lg:border-r">
                  {selectedProject.images?.length ? (
                    <>
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} preview ${currentImageIndex + 1}`}
                        className="h-[320px] w-full object-cover sm:h-[380px] lg:h-full"
                      />
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={showPrevImage}
                            className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur hover:bg-black/65"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            onClick={showNextImage}
                            className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur hover:bg-black/65"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 backdrop-blur">
                            {selectedProject.images.map((image, index) => (
                              <button
                                key={image}
                                onClick={(event) => {
                                  event.stopPropagation();
                                  setCurrentImageIndex(index);
                                }}
                                className={`h-2.5 w-2.5 rounded-full transition ${
                                  index === currentImageIndex ? "bg-white" : "bg-white/35"
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="flex h-full min-h-[320px] items-center justify-center p-8 text-zinc-400">
                      No image preview available.
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
                    {selectedProject.category}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-zinc-300">
                    {selectedProject.summary}
                  </p>

                  <div className="mt-7 rounded-3xl border border-white/10 bg-black/20 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                      What I worked on
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300">
                      {selectedProject.contributions.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-cyan-200" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 rounded-3xl border border-white/10 bg-black/20 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                      Main challenge
                    </p>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">{selectedProject.challenge}</p>
                  </div>

                  <div className="mt-5 rounded-3xl border border-white/10 bg-black/20 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                      Tech stack
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProject.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-zinc-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
