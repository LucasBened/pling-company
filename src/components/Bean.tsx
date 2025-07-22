interface BeanProps {
  text?: string;
}

export default function Bean({ text }: BeanProps) {
  return (
    <div className="items-center justify-center py-1.5 px-2.5 border-2 border-pastel-green rounded-full bg-transparent-bg ">
      <p className="text-smooth-black font-bold text-xs">{text}</p>
    </div>
  );
}
