import { Button } from "./ui/button";
import Instagram from "./svg/Instagram";
import Facebook from "./svg/Facebook";
import LinkedIn from "./svg/Linkedin";
import { Separator } from "./ui/separator";

const navLinks = [
  { name: "Serviços", href: "#servicos" },
  { name: "Para Quem É", href: "#para-quem" },
  { name: "Plataformas", href: "#plataformas" },
  { name: "Resultados", href: "#resultados" },
  { name: "Estudo de Caso", href: "#estudo-de-caso" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-smooth-black text-white mt-24">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-12">
          {/* Coluna da Esquerda */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <h2 className="font-black text-4xl leading-tight">
              Vamos construir algo <br />
              <span className="font-light">incrível juntos?</span>
            </h2>
            <p className="font-light text-base text-soft-gray max-w-md">
              Estamos prontos para transformar seus desafios em resultados.
              Agende uma conversa e descubra o potencial do seu negócio.
            </p>
            <Button
              className="bg-[#C0E6C4] text-smooth-black border rounded-2xl font-bold text-base py-4 px-8
                         shadow-[0px_4px_0px_0px_#1E1E1E] hover:shadow-[0px_6px_0px_0px_#1E1E1E]
                         hover:bg-[#b1dcb4] hover:-translate-y-0.5
                         active:shadow-[0px_2px_0px_0px_#1E1E1E] active:translate-y-0.5
                         transition-all duration-200 ease-out w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Agendar Reunião
            </Button>
          </div>

          {/* Coluna da Direita - Navegação */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-light text-soft-gray hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <Separator className="bg-smooth-gray my-12" />

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-8">
          <p className="text-sm text-smooth-gray font-light ">
            © {year} Pling Company. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-smooth-gray hover:text-white transition-colors" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-smooth-gray hover:text-white transition-colors" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedIn className="w-6 h-6 text-smooth-gray hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
