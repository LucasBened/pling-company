import { motion } from "framer-motion";
import roiImg from "../assets/images/roi.svg";
import cacImg from "../assets/images/cac.svg";
import whereImg from "../assets/images/where.svg";
import qualificadosImg from "../assets/images/qualificados.svg";

const caseStudies = [
  {
    img: qualificadosImg,
    title: "Gere Leads Realmente Qualificados",
    description:
      "Filtramos o ruído e entregamos oportunidades reais ao seu time de vendas, focando apenas em leads com verdadeira intenção de compra.",
  },
  {
    img: cacImg,
    title: "Reduza seu Custo de Aquisição (CAC)",
    description:
      "Otimizamos suas campanhas de forma obsessiva para cortar desperdícios, reduzir seu CAC e trazer mais clientes com menos investimento.",
  },
  {
    img: roiImg,
    title: "Aumente o seu Retorno Sobre o Investimento (ROI)",
    description:
      "Focamos na única métrica que importa: o lucro. Otimizamos seu investimento para garantir que seu ROI seja sempre positivo.",
  },
  {
    img: whereImg,
    title: "Saiba de Onde Vêm Seus Resultados",
    description:
      "Com nosso tracking avançado, você sabe exatamente o que funciona, permitindo otimizar investimentos e eliminar o que não gera resultado.",
  },
];

const CaseStudySection = () => {
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center gap-12 py-16 "
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-white rounded-3xl border border-[#E0E0E0] p-6 flex flex-col items-center text-center gap-5
                       transition-all duration-300 ease-out hover:border-[#1E1E1E] hover:-translate-y-2 hover:shadow-xl"
          >
            <img src={study.img} alt={study.title} className="w-24 h-24" />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg text-smooth-black leading-tight">
                {study.title}
              </h3>
              <div className="w-12 h-1 bg-[#C0E6C4] mx-auto rounded-full"></div>
              <p className="font-light text-smooth-gray text-sm leading-relaxed pt-2">
                {study.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CaseStudySection;
