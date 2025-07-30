import { Icons } from "@/components/icons";
import { Book, HomeIcon, NotebookIcon, TrophyIcon } from "lucide-react";
import { GithubIcon } from "../../public/icons/github";
import { LinkIcon } from "../../public/icons/link";

export const DATA = {
  name: "Sahil Kakwani",
  initials: "SK",
  url: "https://www.sahilkakwani9.me/",
  description: "I Code.",
  summary: `
I'm a full-stack and mobile developer passionate about building trustless systems that matter. With hands-on experience across EVM and SVM chains, I've shipped numerous mobile and fullstack projects, and written smart contracts that have processed over 50k+ transactions. My journey includes launching my own products, learning from every flop, and being an active member of SuperteamIn and Developer DAO. When I'm not coding, you'll find me grinding hackathons, ideating the next big thing, or lost in a good book.
`,
  avatarUrl: "/me.jpg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/wins", icon: TrophyIcon, label: "Wins" },
    { href: "/bookshelf", icon: Book, label: "Bookshelf" },
  ],
  contact: {
    email: "sahkakwani@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sahilkakwani9/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sahil-kakwani/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/somewhatsahil",
        icon: Icons.x,

        navbar: true,
      },
      resume: {
        name: "Download Resume",
        url: "/resume.pdf",
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
      company: "Creatorbase",
      href: "https://creatorbase.pro/",
      location: "Remote",
      title: "Co-Builder",
      logoUrl: "/work/creatorbase.png",
      start: "May 2025",
      end: "currently working",
      description:
        "Built the backend using Express.js, leveraging APIs to automate and run scheduled tasks across multiple social platforms. Developed the frontend with Next.js, TypeScript, Tanstack Query, Zustand, and Tailwind CSS, ensuring robust data fetching, state management, and a seamless user experience. Integrated analytics using Datafast to monitor and optimize platform performance.",
    },
    {
      company: "Cleo",
      href: "",
      location: "Remote",
      title: "Freelance Mobile Dev",
      logoUrl: "/work/cleo.png",
      start: "Nov 2024",
      end: "currently working",
      description:
        "Designed and developed a Self-Sovereign Identity wallet app, enabling users to generate and verify zero-knowledge proofs seamlessly. Integrated WebAssembly directly into the app, eliminating the need for web views and reducing processing overhead by 25%. Improved circuit download and storage efficiency, reducing download times by 40%.",
    },
    {
      company: "Stello",
      href: "",
      location: "Remote",
      title: "Full Stack Dev",
      logoUrl: "/work/stello.png",
      start: "Oct, 2024",
      end: "Feb. 2024",
      description:
        "Developed a robust, production-ready multi-chain wallet supporting Ethereum, Bitcoin, Solana, and Tron, ensuring seamless cross-chain functionality. Designed and implemented intricate animations for the main website, enhancing user engagement and visual appeal. Integrated advanced features such as token swaps, cross-chain bridging, and browsing, providing a comprehensive and intuitive in-app user experience.",
    },
    {
      company: "Saganize",
      href: "",
      location: "Remote",
      title: "Freelance React-Native Dev(SDK)",
      logoUrl: "/work/saganize.png",
      start: "December 2023",
      end: "Feb 2024",
      description:
        "Developed and integrated a cross-platform SDK enabling seamless in-app Solana transactions. Implemented user interfaces and integrated a webview for secure transaction handling. Created comprehensive tests to ensure robust error handling and edge case coverage.",
    }, {
      company: "Lensplay",
      href: "",
      location: "Remote",
      title: "Co-Founder",
      logoUrl: "/work/lensplay.jpg",
      start: "Jan 2023",
      end: "December 2024",
      description:
        "Created a complete application featuring a user-based feed, explore, profile, real-time notifications, and the ability to collect videos as NFTs and mirror videos. Developed an indexer to store on-chain activities in a database for notifications, and built a video player with gesture support. Achieved 10k+ registrations on the waitlist, 300+ downloads within 36 hours, and over 1k total downloads.",
    },
  ],
  openSource: [],
  projects: [
    {
      Mobile: {
        "Lensplay": {
          id: 1,
          links: [
            {
              type: "Source",
              href: "https://github.com/VIVEK-SUTHAR/LensPlay",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "LensPlay is a decentralized mobile-first video-sharing application built on top of Lens Protocol.",
        },
        "Stello": {
          id: 2,
          links: [
            {
              type: "Website",
              href: "https://stello-personal.vercel.app/",
              icon: <LinkIcon className="size-9" />,
            },
          ],
          description:
            "Stello is the only cross-chain wallet that pays back your gas",
        },

        "Carbonpay": {
          id: 3,
          links: [
            {
              type: "Source",
              href: "https://github.com/ArcticProtocol/CarbonPay",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "Carbonpay is the most eco-friendly wallet on solana",
        },
        "Timelines": {
          id: 3,
          links: [
            {
              type: "Source",
              href: "https://github.com/sahilkakwani9/timelinesxyz",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "With Timelines We tokenize each post through an algorithmic bonding curve. Early users earn by spending their time discovering and financially signaling valuable content for others",
        },
        "Solwave: React Native SDK": {
          id: 4,
          links: [
            {
              type: "Source",
              href: "https://github.com/Saganize/Solwave-native",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "Solwave enables in-app transactions for Solana mobile dApps, allowing developers to implement in-app transactions within their mobile applications without having to build an independent wallet for their users.",
        },
        "BungeeOnMob": {
          id: 5,
          links: [
            {
              type: "Source",
              href: "https://github.com/sahilkakwani9/Bungee-On-Mob",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "Brought the Bungee.exchange experience on mobile",
        },


      },
      Frontend: {
        "Stello": {
          id: 1,
          links: [
            {
              type: "Website",
              href: "https://stello-personal.vercel.app/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/sahilkakwani9/stello-personal",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "Stello is the only cross-chain wallet that pays back your gas",
        },
        "Eclipse: Solana App Day": {
          id: 2,
          links: [
            {
              type: "Website",
              href: "https://solana-app-day.vercel.app/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/sahilkakwani9/solana-app-day",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "A website for Solana App Day which is basically a distributed voting dapp on eclipse.",
        },
        "YUZU": {
          id: 3,
          links: [
            {
              type: "Website",
              href: "https://www.yuzu.game/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/sahilkakwani9/yuzu",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "YUZU is an open marketplace and launchpad for AI Gaming Models & Agents",
        },
      },
      "Full Stack": {
        ValentineXBT: {
          id: 1,
          links: [
            {
              type: "Website",
              href: "https://valentine.agixbt.com/",
              icon: <LinkIcon className="size-9" />,
            },
          ],
          description:
            "Connect with an AI companion who's always there to share moments of joy and understanding. A part of AGIXBT corp.",
        },
        "Make My Feed": {
          id: 2,
          links: [
            {
              type: "Website",
              href: "https://www.makemyfeed.com/",
              icon: <LinkIcon className="size-9" />,
            },
            // {
            //   type: "Source",
            //   href: "",
            //   icon: <GithubIcon className="size-9" />,
            // },
          ],
          description:
            "Make my feed helps you plan your feed better with ai",
        },
        "Blinks Studio": {
          id: 3,
          links: [
            {
              type: "Website",
              href: "https://blinks-pg-five.vercel.app/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/sahilkakwani9/BlinksPg",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description: "Create and deploy Solana Actions (blinks) with our intuitive drag-and-drop interface. Build DeFi integrations, token swaps, and more without coding knowledge.",
        },
        "Yeet that txn": {
          id: 4,
          links: [
            {
              type: "Website",
              href: "https://yeet-that-txn.vercel.app/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/sahilkakwani9/YeetThatTxn/",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "YeetThatTx is a web-based tool that allows users to deserialize and send Solana transactions easily. It supports both versioned and legacy transactions, as well as message deserialization.",
        },
        Connector: {
          id: 5,
          links: [
            {
              type: "Website",
              href: "https://connector-9f4i.vercel.app/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://github.com/sahilkakwani9/connector",
              icon: <GithubIcon className="size-9" />,
            },
          ],
          description:
            "Connector is built to break down the limitations of isolated blockchains. We provide a simple and efficient way for users to manage their digital assets and execute leverage strategies, unlocking yield potential across chains like Arbitrum, Base, and beyond.",
        },
      },
      "SVM Programs": {

        "Mines": {
          id: 1,
          description: "Mines is an onchain version of the legendary mines game deployed on eclipse",
          links: [
            {
              type: "Website",
              href: "https://mines-rosy.vercel.app/",
              icon: <LinkIcon className="size-9" />,
            },
            {
              type: "Source",
              href: "https://gist.github.com/sahilkakwani9/c507617f0c7c0d867799b6944937cd4f",
              icon: <GithubIcon className="size-9" />,
            },
          ],
        },
        "Rollitup": {
          id: 2,
          description:
            "Rollitup is a onchain dice rolling game deployed on eclipse",
          links: [
            {
              type: "Source",
              href: "https://gist.github.com/sahilkakwani9/377c57e886b075841366aec8462b0f22",
              icon: <GithubIcon className="size-9" />,
            },
          ],
        },
        "Timelines": {
          id: 3,
          description: "With Timelines We tokenize each post through an algorithmic bonding curve. Early users earn by spending their time discovering and financially signaling valuable content for others",
          links: [
            {
              type: "Source",
              href: "https://github.com/sahilkakwani9/timeline-anchor",
              icon: <GithubIcon className="size-9" />,
            },
          ],
        },
        "SPL Transfer Program": {
          id: 3,
          description: "A program that can facilitate transfer of SPL token from and to the program",
          links: [
            {
              type: "Source",
              href: "https://github.com/sahilkakwani9/sample-spl-transfer-anchor/blob/main/lib.rs",
              icon: <GithubIcon className="size-9" />,
            },
          ],

        },
      },
    },
  ],
  wins: {
    "Incubase by Base - Third prize": {
      link: "",
      type: "accelerator",
    },
    "Base Batches - First place in AI Track": {
      link: "",
      type: "hackathon",
    },
    "Part of Base Fellowship 2.0": {
      link: "",
      type: "title",
    },
    "Member @SuperteamIn": {
      link: "",
      type: "title",
    },
    "Member @DeveloperDao": {
      link: "",
      type: "title",
    },
    "Solana Hyperdrive - Climate Prize Winner": {
      link: "",
      type: "hackathon",
    },
    "EthOnline '24 - Bounty Winner": {
      link: "",
      type: "hackathon",
    },
    "Phala phat contracts hackathon - 1st place": {
      link: "",
      type: "hackathon",
    },
    "EthIndia '23 - Bounty Winner": {
      link: "",
      type: "hackathon",
    },
  },
  books: [
    {
      title: "Rich Dad Poor Dad - Robert Kiyosaki",
      currentlyReading: false,
    },
    {
      title: "Think and Grow Rich - Napoleon Hill",
      currentlyReading: false,
    },
    {
      title: "Zero to One - Peter Thiel",
      currentlyReading: false,
    },
    {
      title: "My experiments with truth - Mahatma Gandhi",
      currentlyReading: false,
    },
    {
      title: "Elon Musk - Ashlee Vance",
      currentlyReading: false,
    },
    {
      title: "The 5 AM Club - Robin Sharma",
      currentlyReading: false,
    },
    {
      title: "12 Rules for life - Jordan Peterson",
      currentlyReading: false,
    },
    {
      title: "Atomic Habits - James Clear",
      currentlyReading: false,
    },
    {
      title: "The almanack of naval ravikant - Eric Jorgensen",
      currentlyReading: false,
    },
    {
      title: "Start with Why - Simon Sinek",
      currentlyReading: false,
    },
    {
      title: "Wings of fire - APJ Abdul Kalam",
      currentlyReading: false,
    },
    {
      title: "How Deepak Parekh Grew HDFC Group Exponentially - R. Gopalakrishnan",
      currentlyReading: false,
    },
    {
      title: "Tuesdays with morrie - Mitch Albom",
      currentlyReading: false,
    },
    {
      title: "The Alchemist - Paulo Coelho",
      currentlyReading: false,
    },
    {
      title: "The Anthology of Balaji - Eric Jorgensen",
      currentlyReading: false,
    },
    {
      title: "Beyond the Last Blue Mountains - RM Lala",
      currentlyReading: false,
    },
    {
      title: "Who moved my cheese - Dr. Spencer Johnson",
      currentlyReading: false,
    },
    {
      title: "Celebration of the Cells - RM Lala",
      currentlyReading: false,
    },
    {
      title: "The Daily Stoic - Ryan Holiday",
      currentlyReading: true,
    },
    {
      title: "The Disruptors - Alan Axelrod",
      currentlyReading: false,
      dropped: true,
    },
    {
      title: "Amrita Imroz - Uma Trilok",
      currentlyReading: false,
    },
    {
      title: "India's Railway Man - A biography of E. Sreedharan by Rajendra Aklekar",
      currentlyReading: false,
    },
    {
      title: "Mans search for meaning - Viktor E. Frankl",
      currentlyReading: false,
    },
    {
      title: "Bitcoin Billionaires - Ben Mezrich",
      currentlyReading: true,
    },
  ],
} as const;
