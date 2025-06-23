import React from "react";
import Button from "./Button";
import Arrow from "../assets/arrow.svg";
import iclinked from "../assets/iconlinkedin.svg";
import icig from "../assets/iconig.svg";
import icx from "../assets/iconx.svg";
import icfacebook from "../assets/iconfb.svg";
import bluelogo from "../assets/bluelogo.svg";

const Footer = () => {
  return (
    <div
      className="relative min-h-screen bg-blue-100 overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed min-h-screen w-full bottom-0 bg-blue-100">
      
          <div className="flex flex-col lg:flex-row h-fit w-full justify-between items-start md:items-end px-5 md:px-30 space-y-5 pt-5 md:pt-10 pb-5 md:pb-14">
            <div className="flex flex-col h-fit md:gap-5 gap-2">
              <span className="font-inter text-base text-primary leading-[150%]">
                Siap untuk Berkembang?
              </span>
              <h1 className="text-xl md:w-[882px] tracking-xl leading-[130%] md:text-2xl font-inter md:tracking-2xl md:leading-[120%] text-primary">
                Mari bicarakan strategi cerdas untuk pertumbuhan digital Anda dengan Otobook Educonnect
              </h1>
            </div>

            <a 
              href="https://wa.me/089601321118" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                paddingx="px-6"
                title="Mari Bicara"
                icon={Arrow}
                bgcolor="bg-primary"
                textcolor="text-white"
              />
            </a>
          </div>

          {/* 3 COLUMN*/}
        <div className="flex flex-wrap md:flex-nowrap md:flex-row justify-between h-full w-full px-5 md:px-30 pt-5 md:pt-10 pb-5 md:pb-20">
         
      
                <div className="flex flex-col w-fit h-full">
                <span className="font-inter text-primary font-medium text-sm leading-[150%] pb-2">
                  Kantor
                </span>
                <div className="flex flex-col gap-2 pb-5">
                  <p className="font-inter text-base text-primary leading-[150%] font-light w-[219px]">
                  Institut Teknologi Sepuluh Nopember, Jl. Raya ITS, Keputih, Kec. Sukolilo, Surabaya, Jawa Timur 60111
                  </p>
                  <p className="font-inter text-base text-primary leading-[150%] font-light w-[254px]">
                  Tlanak Selatan, Tlanak, Kec. Kedungpring, Kabupaten Lamongan, Jawa Timur 62272
                  </p>
                </div>
                <span className="font-inter text-primary font-medium text-sm leading-[150%] pb-2">
                  Ikuti kami
                </span>
                <div className="flex max-h-fit w-fit gap-2">
                  <a href="https://www.linkedin.com/in/damargalihajipradana/" target="_blank" rel="noopener noreferrer">
                  <img src={iclinked} loading="lazy" className="cursor-pointer" />
                  </a>
                  <a href="https://instagram.com/otobook_id" target="_blank" rel="noopener noreferrer">
                  <img src={icig} loading="lazy" className="cursor-pointer" />
                  </a>
                </div>
                </div>
                {/* logo */}
          <div className="flex w-full pt-20 md:pt-0 justify-start md:justify-end items-start">
            <img src={bluelogo} loading="lazy" />
          </div>
        </div>

        {/* copyright */}
        <div className="relative w-full h-fit px-4 md:px-30">
          <div className="flex justify-start md:justify-end items-center gap-5">
            <a
              href=""
              className="cursor-pointer text-xs leading-[150%] text-primary/80"
            >
              Syarat & Ketentuan
            </a>
            <a
              href=""
              className="cursor-pointer text-xs leading-[150%] text-primary/80"
            >
              Kebijakan Privasi
            </a>
            <a
              href=""
              className="cursor-pointer text-xs leading-[150%] text-primary/80"
            >
              ©2024 Otobook Educonnect. Hak cipta dilindungi undang-undang.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
