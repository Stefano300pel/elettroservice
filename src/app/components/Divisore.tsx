export default function Divisore() {
  return (

    <>
      <div className="bg-[#ffff]" >
        <p className="max-w-[60%] hidden md:block relative left-[8%] bottom-[28%] text-3xl text-bold text-[#164194] bg-[#ffff]  overflow-hidden"><b>I NOSTRI CLIENTI</b></p>
        <div className="w-full h-[5vh] flex items-center justify-between bg-white px-[5%]">
          <div className="w-10 h-10 rounded-full bg-white border-4 border-solid border-[#E20613]"></div>
          <div className="flex-1 h-[10px] bg-[#E20613]" id="cert"></div> {/* Linea */}
          <div className="w-10 h-10 rounded-full bg-white border-4 border-solid border-[#E20613]"></div>
        </div>
        <p className="max-w-[60%] hidden md:block relative left-[8%] bottom-[22%] text-3xl text-bold text-[#164194] bg-[#ffff] overflow-hidden"><b>CERTIFICAZIONI</b></p>
      </div></>
  );
}
