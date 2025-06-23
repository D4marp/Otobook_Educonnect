const ChooseUs = () => {
  return (
    <div className="relative min-h-screen bg-[#1a1a1a] py-20 md:py-0 md:pt-75 md:pb-50 px-4 md:px-30 overflow-hidden">
      <div className="relative flex flex-col h-fit py-20 md:py-32 md:w-[570px]">
        <h2 className="font-inter text-lg tracking-lg leading-[130%] md:text-xl md:tracking-xl md:leading-[140%] text-whitebase">
          Kami tidak sekadar membuat aplikasi atau website.
          <br />
          Otobook EduConnect hadir sebagai mitra digital untuk menyelesaikan masalah nyata dengan solusi teknologi yang tepat guna.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row h-full justify-between items-start w-full gap-10">
        <p className="font-inter text-base w-100 text-whitebase font-normal order-2 md:order-1">
          Kami bekerja bersama Anda, bukan hanya untuk Anda.
          <br />
          <br />
          Tim kami terdiri dari developer, researcher, dan designer yang memahami tantangan di bidang edukasi, bisnis, dan pelayanan publik.  
          <br />
          <br />
          Setiap proyek diawali dengan pemetaan masalah, dilanjutkan dengan perancangan solusi berbasis data dan kebutuhan nyata.  
          <br />
          <br />
          Kami percaya kolaborasi, transparansi, dan pendekatan personal adalah kunci keberhasilan digitalisasi di institusi Anda.
        </p>
        <img
          src="/src/assets/img3.webp"
          alt="Mengapa Memilih Otobook"
          className="object-cover h-[450px] w-full md:w-[400px] rounded-xl order-1 md:order-2"
        />
      </div>
    </div>
  );
};

export default ChooseUs;
