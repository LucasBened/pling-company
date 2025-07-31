import {
  Activity,
  BellRing,
  BrainCircuit,
  ChevronsLeftRightEllipsis,
  FolderCode,
  Handshake,
  House,
  MessageSquare,
  NotebookPenIcon,
  Search,
  Target,
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
import ContactSession from "./components/ContactSession";
import resultsImage from "./assets/images/results.svg";
import CaseStudySection from "./components/CaseStudySection";
import Footer from "./components/Footer";

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
        delay: 2.5,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: "easeOut" },
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-8 sm:gap-12 lg:gap-24 ">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 flex flex-col gap-8 sm:gap-12 lg:gap-45">
        <Header />
        <section
          id="hero"
          className="w-full flex-1 flex flex-col lg:flex-row lg:justify-between lg:items-center items-center gap-8 lg:gap-0"
        >
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
              className="font-black text-4xl sm:text-5xl text-smooth-black leading-tight lg:text-left"
              variants={fadeInUp}
            >
              Potencialize seu Crescimento.
            </motion.h1>

            <motion.p
              className="text-base lg:text-lg font-light text-smooth-black leading-relaxed lg:text-left w-full lg:w-3/4"
              variants={fadeInUp}
            >
              Na Pling Company, criamos e gerenciamos campanhas de tráfego pago
              focadas em resultados. Nossa missão é conectar sua empresa ao
              público certo, no momento exato, transformando cliques em clientes
              e impulsionando suas vendas.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <Button
                className="bg-[#C0E6C4] text-smooth-black border rounded-2xl font-bold  text-base py-4 px-8
                         shadow-[0px_4px_0px_0px_#1E1E1E] hover:shadow-[0px_6px_0px_0px_#1E1E1E]
                         hover:bg-[#b1dcb4] hover:-translate-y-0.5
                         active:shadow-[0px_2px_0px_0px_#1E1E1E] active:translate-y-0.5
                         transition-all duration-200 ease-out"
                onClick={() =>
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Agendar Reunião
              </Button>
              <Button
                className="bg-[#424242] text-white border rounded-2xl font-bold border-none text-base py-4 px-8
                         shadow-[0px_4px_0px_0px_#1E1E1E] hover:shadow-[0px_6px_0px_0px_#464646]
                         hover:bg-smooth-black hover:-translate-y-0.5
                         active:shadow-[0px_2px_0px_0px_#1E1E1E] active:translate-y-0.5
                         transition-all duration-200 ease-out"
                onClick={() =>
                  document
                    .getElementById("servicos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
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
            <div className="relative">
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

              <img
                src={notification_image}
                alt="Ilustração de notificação animada representando conversão de leads e resultados em tráfego pago."
                className="max-w-full h-auto w-11/12 sm:w-5/6 md:w-4/5 lg:w-full mx-auto"
              />
            </div>
          </motion.div>
        </section>
        <motion.section
          id="servicos"
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18, delayChildren: 0.1 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <Metrics
              icon={<Handshake size={24} />}
              title="Parceria de verdade"
              description="Agimos como parte do seu time desde o início."
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <Metrics
              icon={<Search size={24} />}
              title="Transparência total"
              description="Você entende cada etapa e sabe por que ela acontece."
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <Metrics
              icon={<MessageSquare size={24} />}
              title="Relacionamento próximo"
              description="Comunicação direta, alinhamento constante, sem enrolação."
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <Metrics
              icon={<Target size={24} />}
              title="Foco em resultado real"
              description="Entregamos o que move o seu negócio de verdade."
            />
          </motion.div>
        </motion.section>
        <section
          id="para-quem"
          className="w-full flex flex-col items-start justify-center gap-6 min-h-screen lg:mt-20 px-4 sm:px-0"
        >
          <div className="flex flex-col items-start justify-center gap-8 sm:gap-12 lg:gap-16">
            <h2 className="font-light text-4xl sm:text-5xl text-smooth-black leading-tight text-center lg:text-left">
              Serviços projetados para{" "}
              <span className="font-black text-4xl sm:text-5xl text-smooth-black leading-tight">
                Performance
              </span>
            </h2>
            <p className="text-base lg:text-lg font-light text-smooth-black leading-relaxed lg:max-w-lg sm:max-w-full text-center lg:text-left">
              Não vendemos serviços avulsos, construímos sistemas completos de
              aquisição de clientes. Nosso único foco é gerar crescimento
              mensurável e lucrativo para o seu negócio.
            </p>
            <Separator className="max-w-full lg:max-w-80 bg-light-green" />
          </div>
          <Services
            image={traffic}
            beanText="Gestão de Tráfego Pago"
            description="Executamos campanhas de anúncios com um foco obsessivo em performance
            e ROI. Cada centavo do seu orçamento é otimizado para alcançar o
            público certo e se traduzir diretamente em leads e vendas."
            qualities={[
              {
                icon: (
                  <ChevronsLeftRightEllipsis className="text-light-green" />
                ),
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
            description="Melhoramos a visibilidade do seu site nos motores de busca, atraindo tráfego orgânico qualificado. Nossa abordagem é baseada em dados e resultados, garantindo que seu site se destaque nas pesquisas relevantes."
            qualities={[
              {
                icon: (
                  <ChevronsLeftRightEllipsis className="text-light-green" />
                ),
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
                icon: (
                  <ChevronsLeftRightEllipsis className="text-light-green" />
                ),
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
          id="plataformas"
          className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-12 lg:gap-30 mt-10 lg:mt-10 px-4 sm:px-0"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-8 sm:gap-12 lg:gap-16 text-center lg:text-left">
            <motion.span
              className="font-light text-4xl sm:text-4xl text-smooth-black leading-tight"
              variants={fadeInUp}
            >
              Para quem é{" "}
              <h2 className="font-black text-4xl lg:text-5xl text-smooth-black leading-tight">
                Nosso Serviço
              </h2>
            </motion.span>
            <motion.p
              className="text-base lg:text-lg font-light text-smooth-black leading-relaxed max-w-full sm:max-w-lg"
              variants={fadeInUp}
            >
              Geramos performance e crescimento para empresas focadas em
              resultados. Nossa metodologia combina dados para guiar a
              estratégia, design para maximizar a conversão e transparência
              total na execução.
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
                  text="Para Fundadores de SaaS"
                  icon={<FolderCode className="text-light-green" />}
                />
              </motion.div>{" "}
              <motion.div variants={fadeInUp}>
                <Quality
                  text="Para Empresas Locais"
                  icon={<House className="text-light-green" />}
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
                <Button
                  className="bg-[#C0E6C4] text-smooth-black border  rounded-2xl font-bold text-base py-4 px-8
                         shadow-[0px_4px_0px_0px_#1E1E1E] hover:shadow-[0px_6px_0px_0px_#1E1E1E]
                         hover:bg-[#b1dcb4] hover:-translate-y-0.5
                         active:shadow-[0px_2px_0px_0px_#1E1E1E] active:translate-y-0.5
                         transition-all duration-200 ease-out"
                  onClick={() =>
                    document
                      .getElementById("contato")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
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
              alt="Equipe analisando gráficos e métricas de crescimento, representando performance em marketing digital."
              className="lg:max-w-full lg:h-auto hidden md:block size-150 lg:size-full "
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
            <h2 className="font-black text-4xl lg:text-5xl text-smooth-black leading-tight text-center lg:text-left">
              Especialistas{" "}
              <span className="font-light">com as principais Plataformas</span>
            </h2>
            <p className="text-base lg:text-lg font-light text-smooth-black leading-relaxed max-w-xl">
              Utilizamos um arsenal de tecnologia de ponta para garantir a
              execução precisa de cada estratégia. Dominamos e integramos as
              principais ferramentas de Tráfego Pago, Análise de Dados, SEO e
              Automação de Marketing para extrair a máxima performance.
            </p>
            <Button
              className="bg-[#C0E6C4] text-smooth-black border  rounded-2xl font-bold text-base py-4 px-8
                         shadow-[0px_4px_0px_0px_#1E1E1E] hover:shadow-[0px_6px_0px_0px_#1E1E1E]
                         hover:bg-[#b1dcb4] hover:-translate-y-0.5
                         active:shadow-[0px_2px_0px_0px_#1E1E1E] active:translate-y-0.5
                         transition-all duration-200 ease-out"
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Saiba mais
            </Button>
          </motion.div>

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
            <div className="hidden lg:flex gap-6">
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

        <motion.section
          id="resultados"
          className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 py-16 lg:py-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={fadeInLeft}
          >
            <img
              src={resultsImage}
              alt="Equipe de marketing impulsionando gráfico de crescimento, foco em resultados reais e ROI."
              className="max-w-full h-auto rounded-lg"
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right gap-6"
            variants={fadeInUp}
          >
            <h2 className="font-black text-4xl sm:text-5xl text-smooth-black leading-tight">
              Resultados{" "}
              <span className="font-light">são o nosso maior foco</span>
            </h2>
            <p className="text-base lg:text-lg font-light  text-smooth-black leading-relaxed">
              Esqueça as métricas de vaidade. Nós focamos obsessivamente no que
              impacta seu faturamento e expande sua base de clientes. Para nós,
              resultado é uma ciência, não um acaso.
            </p>
            <Button
              className="bg-[#C0E6C4] text-smooth-black border  rounded-2xl font-bold text-base py-4 px-8
                       shadow-[0px_4px_0px_0px_#1E1E1E] hover:shadow-[0px_6px_0px_0px_#1E1E1E]
                       hover:bg-[#b1dcb4] hover:-translate-y-0.5
                       active:shadow-[0px_2px_0px_0px_#1E1E1E] active:translate-y-0.5
                       transition-all duration-200 ease-out"
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Solicitar Orçamento
            </Button>
          </motion.div>
        </motion.section>

        <div id="estudo-de-caso">
          <CaseStudySection />
        </div>

        <div id="contato">
          <ContactSession />
        </div>
      </div>
      <Footer />
    </div>
  );
}
