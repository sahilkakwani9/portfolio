import { Icons } from "@/components/icons";
import { Book, HomeIcon, NotebookIcon, TrophyIcon } from "lucide-react";
import { GithubIcon } from "../../public/icons/github";
import { LinkIcon } from "../../public/icons/link";

export const DATA = {
  name: "Sarthak Shah",
  initials: "SS",
  url: "https://www.0xsarthak.xyz/",
  description: "I Code.",
  summary: `
I'm a full-stack developer with an experience of working with various languages and blockchains.

Previously, I've interned at 3x early-stage startups and have won 20x hackathons🏆. I enjoy contributing to open source projects. I'm also a member at FBI (@callusfbi) and contributor at SuperteamIn (@superteamIn).

Beyond code, I'm passionate about cinematography and am stepping out of my comfort zone to create both technical and non-technical content. I'm a sneakerhead, love traveling, and enjoy endless talks on finance. Also, I play chess.
`,
  avatarUrl: "/me.jpg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/wins", icon: TrophyIcon, label: "Wins" },
    { href: "/bookshelf", icon: Book, label: "Bookshelf" },
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
        name: "Wins",
        url: "/wins",
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
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/work/gasyard.png",
      start: "January 2025",
      end: "Current",
      description:
        "Implemented multiple cross-chain bridge routes, including Hyperliquid,  Movement, Monad (Testnet), and other EVM/Non-EVM integrations for both Testnet and Mainnet environments. Built the Gasyard Bridge Explorer using Next.js, TypeScript, Tanstack Query, Zustand, and Tailwind CSS, providing an interface for transaction tracking. Developed Fuelbae Agent, a powerful tool that enables users to execute complex DeFi actions seamlessly across various protocols.",
    },
    {
      company: "0rbit",
      href: "https://www.0rbit.co/",
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/work/0rbit.jpg",
      start: "March 2024",
      end: "December 2024",
      description:
        "Developed multiple smart contracts in Lua for the AO Ecosystem, while battle-testing 0rbit's core infrastructure and contributing to the core node. I also integrated frontend tutorials using AOConnect, showcasing 0rbit's capabilities in blog posts. Beyond code, I enhanced the documentation, converted Figma designs into functional UI components, and contributed to the website development. Additionally, I handled social media content and authored blogs and technical documentation, ensuring a better developer experience.",
    },
    {
      company: "Pyano",
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
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/work/d2clytics.jpg",
      start: "January 2024",
      end: "April 2024",
      description:
        "Developed over 35 charts using various libraries with React.js and TailwindCSS. I led the end-to-end state management process and converted more than 30 pages Figma design into functional code.",
    },
  ],
  openSource: [
    {
      company: "Send",
      href: "https://www.thesendcoin.com/",
      title: "Open Source Contributor",
      logoUrl: "/work/send.png",
      description:
        "Built a dashboard for SendAI during the Send AI Hackathon, contributed to the website, and built backend [in Flask] and frontend [in Next.js] for a product named 'trAI'",
      prLinks: [],
    },
  ],
  projects: [
    {
      Frontend: {
        "Sol UI": {
          id: 1,
          links: [
            {
              type: "Website",
              href: "https://sol-ui.vercel.app/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/sol-ui",
              icon: <GithubIcon className="size-9" />,
            },
          ],
        },
        "AO Calculator": {
          id: 2,
          links: [
            {
              type: "Website",
              href: "https://ao-unit-converter.ar-io.net/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/ao-unit-converter",
              icon: <GithubIcon className="size-9" />,
            },
          ],
        },
        EthMumbai: {
          id: 3,
          links: [
            {
              type: "Website",
              href: "https://mumbaieth.vercel.app/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/eth-mumbai",
              icon: <GithubIcon className="size-9" />,
            },
          ],
        },
      },
      Backend: {},
      "Full Stack": {},
      "Smart Contracts": {
        "Foundry Stablecoin": {
          id: 1,
          description:
            "This project is meant to be a stablecoin where users can deposit WETH and WBTC in exchange for a token that will be pegged to the USD.",
          links: [
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/defi-stablecoin",
              icon: <GithubIcon className="size-9" />,
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
              icon: <GithubIcon className="size-9" />,
            },
          ],
        },
        "DAO - Foundry": {
          id: 2,
          description:
            "On-chain voting system for DAOs",
          links: [
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/foundry-dao",
              icon: <GithubIcon className="size-9" />,
            },
          ],
        },
        "ERC - 4337 / Foundry": {
          id: 2,
          description:
            "A project to learn Account Abstraction using EIP-4337",
          links: [
            {
              type: "Source",
              href: "https://github.com/Not-Sarthak/foundry-account-abstraction",
              icon: <GithubIcon className="size-9" />,
            },
          ],
        },
      },
    },
  ],
  wins: {
    "Fellow @Wormhole India": {
      link: "",
      type: "title",
    },
    "Based Builder of the Year '24": {
      link: "",
      type: "title",
    },
    "Contributor @SuperteamIn": {
      link: "",
      type: "title",
    },
    "Player @callusfbi": {
      link: "",
      type: "title",
    },
    "ETHIndia '24 - Bounty Winner": {
      link: "",
      type: "hackathon",
    },
    "Onchain AI Fellowship - by @callusfbi - Selected": {
      link: "",
      type: "hackathon",
    },
    "EthBangkok '24 - Bounty Winner": {
      link: "",
      type: "hackathon",
    },
    "Encode Club BTC Hackathon - 2nd Place": {
      link: "",
      type: "hackathon",
    },
    "Funding the Commons '24 Bangkok - Bounty Winner": {
      link: "",
      type: "hackathon",
    },
    "Based India '24 - Winner List": {
      link: "",
    },
    "Colosseum Radar Hackathon - 2x Bounties": {
      link: "",
      type: "hackathon",
    },
    "100xDevs Hackathon - Bounty": {
      link: "",
      type: "hackathon",
    },
    "Stellar Builders' Residency - 1st Place": {
      link: "",
      type: "hackathon",
    },
    "Stellar IndiaThon '24 - Infra Track": {
      link: "",
      type: "hackathon",
    },
    "NuvYuva Tinkerthon '24 - 2nd Place": {
      link: "",
      type: "hackathon",
    },
    "ITMBU Hackathon '24 - 2nd Place": {
      link: "",
      type: "hackathon",
    },
    "HackTheLeague '24 - 2x Bounties": {
      link: "",
      type: "hackathon",
    },
    "Arweave HackerHouse '1 - Runner Up": {
      link: "",
      type: "hackathon",
    },
  },
  books: [
    {
      title: "Think and Grow Rich - Napoleon Hill"
    },
    {
      title: "Before you Start Up - Pankaj Goyal"
    },
    {
      title: "Zero to One - Peter Thiel"
    },
    {
      title: "The 5 AM Club - Robin Sharma"
    },
    {
      title: "The Network State - Balaji Srinivasan"
    }
  ],
} as const;
