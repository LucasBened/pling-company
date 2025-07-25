import {
  Activity,
  BellRing,
  BrainCircuit,
  BuildingIcon,
  ChevronsLeftRightEllipsis,
  FolderCode,
  NotebookPenIcon,
  Telescope,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "./components/svg/Header";
import Bean from "./components/Bean";
import { Button } from "./components/ui/button";
import Google from "./components/svg/Google";
import Meta from "./components/svg/Meta";
import Whatsapp from "./components/svg/Whatsapp";
import Instagram from "./components/svg/Instagram";
import Facebook from "./components/svg/Facebook";
import notification_image from "./assets/animated.svg";
import Metrics from "./components/Metrics";
import { Separator } from "@/components/ui/separator";
import Services from "./components/Services";
import traffic from "./assets/images/paid_traffic.svg";
import seo from "./assets/images/seo.svg";
import design from "./assets/images/design.svg";
import Quality from "./components/Quality";
import who from "./assets/images/who.svg";
import Pinterest from "./components/svg/Pinterest";
import TikTok from "./components/svg/Tiktok";
import LinkedIn from "./components/svg/Linkedin";

export default function App() {
  // Configurações de animação
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const bellShake = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 2.5, // Começa depois que todas as animações terminam
        repeat: Infinity,
        repeatDelay: 3, // Repete a cada 3 segundos
      },
    },
  };

  // Animação para a imagem da última seção
  const fadeInRight = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-start px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 flex-col gap-8 sm:gap-12 lg:gap-36">
      <Header />
      <section className="w-full flex-1 flex flex-col lg:flex-row lg:justify-between lg:items-center items-center gap-8 lg:gap-0">
        <motion.div
          className="w-full lg:w-1/2 h-full flex flex-col gap-6 lg:gap-8 justify-center text-center lg:text-left"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="flex gap-4 items-center justify-center lg:justify-start"
            variants={fadeInUp}
          >
            <Bean text="Notificação que converte" />
            <motion.div
              variants={bellShake}
              initial="initial"
              animate="animate"
            >
              <BellRing size={20} color="#8CDE95" />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-smooth-black lg:text-left"
            variants={fadeInUp}
          >
            Potencialize seu Crescimento.
          </motion.h1>

          <motion.span
            className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-light lg:text-left w-full lg:w-3/4 px-4 lg:px-0 leading-relaxed"
            variants={fadeInUp}
          >
            Na Pling Company, criamos e gerenciamos campanhas de tráfego pago
            focadas em resultados. Nossa missão é conectar sua empresa ao
            público certo, no momento exato, transformando cliques em clientes e
            impulsionando suas vendas.
          </motion.span>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
            variants={fadeInUp}
          >
            <Button className="w-full sm:w-auto bg-pastel-green text-smooth-black font-bold py-4 lg:py-5 px-6 lg:px-4 rounded-lg shadow-lg shadow-smooth-gray hover:bg-smooth-green transition-colors duration-300 cursor-pointer ">
              Agendar Reunião
            </Button>
            <Button className="w-full sm:w-auto bg-smooth-gray text-white font-bold py-4 lg:py-5 px-6 lg:px-4 rounded-lg shadow-lg shadow-smooth-black hover:bg-light-gray transition-colors duration-300 cursor-pointer">
              Nossos Serviços
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center order-first lg:order-last relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Container da Imagem com Ícones */}
          <div className="relative">
            {/* Ícones das Redes Sociais - Em formato quadrado */}
            <motion.div
              className="absolute top-0 right-0 sm:right-4 lg:right-8 flex flex-col gap-2 z-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.8,
                  },
                },
              }}
            >
              {/* Terceira fileira - Centralizado (aparece primeiro - de baixo para cima) */}
              <motion.div
                className="flex justify-center order-3"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
              >
                <div className="p-2 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Facebook className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]" />
                </div>
              </motion.div>

              {/* Segunda fileira (aparece segundo) */}
              <motion.div
                className="flex gap-2 order-2"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                >
                  <div className="p-2 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Whatsapp className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]" />
                  </div>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                >
                  <div className="p-2 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Instagram className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Primeira fileira (aparece por último - no topo) */}
              <motion.div
                className="flex gap-2 order-1"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                >
                  <div className="p-2 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Google className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]" />
                  </div>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                >
                  <div className="p-2 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Meta className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Imagem Principal */}
            <img
              src={notification_image}
              alt="Notificação que converte"
              className="max-w-full h-auto w-11/12 sm:w-5/6 md:w-4/5 lg:w-full mx-auto"
            />
          </div>
        </motion.div>
      </section>
      <section className=" w-full  flex flex-wrap lg:mt-30 justify-around lg:justify-between items-center gap-9 sm:gap-6">
        <Metrics number={100} fromNumber={0} text="Clientes atendidos" />
        <Metrics number={1000} fromNumber={0} text="Investidos" />
        <Metrics
          number={20}
          fromNumber={0}
          text="Gerado em receita"
          value="mil"
        />
        <Metrics
          number={50}
          fromNumber={0}
          text="Gerados em Lead"
          value="mil"
        />
      </section>
      <section className="w-full flex flex-col items-start justify-center gap-6  min-h-screen lg:mt-20 px-4 sm:px-0">
        <div className="flex flex-col items-start justify-center gap-8 sm:gap-12 lg:gap-16">
          <h2 className="font-normal text-2xl sm:text-3xl lg:text-4xl text-center sm:text-left">
            Serviços projetados para <b>Performance</b>
          </h2>
          <p className="text-sm sm:text-base font-light max-w-full sm:max-w-lg text-center sm:text-left">
            Não vendemos serviços avulsos, construímos sistemas completos de
            aquisição de clientes. Nosso único foco é gerar crescimento
            mensurável e lucrativo para o seu negócio.
          </p>
          <Separator className="max-w-full sm:max-w-80 bg-light-green" />
        </div>
        <Services
          image={traffic}
          beanText="Gestão de Tráfego Pago"
          description="   Executamos campanhas de anúncios com um foco obsessivo em performance
          e ROI. Cada centavo do seu orçamento é otimizado para alcançar o
          público certo e se traduzir diretamente em leads e vendas."
          qualities={[
            {
              icon: <ChevronsLeftRightEllipsis className="text-light-green" />,
              text: "Gestão de Campanhas",
            },
            {
              icon: <Activity className="text-light-green" />,
              text: "Otimização de Lances e Orçamentos",
            },
            {
              icon: <NotebookPenIcon className="text-light-green" />,
              text: "Relatórios de Performance",
            },
          ]}
        />
        <Services
          image={seo}
          beanText="Otimização de SEO"
          description="   Melhoramos a visibilidade do seu site nos motores de busca, atraindo tráfego orgânico qualificado. Nossa abordagem é baseada em dados e resultados, garantindo que seu site se destaque nas pesquisas relevantes."
          qualities={[
            {
              icon: <ChevronsLeftRightEllipsis className="text-light-green" />,
              text: "Pesquisa de Palavras-chave",
            },
            {
              icon: <Activity className="text-light-green" />,
              text: "Otimização On-Page",
            },
            {
              icon: <NotebookPenIcon className="text-light-green" />,
              text: "Análise de Concorrência",
            },
          ]}
          variant="reverse"
        />
        <Services
          image={design}
          beanText="Design de Websites"
          description="Para nós, design é uma ferramenta de performance, não apenas estética. Desenvolvemos websites e landing pages ultra-rápidos, onde cada elemento é estrategicamente posicionado para guiar o visitante, sem atritos, diretamente para a conversão."
          qualities={[
            {
              icon: <ChevronsLeftRightEllipsis className="text-light-green" />,
              text: "Desenvolvimento de Sites ",
            },
            {
              icon: <Activity className="text-light-green" />,
              text: "Otimização da Experiência do Usuário",
            },
            {
              icon: <NotebookPenIcon className="text-light-green" />,
              text: "Implementação de Tracking e Analytics",
            },
          ]}
        />
      </section>
      <motion.section
        className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-12 lg:gap-30 mt-10 lg:mt-10 px-4 sm:px-0"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-8 sm:gap-12 lg:gap-16 text-center lg:text-left">
          <motion.h2
            className="font-normal text-2xl sm:text-3xl lg:text-4xl"
            variants={fadeInUp}
          >
            Para quem é <b>Nosso Serviço</b>
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base font-light max-w-full sm:max-w-lg"
            variants={fadeInUp}
          >
            Geramos performance e crescimento para empresas focadas em
            resultados. Nossa metodologia combina dados para guiar a estratégia,
            design para maximizar a conversão e transparência total na execução.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="w-full max-w-full sm:max-w-80 flex justify-center lg:justify-start"
          >
            <Separator className="bg-light-green" />
          </motion.div>
          <motion.div
            className="flex flex-col gap-9 w-full items-center lg:items-start"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Quality
                text="Para Varejistas Digitais (E-commerce)"
                icon={<BuildingIcon className="text-light-green" />}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Quality
                text="Para Fundadores de SaaS"
                icon={<FolderCode className="text-light-green" />}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Quality
                text="Para Empresas B2B Complexas"
                icon={<BrainCircuit className="text-light-green" />}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Quality
                text="Para Marcas com Visão de Futuro"
                icon={<Telescope className="text-light-green" />}
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-pastel-green text-smooth-black font-bold py-4 lg:py-5 px-6 lg:px-4 rounded-lg shadow-lg shadow-smooth-gray hover:bg-smooth-green transition-colors duration-300 cursor-pointer">
                Agendar Reunião
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center order-last lg:order-last"
          variants={fadeInRight}
        >
          <img
            src={who}
            alt="Ilustração de profissionais analisando gráficos e métricas de crescimento"
            className="lg:max-w-full lg:h-auto hidden md:block size-150 lg:size-full"
            loading="lazy"
          />
        </motion.div>
      </motion.section>

      <motion.section
        className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 py-16 lg:py-24 px-4 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Lado Esquerdo: Texto */}
        <motion.div
          className="w-full lg:full flex flex-col items-center lg:items-start text-center lg:text-left gap-8"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          <h2 className="font-normal text-2xl sm:text-3xl lg:text-4xl text-center sm:text-left">
            Especialistas com as principais <b>Plataformas</b>
          </h2>
          <p className="text-sm sm:text-base font-light max-w-xl">
            Utilizamos um arsenal de tecnologia de ponta para garantir a
            execução precisa de cada estratégia. Dominamos e integramos as
            principais ferramentas de Tráfego Pago, Análise de Dados, SEO e
            Automação de Marketing para extrair a máxima performance.
          </p>
          <Button className="w-full sm:w-auto bg-pastel-green text-smooth-black font-bold py-4 lg:py-5 px-6 lg:px-4 rounded-lg shadow-lg shadow-smooth-gray hover:bg-smooth-green transition-colors duration-300 cursor-pointer">
            Saiba mais
          </Button>
        </motion.div>

        {/* Lado Direito: Ícones */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
          }}
        >
          {/* Layout Desktop */}
          <div className="hidden lg:flex gap-6">
            {/* Coluna 1 */}
            <div className="flex flex-col gap-6">
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="p-4 bg-white border border-soft-gray rounded-2xl flex items-center justify-center shadow-lg shadow-light-green -translate-x-10"
              >
                <Google className="w-16 h-16" />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="p-4 bg-white border border-soft-gray rounded-2xl flex items-center justify-center shadow-lg shadow-light-green"
              >
                <Whatsapp className="w-16 h-16" />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="p-4 bg-white border border-soft-gray rounded-2xl flex items-center justify-center shadow-lg shadow-light-green -translate-x-10"
              >
                <TikTok className="w-16 h-16" />
              </motion.div>
            </div>
            {/* Coluna 2  */}
            <div className="flex flex-col gap-6 mt-12">
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="p-4 bg-white border border-soft-gray rounded-2xl flex items-center justify-center shadow-lg shadow-light-green -translate-x-5 -translate-y-5"
              >
                <LinkedIn className="w-16 h-16" />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="p-4 bg-white border border-soft-gray rounded-2xl flex items-center justify-center shadow-lg shadow-light-green"
              >
                <Meta className="w-16 h-16" />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="p-4 bg-white border border-soft-gray rounded-2xl flex items-center justify-center shadow-lg shadow-light-green -translate-x-10"
              >
                <Pinterest className="w-16 h-16" />
              </motion.div>
            </div>
          </div>

          {/* Layout Mobile */}
          <div className="grid grid-cols-3 gap-10 lg:hidden">
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="p-3 bg-white border border-soft-gray rounded-2xl flex items-center justify-center shadow-lg shadow-light-green"
            >
              <Google className="w-12 h-12" />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="p-3 bg-white border border-soft-gray rounded-2xl flex items-center justify-center shadow-lg shadow-light-green"
            >
              <LinkedIn className="w-12 h-12" />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="p-3 bg-white border border-soft-gray rounded-2xl flex items-center justify-center shadow-lg shadow-light-green"
            >
              <Whatsapp className="w-12 h-12" />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="p-3 bg-white border border-soft-gray rounded-2xl flex items-center justify-center shadow-lg shadow-light-green"
            >
              <Meta className="w-12 h-12" />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="p-3 bg-white border border-soft-gray rounded-2xl flex items-center justify-center shadow-lg shadow-light-green"
            >
              <TikTok className="w-12 h-12" />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="p-3 bg-white border border-soft-gray rounded-2xl flex items-center justify-center shadow-lg shadow-light-green"
            >
              <Pinterest className="w-12 h-12" />
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
