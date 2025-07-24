import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo_full from "../../assets/logo_full.svg";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center items-center p-4 relative">
      <div className="flex items-center justify-between w-full max-w-6xl">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo_full}
            alt="Pling Company Logo"
            className="h-12 sm:h-14 lg:h-16"
          />
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 xl:gap-10 items-center">
          <a
            href="#"
            className="font-medium text-sm hover:text-pastel-green transition-colors duration-300"
          >
            Serviços
          </a>
          <a
            href="#"
            className="font-medium text-sm hover:text-pastel-green transition-colors duration-300"
          >
            Especialidades
          </a>
          <a
            href="#"
            className="font-medium text-sm hover:text-pastel-green transition-colors duration-300"
          >
            Resultados
          </a>
          <a
            href="#"
            className="font-medium text-sm hover:text-pastel-green transition-colors duration-300"
          >
            Contato
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block flex-shrink-0">
          <Button className="bg-pastel-green text-smooth-black font-bold text-sm px-4 py-2 shadow-lg hover:bg-smooth-green transition-colors duration-300 cursor-pointer whitespace-nowrap">
            Fale com um especialista
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-smooth-black" />
          ) : (
            <Menu size={24} className="text-smooth-black" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 z-50">
          <nav className="flex flex-col p-6 space-y-3">
            <a
              href="#"
              className="font-medium text-sm py-3 hover:text-pastel-green transition-colors duration-300 border-b border-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#"
              className="font-medium text-sm py-3 hover:text-pastel-green transition-colors duration-300 border-b border-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Especialidades
            </a>
            <a
              href="#"
              className="font-medium text-sm py-3 hover:text-pastel-green transition-colors duration-300 border-b border-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Resultados
            </a>
            <a
              href="#"
              className="font-medium text-sm py-3 hover:text-pastel-green transition-colors duration-300 border-b border-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <div className="pt-4 mt-2">
              <Button
                className="w-full bg-pastel-green text-smooth-black font-bold text-sm py-3 hover:bg-smooth-green transition-colors duration-300 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale com um especialista
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
