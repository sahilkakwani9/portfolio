import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sarthak Shah",
  initials: "SS",
  url: "https://www.0xsarthak.xyz/",
  description: "I Code.",
  summary: `
I'm a full-stack developer with an experience of working with various languages and blockchains.

Previously, I’ve interned at 3x early-stage startups and have won 20x hackathons🏆. I enjoy contributing to open source projects. I'm also a member at FBI (@callusfbi) and contributor at SuperteamIn (@superteamIn).

Beyond code, I’m passionate about cinematography and am stepping out of my comfort zone to create both technical and non-technical content. I’m a sneakerhead, love traveling, and enjoy endless talks on finance. Also, I play chess.
`,
  avatarUrl: "/me.jpg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "notsarthakshah@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Not-Sarthak/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sarthak-shah-49267b224/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/0xSarthak13",
        icon: Icons.x,

        navbar: true,
      },
      gm: {
        name: "Work",
        url: "",
        icon: Icons.work,
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
      company: "Gasyard",
      href: "https://gasyard.fi/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/work/gasyard.png",
      start: "January 2025",
      end: "Current",
      description:
        "I worked on implementing the Hyperliquid Bridge Route. Additionally, I built the Gasyard Bridge Explorer using Next, TypeScript, Tanstack Query, Zustand, and Tailwind CSS, delivering an efficient interface for tracking bridge transactions. Apart from this, I also built the Fuelbae Agent, which is a tool that allows users to perform DeFi Actions.",
    },
    {
      company: "0rbit",
      href: "https://www.0rbit.co/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/work/0rbit.jpg",
      start: "March 2024",
      end: "December 2024",
      description:
        "Developed multiple smart contracts in Lua for the AO Ecosystem, while battle-testing 0rbit’s core infrastructure and contributing to the core node. I also integrated frontend tutorials using AOConnect, showcasing 0rbit's capabilities in blog posts. Beyond code, I enhanced the documentation, converted Figma designs into functional UI components, and contributed to the website development. Additionally, I handled social media content and authored blogs and technical documentation, ensuring a better developer experience.",
    },
    {
      company: "Pyano",
      badges: [],
      href: "",
      location: "Remote",
      title: "Software Developer Intern (Part-Time)",
      logoUrl: "/work/pyano.png",
      start: "May 2024",
      end: "June 2024",
      description:
        "Developed a complete desktop application using Electron.js, integrating multiple LLM API endpoints into the frontend. Successfully deployed the stable release through Amazon S3 and GitHub Releases, ensuring seamless access for users.",
    },
    {
      company: "D2Clytics",
      href: "",
      badges: [],
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/work/d2clytics.jpg",
      start: "January 2020",
      end: "April 2020",
      description:
        "Developed over 35 charts using various libraries with React.js and TailwindCSS. I led the end-to-end state management process and converted more than 30 pages Figma design into functional code.",
    },
  ],
  projects: [
    {
      Frontend: {
        "Sol UI": {
          id: 1,
          description:
            "Create Solana sites at warp speed with our reusable, style-ready components—purely OPOS magic!",
          links: [
            {
              type: "Website",
              href: "https://sol-ui.vercel.app/",
              icon: <Icons.globe className="size-3" />,
            },
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/sol-ui",
              icon: <Icons.github className="size-3" />,
            },
          ],
        },
        "AO Calculator": {
          id: 2,
          description:
            "A simple calculator that converts between AO and Armstrong units.",
          links: [
            {
              type: "Website",
              href: "https://ao-unit-converter.ar-io.net/",
              icon: <Icons.globe className="size-3" />,
            },
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/ao-unit-converter",
              icon: <Icons.github className="size-3" />,
            },
          ],
        },
        EthMumbai: {
          id: 3,
          description:
            "A website for EthMumbai with an SVG logo that changes colors based on user preferences and allows users to mint it as a NFT.",
          links: [
            {
              type: "Website",
              href: "https://mumbaieth.vercel.app/",
              icon: <Icons.globe className="size-3" />,
            },
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/eth-mumbai",
              icon: <Icons.github className="size-3" />,
            },
          ],
        },
      },
      "Smart Contracts": {
        "Foundry Stablecoin": {
          id: 1,
          description:
            "This project is meant to be a stablecoin where users can deposit WETH and WBTC in exchange for a token that will be pegged to the USD.",
          links: [
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/defi-stablecoin",
              icon: <Icons.github className="size-3" />,
            },
          ],
        },
        "Merkle Airdrop": {
          id: 2,
          description:
            "An introduction to the Merkle Airdrop and Signatures project",
          links: [
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/merkle-airdrop",
              icon: <Icons.github className="size-3" />,
            },
          ],
        },
      },
      Backend: {},
      "Full Stack": {},
    },
  ],
  wins: {
    "Wormhole Fellow": {
      description: "Description",
      link: "",
    },
    "Based Builder of the Year '24": {
      description: "Description",
      link: "",
    },
    "Contributor @SuperteamIn": {
      description: "Description",
      link: "",
    },
    "Player @callusfbi": {
      description: "Description",
      link: "",
    },
    "Arweave HH '1 Runner Up": {
      description: "Description",
      link: "",
    },
    "20x Hackathon 🏆": {
      description: "Description",
      link: "",
    },
  },
} as const;
