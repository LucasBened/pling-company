import { tv } from "tailwind-variants";

interface QualityProps {
  icon?: React.ReactNode;
  text?: string;
  variant?: "default" | "reverse";
}

const qualityVariants = tv({
  slots: {
    container:
      "flex items-center gap-3 text-sm font-bold border border-soft-gray shadow-lg shadow-pastel-green rounded-xl py-3 px-4 w-full lg:w-96",
    text: "text-sm font-semibold w-full",
    iconWrapper: "flex-shrink-0",
  },
  variants: {
    variant: {
      default: {
        text: "text-left",
      },
      reverse: {
        container: "flex-row-reverse",
        text: "text-right",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function Quality({
  icon,
  text,
  variant = "default",
}: QualityProps) {
  const {
    container,
    text: textClass,
    iconWrapper,
  } = qualityVariants({
    variant,
  });

  return (
    <div className={container()}>
      <div className={iconWrapper()}>{icon}</div>
      <span className={textClass()}>{text}</span>
    </div>
  );
}
