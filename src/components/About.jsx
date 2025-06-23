import bluearrow from "../assets/bluearrow.svg";
import { motion } from "framer-motion";

const text1 = "Bermitra secara strategis,\nMemperluas yang mungkin";
const text2 =
  "Sejak diluncurkan pada tahun 2024, Otobook EduConnect telah menjadi mitra terpercaya dalam " +
  "memberikan solusi digital yang inovatif dan dapat diskalakan. Pertumbuhan berkelanjutan kami " +
  "mencerminkan komitmen terhadap keandalan, keunggulan, dan membantu klien mengubah ide menjadi " +
  "produk digital yang berdampak. Otobook mendukung dengan harga jasa mulai dari Rp 25.000.";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="about"
      className="flex flex-col bg-white md:flex-row max-h-fit w-screen px-4 py-20 md:px-30 md:pt-[185px] overflow-x-hidden"
    >
      <div className="max-h-fit w-full mb-10 lg:mb-0 overflow-hidden">
        <motion.h3
          variants={containerVariants}
          initial="hidden"
          transition={{ staggerChildren: "0.02" }}
          whileInView="visible"
          style={{ whiteSpace: "pre-wrap" }}
          className="font-inter  text-blackbase text-lg tracking-lg leading-[140%] lg:tracking-xl lg:leading-[150%] lg:text-xl"
        >
          {text1.split("").map((char, index) => (
            <motion.span key={index} variants={characterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h3>
      </div>
      <div className="h-full w-full lg:mt-22 overflow-hidden">
        <motion.p
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: "0.005" }}
          className="font-inter text-blackbase text-base leading-[150%] lg:tracking-lg lg:font-[400] lg:leading-[140%] lg:text-lg pb-10"
        >
          {text2.split("").map((chara, index) => (
            <motion.span key={index} variants={characterVariants}>
              {chara}
            </motion.span>
          ))}
        </motion.p>
        <div className="relative flex gap-2 items-center cursor-pointer">
        
        </div>
      </div>
    </div>
  );
};

export default About;
