import { motion } from "framer-motion";

// Import semua gambar
import vivaLogo from "/src/assets/viva.webp";
import pensLogo from "/src/assets/pens.png";
import nssLogo from "/src/assets/nss.png";
import perpusLogo from "/src/assets/perpus.png";
import studyoLogo from "/src/assets/studyo.png";
import tulungLogo from "/src/assets/tulung.png";
import logo07 from "/src/assets/logo07.svg";
import fmBlueLogo from "/src/assets/fm_blue.png";
import downloadLogo from "/src/assets/download.png";

const OurClients = () => {
  const logoClients = [
    vivaLogo,
    pensLogo,
    nssLogo,
    perpusLogo,
    studyoLogo,
    tulungLogo,
    logo07,
    fmBlueLogo,
    downloadLogo,
  ];

  return (
    <div className="relative h-fit w-screen px-4 md:px-30 py-20 md:pt-20 md:pb-30 bg-white">
      <div className="flex mask-x-from-80% mask-x-to-100% h-full w-full overflow-x-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 items-center"
        >
          {logoClients.map((image, index) => {
            return (
              <img
                loading="lazy"
                className="h-10 w-56 saturate-0 hover:saturate-100 lg:h-fit lg:w-60 pr-10 lg:pr-20"
                src={image}
                key={index}
                alt={`Client logo ${index + 1}`}
              />
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 items-center"
        >
          {logoClients.map((image, index) => {
            return (
              <img
                loading="lazy"
                className="h-10 w-fit saturate-0 hover:saturate-100 lg:h-fit lg:w-60 pr-10 lg:pr-20"
                src={image}
                key={index}
                alt={`Client logo ${index + 1}`}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default OurClients;