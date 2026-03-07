import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sowmya Musti",
  initials: "SM",
  url: "",
  location: "Visakhapatnam, India",
  description:
"Full Stack Web Developer | MERN Stack" ,
  summary:
"I’m a Full Stack Developer specialised in MERN stack and related frameworks & tools, currently building scalable SaaS applications. Beyond coding, I enjoy collaborating and contributing to the developer ecosystem."  ,
// avatarUrl: "/pfp.jpeg",
  skills: [
    "React",
    "Tailwind CSS",
    "Javascript", 
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "C++",
    "PostgreSQL",
    "MongoDB",
    "Docker",
  ],
  availability: {
    status: "Available",
    message: "Open to work and freelance opportunities.",
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sowmyamls2005@gmail.com",
    // tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/m-sowmya7",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sowmya-musti/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/MustiSowmya",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
        company: "nDmatrix",
        href: "https://www.ndmatrix.in/", // add company website if available
        badges: ["Internship"],
        location: "Hyderabad, Telangana, India", 
        title: "Software Development Intern",
        logoUrl: "https://www.ndmatrix.in/images/nDMartrixFinalLogo-removebg.png", // add logo URL if available
        start: "March 2026", // update with actual start date
        end: "Present",
        description:
          "........................",
      },     
  ],
  education: [
    {
      school: "Vignan's Institute of Information Technology, Autonomous",
      href: "https://vignaniit.edu.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhj1lyqXoOx1gAixFhndTzWTDy9mBmqkelCA&s",
      start: "2022",
      end: "2026",
    },
  ],
  pprojects: [
    {
      title: "FitLens",
      dates: "2025",
      active: true,
      description:
        "An AI-powered fitness assistant that analyzes workout form in real-time. Provided with instant voice feedback, enabling hands-free workout correction. Implemented custom joint angle calculations and landmark tracking to accurately count repetitions and detectposture deviations.",
      technologies: [
        "React.js", "Python", "Flask", "Mediapipe", "OpenCV", "gTTs", "pyglet"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/m-sowmya7/Fitness/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fitlens.png",
      video: "",
    },
    {
      title: "TuneTribe",
      href: "https://tune-tribe.smyweb.xyz/",
      dates: "2025",
      active: true,
      description:
        "A responsive music streaming platform with dynamic UI. Focused on mobile-first design, adaptive layouts and smooth animations. Designed an engaging experience with trending music feeds, intelligent song suggestions, and a floating mini player.",
      technologies: ["React.js", "TailwindCSS", "Vite ", "JioSaavn API"],
      links: [
        {
          type: "Website",
          href: "https://tune-tribe.smyweb.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/m-sowmya7/TuneTribe/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tune.png", // Add screenshot: "/snapchain.png" (place in /public folder) or use external URL
      video: "", // Optional: Add demo video URL
    },
    {
      title: "Zippy",
      href: "https://discord.com/invite/VBsWGrqqZ3",
      dates: "2025",
      active: true,
      description:
        "Engineered a Discord bot that instantly shortens long URLs into compact, shareable links for chat efficiency. Utilized nanoid to generate collision-resistant IDs, ensuring link uniqueness at scale.",
      technologies: ["Discordjs", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "https://discord.com/invite/VBsWGrqqZ3",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/m-sowmya7/URL-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // image: "/fork.png",
      image: "/discord.png", 
      video: "", // Add screenshot: "/forkyoudaddy.png" (place in /public folder) or use external URL
    },
    {
      title: "AI Interior",
      href: "https://www.tinytag.xyz/ai-interior",
      dates: "2025",
      active: true,
      description:
        "Designed an AI-driven web platform that restyles room images into themes such as Minimalist, Contemporary, Bohemian, Modern, and Traditional. Allowed users to specify room type for context-aware interior transformations. Displaying the transformed images in a responsive personal gallery.",
      technologies: ["Next.js", "Clerk", "Supabase", "Cloudflare"],
      links: [
        {
          type: "Website",
          href: "https://www.tinytag.xyz/ai-interior",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/m-sowmya7/AI-interior",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // image: "/fork.png",
      image: "/interior.png", 
      video: "", // Add screenshot: "/forkyoudaddy.png" (place in /public folder) or use external URL
    },
  ],
} as const;
