import React from 'react';
import CardComponent from '../_components/card';

const projects = [
  {
    title: 'EthMumbai',
    description: 'A website for EthMumbai with an SVG logo that changes colors based on user preferences and allows users to mint it as a NFT.',
    domain: 'web 3',
    sourceUrl: 'https://github.com/Not-Sarthak/eth-mumbai',
    demoUrl: 'https://mumbaieth.vercel.app/'
  },
  {
    title: 'FuelCaster',
    description: "FuelCaster, featuring the VadaPav Token, is a faucet for the Fuel Network built on Farcaster Frames.",
    domain: 'web 3',
    sourceUrl: 'https://github.com/ForkingAwesome/fuelcaster',
    demoUrl: 'https://x.com/0xSarthak13/status/1788907538043531380'
  },
  {
    title: 'AO Unit Converter',
    description: 'Convert effortlessly between AO and Armstrong units. No need to count zeroes.',
    domain: 'web 3',
    sourceUrl: 'https://github.com/Not-Sarthak/ao-unit-converter',
    demoUrl: 'https://ao-unit-converter.ar-io.net/'
  },
  {
    title: 'BaseWave',
    description: "Frictionless, Decentralized Recurring Payments for Builders on Base",
    domain: 'web 3',
    sourceUrl: 'https://github.com/ForkingAwesome/basewave',
    demoUrl: 'https://youtu.be/i0FlVIL-6FM'
  },
  {
    title: 'SayWings',
    description: "Effortless DeFi growth with automated crypto gains.",
    domain: 'web 3',
    sourceUrl: 'https://github.com/ForkingAwesome/say-wings',
    demoUrl: 'https://youtu.be/cLrMoK8f8lI'
  },
  {
    title: 'Quill',
    description: 'Quill, built on the Flow blockchain, empowers bloggers with ownership, control, and direct monetization of their content.',
    domain: 'web 3',
    sourceUrl: 'https://github.com/Not-Sarthak/quill',
    demoUrl: 'https://quill-flow.vercel.app/'
  },
  {
    title: 'Navi Rides',
    description: 'Navi-Rides connects riders with drivers, reducing carpooling costs and environmental impact while fostering new connections.',
    domain: 'web 2',
    sourceUrl: 'https://github.com/Not-Sarthak/navi-rides',
    demoUrl: ''
  },
  {
    title: 'GDG Baroda Website',
    description: 'A website for GDG Baroda built for DevFest.',
    domain: 'web 2',
    sourceUrl: '',
    demoUrl: 'https://devfest.gdgbaroda.com/'
  },
];

const domainColors = {
  'web 3': { color: 'bg-[#edc678]', borderColor: 'border-[#edc678]', textColor: 'text-[#edc678]' },
  'web 2': { color: 'bg-green-500', borderColor: 'border-green-500', textColor: 'text-green-500' },
  'ai / ml': { color: 'bg-purple-500', borderColor: 'border-purple-500', textColor: 'text-purple-500' },
  'devops': { color: 'bg-[#60a5fa]', borderColor: 'border-[#60a5fa]', textColor: 'text-[#60a5fa]' },
};

const ProjectsList = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => {
          const { color, borderColor, textColor } = domainColors[project.domain] || {};
          return (
            <CardComponent
              key={index}
              title={project.title}
              description={project.description}
              domain={project.domain}
              color={color}
              borderColor={borderColor}
              textColor={textColor}
              sourceUrl={project.sourceUrl}
              demoUrl={project.demoUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;