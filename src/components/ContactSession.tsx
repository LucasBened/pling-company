import { motion } from "framer-motion";
import HubSpotForm from "./HubSpotForm"; // Importa o componente do formulário

// Componente para o logo, com tamanho ajustado
const Logo = () => (
  <img
    src="/src/assets/logo.svg"
    alt="Pling Company Logo"
    className="w-20 h-auto" // Tamanho ajustado para melhor proporção
  />
);

const ContactSession = () => {
  // Configurações de animação
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="w-full relative flex flex-col items-center justify-center gap-8 py-16 lg:py-24 bg-[#E3F3E6] rounded-3xl overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Camada para o padrão de fundo sutil */}
      <div
        className="absolute inset-0 w-full h-full bg-repeat opacity-[20]"
        style={{ backgroundImage: "url(/src/assets/images/pattern.png)" }}
      ></div>

      {/* Conteúdo principal sobre o padrão */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch justify-center gap-16 lg:gap-12 px-4 sm:px-8 md:px-12">
        {/* Coluna da Esquerda: Texto e Logo */}
        <motion.div
          className="w-full lg:w-5/12 flex flex-col justify-around items-center lg:items-start text-center lg:text-left"
          variants={fadeInUp}
        >
          <Logo />
          <div className="flex flex-col gap-6 mt-8 lg:mt-0">
            <h2 className="font-black text-4xl sm:text-5xl lg:text-3xl text-smooth-black leading-tight">
              Troque a incerteza por resultados concretos.
            </h2>
            <p className="text-base sm:text-lg font-light lg:max-w-md text-smooth-black">
              Agende uma conversa direta com nossa equipe. Analisaremos seus
              desafios e apresentaremos um plano estratégico para transformar
              seu tráfego pago em um motor de crescimento real.
            </p>
          </div>
        </motion.div>

        {/* Coluna da Direita: Formulário */}
        <motion.div
          className="w-full lg:w-6/12 flex items-center"
          variants={fadeInUp}
        >
          <HubSpotForm
            portalId="50314747"
            formId="870bb3a4-bbc2-4f8c-86a9-406069e6aef8"
            region="na1"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSession;
