import { VegMark } from "./ui";

// A board of close-ups: each tile holds one real piece of the Dineo
// interface, enlarged and cropped by the tile's edges, with the capability
// named underneath. Grid: 12 columns, 104px rows, no empty cells.

function Caption({ name, text, light = false }: { name: string; text: string; light?: boolean }) {
  return (
    <div className="absolute left-5 bottom-5 right-5 lg:left-6 lg:bottom-6">
      <h3 className={`text-[1.1875rem] font-semibold leading-tight ${light ? "text-ground" : "text-ink"}`}>{name}</h3>
      <p className={`mt-1 text-small max-w-[30ch] ${light ? "text-night-muted" : "text-ink/80"}`}>{text}</p>
    </div>
  );
}

const tile = "relative overflow-hidden rounded-tile";

export default function Features() {
  return (
    <section id="features" className="w-full pb-28 lg:pb-40">
      <div className="frame">
        <div
          className="grid grid-cols-2 auto-rows-[28vw] gap-[6px] md:auto-rows-[124px] md:gap-2
            lg:grid-cols-12 lg:auto-rows-[104px]"
        >
          {/* Heading */}
          <div data-reveal="rise" className="col-span-2 row-span-2 lg:col-span-6 lg:row-span-2 flex flex-col justify-start pt-1">
            <h2 className="text-head font-semibold">From table to till.</h2>
            <p className="mt-4 text-body text-ink max-w-[34ch]">
              Everything a busy counter needs, in one place, on the screens you already have.
            </p>
          </div>

          {/* Kitchen screen */}
          <div data-reveal className={`${tile} bg-night col-span-2 row-span-3 lg:col-span-6 lg:row-span-2`}>
            <div data-ui className="absolute right-[-1.5em] top-[-0.6em] text-[17px] md:text-[20px] lg:text-[19px] w-[17em] bg-white rounded-[0.8em] p-[1em] text-ink">
              <div className="flex items-baseline justify-between">
                <span className="text-[1.35em] font-bold tracking-[-0.02em]">Table 5</span>
                <span className="text-[0.85em] font-semibold text-muted">#0065 · 2 min</span>
              </div>
              <p className="mt-[0.4em] text-[0.9em] text-muted">1 × Masala Dosa · 1 × Paneer Tikka Roll</p>
              <div className="mt-[0.8em] flex items-center gap-[0.5em]">
                <span className="rounded-[0.4em] bg-[#fdf1e1] text-[#92400e] px-[0.6em] py-[0.3em] text-[0.8em] font-bold">ACCEPTED</span>
                <span className="flex-1 rounded-[0.5em] bg-[#1c1410] text-white text-center py-[0.5em] text-[0.9em] font-semibold">Start cooking</span>
              </div>
            </div>
            <Caption light name="Kitchen screen" text="Accept, cook, mark ready. The guest sees every step." />
          </div>

          {/* QR ordering */}
          <div data-reveal className={`${tile} bg-tile col-span-2 row-span-3 lg:col-span-6 lg:row-span-4`}>
            <div data-ui className="absolute left-[18%] top-[14%] text-[30px] md:text-[40px] lg:text-[38px] w-[14em] bg-white rounded-[0.45em] text-ink">
              <div className="flex items-center gap-[0.45em] px-[0.55em] py-[0.45em] whitespace-nowrap">
                <span className="text-[0.55em] inline-flex"><VegMark /></span>
                <span className="flex-1">
                  <span className="block text-[0.6em] font-semibold leading-tight">Masala Dosa</span>
                  <span className="block text-[0.45em] text-muted">₹90 · with sambar</span>
                </span>
                <span className="rounded-[0.25em] bg-[#b45309] text-white px-[0.5em] py-[0.2em] text-[0.5em] font-bold">Add</span>
              </div>
              <div className="flex items-center gap-[0.45em] px-[0.55em] py-[0.45em] whitespace-nowrap bg-[#fdf1e1] rounded-b-[0.45em]">
                <span className="text-[0.55em] inline-flex"><VegMark /></span>
                <span className="flex-1">
                  <span className="block text-[0.6em] font-semibold leading-tight">Paneer Tikka Roll</span>
                  <span className="block text-[0.45em] text-muted">₹110 · in your order</span>
                </span>
                <span className="rounded-[0.25em] bg-white text-[#92400e] px-[0.5em] py-[0.2em] text-[0.5em] font-bold">− 1 +</span>
              </div>
            </div>
            <Caption name="QR ordering" text="Guests order from their own phone. Nobody has to write it down." />
          </div>

          {/* Live tables */}
          <div data-reveal className={`${tile} bg-surface col-span-1 row-span-3 lg:col-span-3 lg:row-span-4`}>
            <div data-ui className="absolute left-[12%] top-[-0.5em] text-[12px] md:text-[20px] lg:text-[22px] grid grid-cols-3 gap-[0.3em] w-[11em]">
              {[
                ["T1", "free"], ["T2", "eating"], ["T3", "bill"],
                ["T4", "eating"], ["T5", "free"], ["T6", "eating"],
                ["T7", "free"], ["T8", "bill"], ["T9", "free"],
              ].map(([t, s]) => (
                <span
                  key={t}
                  className={`aspect-square rounded-[0.5em] flex flex-col items-center justify-center font-bold ${
                    s === "free" ? "bg-white text-muted" : s === "eating" ? "bg-tile text-ink" : "bg-ink text-white"
                  }`}
                >
                  <span className="text-[1em]">{t}</span>
                  {s === "bill" && <span className="text-[0.55em] font-semibold">₹420</span>}
                </span>
              ))}
            </div>
            <Caption name="Live tables" text="Free, eating, or waiting to pay, at a glance." />
          </div>

          {/* Thermal printing */}
          <div data-reveal className={`${tile} bg-white col-span-1 row-span-3 lg:col-span-3 lg:row-span-4`}>
            <div data-ui className="absolute right-[10%] left-[10%] top-[-0.4em] text-[10px] md:text-[16px] lg:text-[17px] bg-[#f6f4f0] px-[1em] pt-[1.4em] pb-[1em] text-ink">
              <p className="text-center font-bold text-[1.05em]">Sharma&apos;s Kitchen</p>
              <p className="text-center text-[0.85em] text-muted">KOT #0065 · Table 5</p>
              <div className="mt-[0.8em] space-y-[0.3em] text-[0.9em]">
                <p className="flex justify-between"><span>1 × Masala Dosa</span><span>90</span></p>
                <p className="flex justify-between"><span>1 × Paneer Roll</span><span>110</span></p>
                <p className="flex justify-between font-bold pt-[0.3em]"><span>Total</span><span>₹200</span></p>
              </div>
            </div>
            <Caption name="Thermal printing" text="Bills and kitchen tickets on any thermal printer." />
          </div>

          {/* Offers */}
          <div data-reveal className={`${tile} bg-tile-soft col-span-1 row-span-3 lg:col-span-4 lg:row-span-2`}>
            <div data-ui className="absolute left-[0.8em] lg:left-auto lg:right-[-0.4em] top-[0.7em] text-[14px] md:text-[19px] lg:text-[20px] flex items-center gap-[0.6em] bg-white rounded-[0.7em] pl-[0.8em] pr-[1.4em] py-[0.6em] text-ink">
              <span className="w-[2.6em] h-[1.5em] rounded-full bg-[#15803d] relative">
                <span className="absolute right-[0.2em] top-[0.2em] w-[1.1em] h-[1.1em] rounded-full bg-white" />
              </span>
              <span className="font-semibold whitespace-nowrap">20% off Cold Coffee</span>
            </div>
            <Caption name="Offers" text="On one dish or the whole bill, applied for you." />
          </div>

          {/* Bills and payments */}
          <div data-reveal className={`${tile} bg-night col-span-1 row-span-3 lg:col-span-4 lg:row-span-2`}>
            <div data-ui className="absolute right-[-0.6em] top-[-0.3em] text-[11px] md:text-[17px] lg:text-[17px] w-[13em] bg-white rounded-[0.7em] p-[0.9em] text-ink space-y-[0.25em]">
              <p className="flex justify-between text-muted"><span>Subtotal</span><span>₹200</span></p>
              <p className="flex justify-between text-muted"><span>GST 5%</span><span>₹10</span></p>
              <p className="flex justify-between font-bold"><span>Total</span><span>₹210</span></p>
              <p className="mt-[0.3em] rounded-[0.4em] bg-[#dcfce7] text-[#14532d] text-center font-bold py-[0.2em]">Paid · UPI</p>
            </div>
            <Caption light name="Bills and payments" text="GST added for you. UPI, card or cash." />
          </div>

          {/* Stock */}
          <div data-reveal className={`${tile} bg-surface col-span-2 row-span-2 lg:col-span-4 lg:row-span-2`}>
            <div data-ui className="absolute right-[-0.5em] top-[0.8em] text-[15px] md:text-[20px] lg:text-[19px] w-[13em] bg-white rounded-[0.7em] p-[0.8em] text-ink">
              <p className="flex justify-between font-semibold"><span>Paneer</span><span className="text-[#b45309]">2.5 kg left</span></p>
              <span className="mt-[0.5em] block h-[0.45em] rounded-full bg-[#f1ece6]">
                <span className="block h-full w-[22%] rounded-full bg-[#d97706]" />
              </span>
            </div>
            <Caption name="Stock" text="Track ingredients and see what is running low." />
          </div>
        </div>
      </div>
    </section>
  );
}
