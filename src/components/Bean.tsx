import { tv, type VariantProps } from "tailwind-variants";

const paragraph = tv({
  base: "text-smooth-black font-bold",
  variants: {
    size: {
      small: "text-xs",
      medium: "text-sm",
      large: "text-lg",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

interface BeanProps extends VariantProps<typeof paragraph> {
  text?: string;
  className?: string;
}

export default function Bean({ text, size, className }: BeanProps) {
  return (
    <div className="items-center justify-center py-1.5 px-2.5 border-2 border-pastel-green rounded-full bg-transparent-bg w-fit ">
      <p className={paragraph({ size, className })}>{text}</p>
    </div>
  );
}
