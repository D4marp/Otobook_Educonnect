import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

// Import all images
import work01 from "/src/assets/work01.webp";
import work02 from "/src/assets/work02.webp";
import work03 from "/src/assets/work03.webp";
import work04 from "/src/assets/work04.webp";
import work05 from "/src/assets/work05.webp";
import otobook from "/src/assets/otobook.png";
import vocadia from "/src/assets/vocadia.png";
import viva from "/src/assets/viva.png";
import stdyo from "/src/assets/stdyo.png";
import bluearrow from "/src/assets/bluearrow.svg";

const dataWorks = [
  {
    id: 1,
    imageSource: work01,
    name: "Mbohkelalen",
    detailWork: "Branding, Digital Marketing",
  },
  {
    id: 2,
    imageSource: work02,
    name: "Jajanmie",
    detailWork: "Branding, Digital Marketing",
  },
  {
    id: 3,
    imageSource: work03,
    name: "Bakmitul",
    detailWork: "Branding, Digital Marketing",
  },
  {
    id: 4,
    imageSource: work04,
    name: "Sukidesuu",
    detailWork: "Web Design & Development",
  },
  {
    id: 5,
    imageSource: work05,
    name: "Kesapian",
    detailWork: "Digital Marketing",
  },
  {
    id: 6,
    imageSource: otobook,
    name: "Otobook",
    detailWork: "Mobile Apps",
  },
  {
    id: 7,
    imageSource: vocadia,
    name: "Vocadia",
    detailWork: "Mobile Apps",
  },
  {
    id: 8,
    imageSource: viva,
    name: "Viva Hr",
    detailWork: "Mobile Apps",
  },
  {
    id: 9,
    imageSource: stdyo,
    name: "studyo maths",
    detailWork: "Mobile Apps",
  },
];

const OurWorks = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-75%"]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[800vh] pt-10 -z-10 md:pt-20 bg-white"
    >
      <motion.div
        style={{ opacity }}
        className="flex sticky top-0 inset-0 justify-between items-end py-20 md:py-10 px-4 md:px-30 max-h-fit"
      >
        <h2 className="font-inter text-xl text-blackbase tracking-xl leading-[120%]">
          Our works
        </h2>
        <div className="relative flex gap-2 items-center cursor-pointer">
          <button className="flex font-inter text-base cursor-pointer text-primary">
            Select all works
          </button>
          <img
            src={bluearrow}
            loading="lazy"
            className="size-5 md:size-6"
            alt="Arrow icon"
          />
        </div>
      </motion.div>
      <div className="sticky top-0 flex h-screen w-full -z-1 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 md:gap-12">
          {dataWorks.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative flex flex</div>-col h-fit md:max-h-fit justify-center pt-32 md:pt-30 hover:scale-99 hover:rounded-lg hover:opacity-100 hover:text-primary cursor-pointer transition-all duration-200">
      <div className="relative h-[500px] w-[340px] md:w-[324px] md:h-[504px] mb-2 overflow-hidden rounded-sm">
        <div className="absolute inset-0 bg-[#1a1a1a]/10 group-hover:opacity-0 transition-opacity duration-200 z-10" />
        <img
          loading="lazy"
          src={card.imageSource}
          alt={card.name}
          className="object-cover h-full w-full group-hover:scale-105 duration-200 transition-transform"
        />
      </div>
      <h2 className="font-inter font-medium text-base leading-[150%] mt-2">
        {card.name}
      </h2>
      <p className="font-inter italic text-xs text-[#b3b3b3] leading-[150%] group-hover:text-primary transition-colors duration-200">
        {card.detailWork}
      </p>
    </div>
  );
};

export default OurWorks;