// Pieces of the real Dineo interfaces, drawn at true size. Each root carries
// data-ui: inside it the app's own borders and controls are allowed.

export function VegMark({ veg = true }: { veg?: boolean }) {
  // India's food-type mark: a square with a dot, green for veg, brown for non-veg.
  const c = veg ? "#15803d" : "#7c2d12";
  return (
    <span
      aria-label={veg ? "Veg" : "Non-veg"}
      className="inline-flex w-[14px] h-[14px] items-center justify-center rounded-[3px] border-[1.5px] shrink-0"
      style={{ borderColor: c }}
    >
      <span className="w-[6px] h-[6px] rounded-full" style={{ background: c }} />
    </span>
  );
}

export const menu = [
  { name: "Masala Dosa", price: 90, veg: true, qty: 1 },
  { name: "Paneer Tikka Roll", price: 110, veg: true, qty: 1 },
  { name: "Chicken Biryani", price: 180, veg: false, qty: 0 },
  { name: "Cold Coffee", price: 70, veg: true, qty: 0 },
];

export function rupees(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

/** The guest's menu, as it looks after scanning the table QR. */
export function PhoneMenu({ className = "" }: { className?: string }) {
  const inCart = menu.filter((m) => m.qty > 0);
  const total = inCart.reduce((s, m) => s + m.price * m.qty, 0);
  return (
    <div
      data-ui
      aria-label="Dineo ordering screen on a guest's phone"
      role="img"
      className={`w-[300px] h-[600px] bg-white rounded-[34px] overflow-hidden flex flex-col text-[#1c1410] ${className}`}
    >
      <div className="px-5 pt-7 pb-4">
        <p className="text-[12px] font-medium text-[#6b5d52]">Table 5 · Scan to order</p>
        <p className="text-[21px] font-bold tracking-[-0.02em] leading-tight">Sharma&apos;s Kitchen</p>
      </div>
      <div className="flex gap-2 px-5 pb-4">
        {["All", "South Indian", "Rolls", "Drinks"].map((c, i) => (
          <span
            key={c}
            className={`px-3 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap ${
              i === 0 ? "bg-[#1c1410] text-white" : "bg-[#f1ece6] text-[#5c5047]"
            }`}
          >
            {c}
          </span>
        ))}
      </div>
      <div className="flex-1 px-5 flex flex-col">
        {menu.map((m) => (
          <div key={m.name} className="flex items-center gap-3 py-3.5 border-b border-[#f1ece6] last:border-0">
            <VegMark veg={m.veg} />
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold leading-tight">{m.name}</p>
              <p className="text-[13px] text-[#6b5d52]">{rupees(m.price)}</p>
            </div>
            {m.qty > 0 ? (
              <span className="flex items-center gap-3 rounded-[10px] bg-[#fdf1e1] px-2.5 py-1.5 text-[13px] font-bold text-[#92400e]">
                <span>−</span>
                <span className="tabular">{m.qty}</span>
                <span>+</span>
              </span>
            ) : (
              <span className="rounded-[10px] border border-[#e8d5c0] px-3 py-1.5 text-[13px] font-bold text-[#92400e]">
                Add
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="m-4 rounded-[14px] bg-[#b45309] text-white px-4 py-3.5 flex items-center justify-between">
        <span className="text-[13px] font-medium">
          {inCart.length} items · <span className="font-bold">{rupees(total)}</span>
        </span>
        <span className="text-[14px] font-bold">View cart</span>
      </div>
    </div>
  );
}
