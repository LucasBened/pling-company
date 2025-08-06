import type { ReactNode } from "react";

interface MetricsProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function Metrics({ icon, title, description }: MetricsProps) {
  return (
    // O card agora é mais flexível em largura e tem um padding mais equilibrado
    <div className="flex flex-col items-center justify-center p-6 shadow-lg rounded-xl shadow-pastel-green border bg-white w-full h-full">
      {/* Container para o ícone e o título */}
      <div className="flex items-center text-center md:flex-col gap-3 mb-3">
        {/* Renderiza o ícone passado como prop */}
        <div className="text-light-green">{icon}</div>
        <h3 className="font-bold text-smooth-black text-center">{title}</h3>
      </div>
      {/* Descrição do diferencial */}
      <p className="font-light text-center text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}
