import { tv } from "tailwind-variants";

interface QualityProps {
  icon?: React.ReactNode;
  text?: string;
  variant?: "default" | "reverse";
}

const qualityVariants = tv({
  slots: {
    container:
      "flex items-start gap-2 text-sm font-bold border border-soft-gray shadow-xl shadow-pastel-green rounded-xl py-3.5 px-4 w-full lg:min-w-96 lg:max-w-96",
    text: "text-sm font-semibold",
  },
  variants: {
    variant: {
      default: {
        container: "",
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
  const { container, text: textClass } = qualityVariants({ variant });

  return (
    <div className={container()}>
      {icon}
      <span className={textClass()}>{text}</span>
    </div>
  );
}
