import { motion } from "framer-motion";

const OurClients = () => {
  const logoClients = [
    "/src/assets/viva.webp",
    "/src/assets/pens.png",
    "/src/assets/nss.png",
    "/src/assets/perpus.png",
    "/src/assets/studyo.png",
    "/src/assets/tulung.png",
    "/src/assets/logo07.svg",
    "/src/assets/fm_blue.png",
    "/src/assets/download.png",
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
              />
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0  items-center"
        >
          {logoClients.map((image, index) => {
            return (
              <img
                loading="lazy"
                className="h-10 w-fit saturate-0 hover:saturate-100 lg:h-fit lg:w-60 pr-10 lg:pr-20"
                src={image}
                key={index}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default OurClients;
