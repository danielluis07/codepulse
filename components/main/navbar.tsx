import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/main-logo.png"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            CodePulse
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Início
            </a>
            <a href="#skills" className="cursor-pointer">
              Tecnologias
            </a>
            <a href="#projects" className="cursor-pointer">
              Projetos
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://whatsa.me/5547988744602" aria-label="WhatsApp">
            <Image
              src={"/whats.jpg"}
              alt="WhatsApp"
              width={40}
              height={40}
              className="rounded-full overflow-hidden"
            />
          </a>
          <span className="text-white maxlg:hidden">(47) 98874-4602</span>
        </div>
      </div>
    </div>
  );
};
