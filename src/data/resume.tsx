import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sarthak Shah",
  initials: "SS",
  url: "https://www.0xsarthak.xyz/",
  description:
    "I Code.",
  summary:
    `gm, I'm Sarthak

I'm a full-stack developer with an experience of working with various languages and blockchains.

Previously, I’ve interned at 2x early-stage startups and have won 7x hackathons🏆. I enjoy contributing to open source projects and currently am a contributor at @0rbit💫.

Beyond code, I’m passionate about cinematography and am stepping out of my comfort zone to create both technical and non-technical content. I’m a sneakerhead, love traveling, and enjoy endless talks on finance. Also, I play chess.
`
  ,
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Rust",
    "Solidity",
    "Databases",
  ],
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
      company: "0rbit",
      href: "https://www.0rbit.co/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/0rbit.jpg",
      start: "March 2024",
      end: "Present",
      description: "Developed multiple smart contracts in Lua for the AO Ecosystem, while battle-testing 0rbit’s core infrastructure and contributing to the core node. I also integrated frontend tutorials using AOConnect, showcasing 0rbit's capabilities in blog posts. Beyond code, I enhanced the documentation, converted Figma designs into functional UI components, and contributed to the website development. Additionally, I handled social media content and authored blogs and technical documentation, ensuring a better developer experience."
    },
    {
      company: "Pyano",
      badges: [],
      href: "",
      location: "Remote",
      title: "Software Developer Intern (Part-Time)",
      logoUrl: "/pyano.png",
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
      logoUrl: "/d2clytics.jpg",
      start: "January 2020",
      end: "April 2020",
      description:
        "Developed over 35 charts using various libraries with React.js and TailwindCSS. I led the end-to-end state management process and converted more than 30 pages Figma design into functional code.",
    },
  ],

  projects: [
    {
      title: "Sol UI",
      href: "https://sol-ui.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
      ],
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
      image: "",
      video: "/projects/solui.mp4",
    },
    {
      title: "Foundry Stablecoin",
      href: "https://github.com/Not-Sarthak/defi-stablecoin",
      dates: "August 2024",
      active: true,
      description:
        "This project is meant to be a stablecoin where users can deposit WETH and WBTC in exchange for a token that will be pegged to the USD.",
      technologies: [
        "Foundry",
        "Solidity",
        "Chainlink",
        "Open Zeppelin",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/defi-stablecoin",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/stablecoin.mp4",
    },
    {
      title: "Merkle Airdrop",
      href: "https://github.com/Not-Sarthak/merkle-airdrop",
      dates: "August 2024",
      active: true,
      description:
        "An introduction to the Merkle Airdrop and Signatures project",
      technologies: [
        "Foundry",
        "Solidity",
        "EIP-4844"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/merkle-airdrop",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/merkle.png",
      video:
        "",
    },
    {
      title: "AO Calculator",
      href: "https://ao-unit-converter.ar-io.net/",
      dates: "September 2024",
      active: true,
      description:
        "Convert effortlessly between AO and Armstrong units. No need to count zeroes.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Arweave",
        "AO"
      ],
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
      image: "",
      video:
        "/projects/ao-calculator.mp4",
    },
    {
      title: "Eth Mumbai",
      href: "https://mumbaieth.vercel.app/",
      dates: "March 2024",
      active: true,
      description:
        "A website for EthMumbai with an SVG logo that changes colors based on user preferences and allows users to mint it as a NFT.",
      technologies: [
        "Next.js",
        "JavaScript",
        "TailwindCSS",
        "Zora",
      ],
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
      image: "/projects/ethmumbai.png",
      video:
        "",
    },
    {
      title: "BaseWave",
      href: "https://www.youtube.com/watch?v=i0FlVIL-6FM",
      dates: "May 2024",
      active: true,
      description:
        "Frictionless, Decentralized Recurring Payments for Builders on Base built at Onchain Summer [FBI]",
      technologies: [
        "Next.js",
        "TypeScript",
        "Hardhat",
        "JavaScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=i0FlVIL-6FM",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ForkingAwesome/basewave",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/basewave.svg",
      video: "",
    },
    {
      title: "FuelCaster",
      href: "https://github.com/ForkingAwesome/fuelcaster",
      dates: "April 2024",
      active: true,
      description:
        "FuelCaster, featuring the VadaPav Token, is a faucet for the Fuel Network built on Farcaster Frames.",
      technologies: [
        "Next.js",
        "Farcaster Frames",
        "Fuel",
        "Sway",
      ],
      links: [
        {
          type: "Website",
          href: "https://x.com/0xSarthak13/status/1788907538043531380",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ForkingAwesome/fuelcaster",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/fuelcaster.png",
      video: "",
    },
    {
      title: "Quill",
      href: "https://quill-flow.vercel.app/",
      dates: "July 2023",
      active: true,
      description: "Quill, built on the Flow blockchain, empowers bloggers with ownership, control, and direct monetization of their content.",
      technologies: [
        "React.js",
        "JavaScript",
        "Cadence",
        "CSS",
        "Material UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://quill-flow.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Not-Sarthak/quill",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/quill.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
  ],
} as const;
