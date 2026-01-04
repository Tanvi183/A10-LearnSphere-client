import React from "react";
import { motion } from "framer-motion";
import { LiaStarOfLifeSolid } from "react-icons/lia";

const partners = [
  "Bdjobs",
  "Brainstation 23",
  "Vivasoft",
  "BJIT",
  "Enosis",
  "Cefalo",
  "LeadSoft",
];

const PartnersMarquee = () => {
  return (
    <div className="my-20 w-full overflow-hidden bg-gradient-to-r from-[#06042e] to-[#0a0741] py-8">
      <motion.div
        className="flex items-center gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[...partners, ...partners].map((item, index) => (
          <div key={index} className="flex items-center gap-10">
            <span className="text-white text-2xl font-semibold tracking-wide">
              {item}
            </span>
            <LiaStarOfLifeSolid className="text-yellow-400 text-3xl" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnersMarquee;
