import { CountingNumber } from "@/components/animate-ui/text/counting-number";

interface MetricsProps {
  number: number;
  fromNumber?: number;
  text: string;
  value?: string;
}

export default function Metrics({
  number,
  fromNumber,
  text,
  value,
}: MetricsProps) {
  return (
    <div className="flex flex-col items-start justify-center py-7 px-4 shadow-xl rounded-xl shadow-pastel-green border border-s bg-white w-full max-w-44">
      <div className="flex items-center gap-2 mb-4">
        <span className="flex items-center gap-1 text-3xl font-bold">
          +
          <CountingNumber
            number={number}
            fromNumber={fromNumber}
            className="text-3xl font-bold text-smooth-black"
            inView
          />
          <span className="text-sm font-bold text-smooth-black">{value}</span>
        </span>
      </div>
      <p className="font-medium text-sm">{text}</p>
    </div>
  );
}
