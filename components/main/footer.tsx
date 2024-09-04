import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Name */}
          <div className="mb-4 md:mb-0">
            <a
              href="/"
              className="flex items-center text-white"
              aria-label="CodePulse Home">
              <Image
                src="/main-logo.png"
                alt="CodePulse logo"
                width={32}
                height={32}
                className="mr-2"
                priority
              />
              <span className="font-semibold text-lg">CodePulse</span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <a href="/" className="hover:text-gray-400" aria-label="Home">
              Início
            </a>
            <a
              href="/about"
              className="hover:text-gray-400"
              aria-label="About Us">
              Sobre Nós
            </a>
            <a
              href="/services"
              className="hover:text-gray-400"
              aria-label="Services">
              Serviços
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6"></div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
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
            <span>(47) 98874-4602</span>
          </div>

          <p className="mt-4 md:mt-0">
            &copy; 2024 CodePulse. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
