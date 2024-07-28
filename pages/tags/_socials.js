import { motion } from "framer-motion";
import { useState } from "react";
import { Twitter, Github, Mail, Linkedin } from 'lucide-react';

const Tooltip = ({ children, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-center">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center w-full"
      >
        {children}
      </div>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-black/50 text-white text-sm whitespace-nowrap"
        >
          {text}
        </motion.div>
      )}
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <Tooltip text="@0xSarthak13">
        <a href="https://x.com/0xSarthak13" className="text-white/60 hover:scale-90 transition-all">
          <Twitter />
        </a>
      </Tooltip>
      <Tooltip text="@Not-Sarthak">
        <a href="https://github.com/Not-Sarthak/" className="text-gray-500 hover:scale-90 transition-all">
          <Github />
        </a>
      </Tooltip>
      <Tooltip text="Sarthak Shah">
        <a href="https://www.linkedin.com/in/sarthak-shah-49267b224/" className="text-gray-500 hover:scale-90 transition-all">
          <Linkedin />
        </a>
      </Tooltip>
      <Tooltip text="notsarthakshah@gmail.com">
        <a href="mailto:notsarthakshah@gmail.com" className="text-gray-500 hover:scale-90 transition-all">
          <Mail />
        </a>
      </Tooltip>
    </div>
  );
};

export default SocialLinks;
