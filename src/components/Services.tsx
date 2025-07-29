import { motion } from "framer-motion";
import { tv } from "tailwind-variants";
import Bean from "./Bean";
import { Button } from "./ui/button";
import Quality from "./Quality";

interface ServicesProps {
  beanText: string;
  description: string;
  qualities: {
    icon: React.ReactNode;
    text: string;
  }[];
  image: string;
  variant?: "default" | "reverse";
}

const servicesVariants = tv({
  slots: {
    content: "flex flex-col justify-center gap-6 w-full lg:w-1/2 h-full",
    text: "max-w-full lg:max-w-xl text-base lg:text-base text-smooth-black font-light leading-7",
    qualitiesContainer: "flex flex-col h-full justify-around gap-7 w-full",
    image: "size-150 lg:w-1/2 flex items-center",
    beanWrapper: "",
    buttonWrapper: "",
  },
  variants: {
    variant: {
      default: {
        content: "lg:order-1 lg:items-start",
        text: "lg:text-left",
        qualitiesContainer: "lg:items-start",
        image: "lg:justify-end lg:order-2",
        beanWrapper: "lg:self-start",
        buttonWrapper: "lg:self-start",
      },
      reverse: {
        content: "lg:order-2 lg:items-end",
        text: "lg:text-right",
        qualitiesContainer: "lg:items-end",
        image: "lg:justify-start lg:order-1",
        beanWrapper: "lg:self-end",
        buttonWrapper: "lg:self-end",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function Services({
  beanText,
  description,
  qualities,
  image,
  variant = "default",
}: ServicesProps) {
  const {
    content,
    text,
    qualitiesContainer,
    image: imageClass,
    beanWrapper,
    buttonWrapper,
  } = servicesVariants({ variant });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: variant === "reverse" ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-12 h-fit lg:min-h-[400px] py-8 lg:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className={content()} variants={containerVariants}>
        <motion.div variants={itemVariants} className={beanWrapper()}>
          <Bean text={beanText} size="medium" className="p-1" />
        </motion.div>

        <motion.p className={text()} variants={itemVariants}>
          {description}
        </motion.p>

        <motion.div
          className={qualitiesContainer()}
          variants={containerVariants}
        >
          {qualities.map((quality, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Quality
                icon={quality.icon}
                text={quality.text}
                variant={variant}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className={buttonWrapper()}>
          <Button
            className="bg-[#C0E6C4] text-smooth-black border border-blacktext-smooth-black rounded-2xl font-bold text-base py-4 px-8
                         shadow-[0px_4px_0px_0px_#1E1E1E] hover:shadow-[0px_6px_0px_0px_#1E1E1E]
                         hover:bg-[#b1dcb4] hover:-translate-y-0.5
                         active:shadow-[0px_2px_0px_0px_#1E1E1E] active:translate-y-0.5
                         transition-all duration-200 ease-out"
          >
            Saiba mais
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className={imageClass()}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src={image}
          alt={`Ilustração para o serviço de ${beanText}`}
          className="w-full h-auto max-w-full"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}
