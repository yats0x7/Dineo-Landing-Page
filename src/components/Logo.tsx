// Dineo's mark: the white "D" on an orange tile. Same drawing as the customer
// app's public/icon.svg, which is also this site's favicon (src/app/icon.svg).
export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={`${className} shrink-0`} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#d97706" />
      <path
        d="M10 8h6c3.5 0 6 2.5 6 6s-2.5 6-6 6h-6v-12z m4 8h2c1.5 0 2.5-1 2.5-2s-1-2.5-2.5-2.5h-2v4.5z"
        fill="white"
      />
    </svg>
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
