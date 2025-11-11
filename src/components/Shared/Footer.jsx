import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo192.png" alt="logo" className="w-10 h-10" />
          <div>
            <p className="font-semibold">LearnSphere</p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} LearnSphere
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <a
            aria-label="X"
            href="https://x.com"
            className="text-gray-500 hover:text-[#207dff]"
          >
            X
          </a>
          <a
            aria-label="LinkedIn"
            href="#"
            className="text-gray-500 hover:text-[#207dff]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
