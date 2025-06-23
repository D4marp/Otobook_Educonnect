import { motion } from "framer-motion";
import arrowellipse from "../assets/arrowellipse.svg";

const DetailServices = ({ dataServices, onClick, isOpen, showPrice }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "089601321118"; // Replace with your WhatsApp number
    const message = `Halo, saya tertarik dengan layanan ${dataServices.service}. Bisakah kita konsultasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="border-b border-[#b3b3b3]/100 overflow-hidden">
      <div
        onClick={onClick}
        className="flex justify-between cursor-pointer py-5"
      >
        <div className="flex flex-col gap-2 flex-1 pr-4">
          <motion.h3
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
            className="text-lg text-blackbase md:text-xl leading-[140%] md:leading-[130%] tracking-lg md:tracking-xl font-inter"
          >
            {dataServices.service}
          </motion.h3>
          
          {showPrice && (
            <motion.span
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 }}
              className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit"
            >
              {dataServices.price}
            </motion.span>
          )}
        </div>
        
        <img
          loading="lazy"
          src={arrowellipse}
          alt="Toggle arrow"
          className={`ease-in-out duration-300 flex-shrink-0 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        />
      </div>
      
      <div
        className={`overflow-hidden ease-in-out duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-5">
          <p className="text-sm text-[#4d4d4d] leading-[150%] md:text-base font-inter mb-4">
            {dataServices.detailservice}
          </p>
          
          {showPrice && isOpen && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span className="text-sm font-medium text-gray-700">
                  Investasi untuk layanan ini:
                </span>
                <span className="text-lg font-bold text-primary">
                  {dataServices.price}
                </span>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 w-full sm:w-auto"
                >
                  Konsultasi
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailServices;