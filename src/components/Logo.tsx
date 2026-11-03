import { ChefHat } from "lucide-react";

// Same mark as the kitchen portal (admin.dineo.co.in): a white chef hat on
// an orange tile. The favicon in src/app/icon.png is that portal's favicon.
export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`${className} bg-primary rounded-lg flex items-center justify-center text-white shrink-0`}>
      <ChefHat className="w-[60%] h-[60%]" strokeWidth={2.25} />
    </div>
  );
}

export default function Logo() {
  return (
    <>
      <LogoMark />
      <span className="text-2xl font-bold text-primary">Dineo</span>
    </>
  );
}
