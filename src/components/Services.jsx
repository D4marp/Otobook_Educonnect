import { useRef, useState } from "react";
import DetailServices from "./DetailServices";

const dataServices = [
  {
    id: 1,
    service: "Pembuatan Aplikasi Mobile",
    detailservice:
      "Kami mengembangkan aplikasi Android & iOS yang responsif, sesuai kebutuhan pengguna, dan mendukung berbagai fitur canggih seperti GPS, notifikasi, autentikasi, hingga integrasi API. Cocok untuk sekolah, perpustakaan, UMKM, hingga pemerintahan.",
  },
  {
    id: 2,
    service: "Pembuatan Website & Dashboard Admin",
    detailservice:
      "Kami membangun website profesional untuk presentasi bisnis, sekolah, layanan publik, serta dashboard admin untuk pengelolaan data real-time dengan tampilan user-friendly dan performa optimal.",
  },
  {
    id: 3,
    service: "Sistem Otomatisasi & OCR Buku",
    detailservice:
      "Teknologi Optical Character Recognition (OCR) kami memungkinkan pustakawan atau staf dokumentasi memindai metadata buku secara otomatis melalui kamera ponsel. Solusi ini telah digunakan di berbagai perpustakaan di Jawa Timur.",
  },
  {
    id: 4,
    service: "Konsultasi & Riset Transformasi Digital",
    detailservice:
      "Kami membuka layanan konsultasi untuk digitalisasi proses manual di institusi Anda, termasuk riset sistem, rancangan UX/UI, hingga implementasi sistem berbasis web dan mobile.",
  },
];


const Services = () => {
  const [showSelectedS, setShowSelectedS] = useState(null);

  const showService = (index) => {
    setShowSelectedS(index === showSelectedS ? null : index);
  };

  return (
    <div
      className="relative flex flex-col gap-20 bg-[#f2f2f2] md:gap-40 md:flex-row min-h-screen
    items-center justify-center px-4 md:px-30 py-10 md:py-20 overflow-x-hidden"
    >
      <img
        src="../src/assets/group.svg"
        loading="lazy"
        className="w-[391px] h-[341px] object-fill"
      />
      <div className="w-full h-full bg-white px-10 py-10 rounded-2xl">
        {dataServices.map((d, index) => {
          return (
            <DetailServices
              key={d.id}
              dataServices={d}
              onClick={() => showService(index)}
              isOpen={showSelectedS === index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
