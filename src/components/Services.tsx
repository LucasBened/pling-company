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
    content:
      "flex flex-col justify-between gap-4 lg:gap-12 max-w-full lg:max-w-lg w-full lg:w-auto h-auto lg:h-full",
    text: "max-w-full lg:max-w-3xl text-sm text-smooth-black font-light leading-7",
    qualitiesContainer:
      "flex flex-col h-full justify-around gap-8 sm:gap-6 lg:gap-7 w-full",
    image: "w-full lg:w-auto flex justify-center",
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
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
        duration: 0.6,
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
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="w-full flex flex-col lg:flex-row items-start lg:items-start justify-between gap-8 lg:gap-6 xl:gap-8 h-fit lg:min-h-[400px]"
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
          <motion.div variants={itemVariants}>
            <Quality
              icon={qualities[0].icon}
              text={qualities[0].text}
              variant={variant}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Quality
              icon={qualities[1].icon}
              text={qualities[1].text}
              variant={variant}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Quality
              icon={qualities[2].icon}
              text={qualities[2].text}
              variant={variant}
            />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className={buttonWrapper()}>
          <Button className="px-7 py-5 shadow-xl text-smooth-black shadow-light-gray font-bold bg-pastel-green hover:bg-smooth-green transition-colors duration-300 w-full sm:w-auto">
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
          alt="Tráfego Pago"
          className="w-full max-w-md lg:max-w-none lg:w-auto h-auto"
        />
      </motion.div>
    </motion.div>
  );
}
