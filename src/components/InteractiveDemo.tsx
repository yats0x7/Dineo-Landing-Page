"use client";

import { useState } from "react";
import { VegMark, menu, rupees } from "./ui";

// The one live thing on the page: the visitor places an order as the guest,
// then runs it as the kitchen. Statuses and their words are the real ones
// (received -> pending -> preparing -> ready; the kitchen shows pending as
// ACCEPTED, the guest sees "Order Accepted").
type Stage = "cart" | "received" | "pending" | "preparing" | "ready";

const guest: Record<Exclude<Stage, "cart">, { label: string; text: string }> = {
  received: { label: "Order Received", text: "Waiting for the kitchen to accept it" },
  pending: { label: "Order Accepted", text: "The kitchen has your order and will start cooking soon" },
  preparing: { label: "Cooking", text: "The chef is cooking your food" },
  ready: { label: "Ready!", text: "Order is ready to be served" },
};

const kitchen: Record<Exclude<Stage, "cart">, { pill: string; pillTone: string; action: string; next: Stage }> = {
  received: { pill: "NEW", pillTone: "bg-[#fef3c7] text-[#92400e]", action: "Accept order", next: "pending" },
  pending: { pill: "ACCEPTED", pillTone: "bg-[#ffedd5] text-[#9a3412]", action: "Start cooking", next: "preparing" },
  preparing: { pill: "COOKING", pillTone: "bg-[#dbeafe] text-[#1e40af]", action: "Mark ready", next: "ready" },
  ready: { pill: "READY", pillTone: "bg-[#dcfce7] text-[#14532d]", action: "Start again", next: "cart" },
};

const order = menu.filter((m) => m.qty > 0);
const total = order.reduce((s, m) => s + m.price * m.qty, 0);
const steps: Exclude<Stage, "cart">[] = ["received", "pending", "preparing", "ready"];

// What to do next, shown beside the kitchen ticket so the visitor always
// knows where the next tap is and where its result appears.
const hint: Record<Stage, string> = {
  cart: "No orders yet. Place one on the guest's phone.",
  received: "Order in. Tap Accept order and watch the guest's phone.",
  pending: "Accepted. Now start cooking.",
  preparing: "Mark it ready. The guest sees it the same second.",
  ready: "That's the whole loop. The guest knew at every step.",
};

// Points left at the phone on wide screens, up at it on phones.
function Pointer() {
  return (
    <span aria-hidden="true" className="inline-flex shrink-0 rotate-90 md:rotate-0">
      <svg width="34" height="20" viewBox="0 0 34 20" fill="none" className="nudge">
        <path d="M33 10H3M3 10l8-8M3 10l8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function InteractiveDemo() {
  const [stage, setStage] = useState<Stage>("cart");
  const at = stage === "cart" ? -1 : steps.indexOf(stage);

  return (
    <section id="demo" className="w-full pb-28 md:pb-40">
      <div className="frame">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-6 items-end">
          <h2 data-reveal="rise" className="lg:col-span-6 text-head font-semibold text-balance">
            Try it. You&apos;re the kitchen.
          </h2>
          <p data-reveal className="lg:col-span-5 lg:col-start-8 text-body text-ink max-w-[40ch]">
            Place the order as the guest, then run it from the kitchen ticket. The
            phone updates the same way it does in the real app.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Guest's phone */}
          <div data-reveal className="relative overflow-hidden bg-tile-soft rounded-tile flex flex-col justify-center items-center gap-4 px-6 py-12 md:py-16 min-h-[560px]">
            <img
              src="/media/masala-dosa.jpg"
              alt="A masala dosa on a banana leaf with chutney and sambar"
              width={1400}
              height={861}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div data-ui className="relative w-[300px] h-[520px] bg-white rounded-[34px] overflow-hidden flex flex-col text-ink">
              <div className="px-5 pt-7 pb-4">
                <p className="text-[12px] font-medium text-[#6b5d52]">Table 5 · Sharma&apos;s Kitchen</p>
                <p className="text-[21px] font-bold tracking-[-0.02em] leading-tight">
                  {stage === "cart" ? "Your order" : "Order #0065"}
                </p>
              </div>

              {stage === "cart" ? (
                <>
                  <div className="flex-1 px-5">
                    {order.map((m) => (
                      <div key={m.name} className="flex items-center gap-3 py-3.5 border-b border-[#f1ece6]">
                        <VegMark veg={m.veg} />
                        <span className="flex-1 text-[14px] font-semibold">{m.qty} × {m.name}</span>
                        <span className="text-[14px] tabular">{rupees(m.price * m.qty)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between py-3.5 text-[15px] font-bold">
                      <span>Total</span>
                      <span className="tabular">{rupees(total)}</span>
                    </div>
                  </div>
                  <div aria-hidden="true" className="flex flex-col items-center gap-1.5 text-ink">
                    <span className="rounded-[8px] bg-ink text-white text-[13px] font-semibold px-3 py-1.5">
                      Start here: you&apos;re the guest
                    </span>
                    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" className="bob">
                      <path d="M8 1v19M8 20l-6-6M8 20l6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <button
                    onClick={() => setStage("received")}
                    className="press cue m-4 mt-2 rounded-[14px] bg-[#b45309] hover:bg-[#92400e] text-white py-4 text-[15px] font-bold"
                  >
                    Place order · {rupees(total)}
                  </button>
                </>
              ) : (
                <div className="flex-1 px-5 flex flex-col" aria-live="polite">
                  <div key={stage} className="flash rounded-[16px] bg-[#fdf1e1] p-4">
                    <p className="text-[19px] font-bold text-[#92400e]">{guest[stage].label}</p>
                    <p className="mt-1 text-[13px] text-[#5c5047]">{guest[stage].text}</p>
                  </div>
                  <ol className="mt-6 space-y-4">
                    {steps.map((s, i) => (
                      <li key={s} className="flex items-center gap-3">
                        <span
                          className={`w-[18px] h-[18px] rounded-[5px] transition-colors duration-300 ${
                            i < at ? "bg-[#15803d]" : i === at ? "bg-[#d97706]" : "bg-[#f1ece6]"
                          }`}
                        />
                        <span className={`text-[14px] font-semibold ${i <= at ? "text-[#1c1410]" : "text-[#8a7d72]"}`}>
                          {guest[s].label}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-auto mb-5 text-[13px] text-[#6b5d52]">
                    {order.map((m) => `${m.qty} × ${m.name}`).join(", ")} · {rupees(total)}
                  </p>
                </div>
              )}
            </div>
            {stage !== "cart" && (
              <div className="relative md:hidden w-[300px] flex items-center gap-3 rounded-[16px] bg-night px-4 py-3 text-ground">
                <span className="text-small text-night-muted flex-1">Now you&apos;re the kitchen</span>
                <button
                  onClick={() => setStage(kitchen[stage].next)}
                  className={`press rounded-[10px] bg-ground text-ink px-4 py-2.5 text-small font-semibold ${stage !== "ready" ? "cue" : ""}`}
                >
                  {kitchen[stage].action}
                </button>
              </div>
            )}
          </div>

          {/* Kitchen ticket. On phones the full ticket sits below; its next
              action is also repeated under the guest's phone so each tap and
              its result share one screen. */}
          <div data-reveal className="relative overflow-hidden bg-night rounded-tile flex flex-col justify-center px-6 md:px-12 py-12 md:py-16 min-h-[460px]">
            {/* A canteen kitchen at work behind the ticket, dimmed so the ticket reads. */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/media/dosa-tawa-poster.jpg"
              aria-label="A cook spreading masala on a dosa on the tawa"
            >
              <source src="/media/dosa-tawa.webm" type="video/webm" />
              <source src="/media/dosa-tawa.mp4" type="video/mp4" />
            </video>
            <div aria-hidden="true" className="absolute inset-0 bg-night/70" />
            <p className="relative flex items-center gap-2.5 text-body text-ground">
              <span aria-hidden="true" className="live-dot" />
              Kitchen screen, live
            </p>
            {stage === "cart" ? (
              <p className="relative mt-4 flex items-start gap-4 text-lead text-ground max-w-[24ch]">
                <span className="mt-[0.35em] text-sun"><Pointer /></span>
                {hint.cart}
              </p>
            ) : (
              <div data-ui className="ticket-in relative mt-4 w-full max-w-[420px] bg-white rounded-[18px] p-6 text-ink">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[13px] font-semibold text-[#6b5d52]">#0065 · just now</p>
                    <p className="text-[28px] font-bold tracking-[-0.02em] leading-tight">Table 5</p>
                  </div>
                  <span className={`rounded-[6px] px-2.5 py-1 text-[12px] font-bold ${kitchen[stage].pillTone}`}>
                    {kitchen[stage].pill}
                  </span>
                </div>
                <ul className="mt-5 space-y-2">
                  {order.map((m) => (
                    <li key={m.name} className="flex items-center gap-3 text-[16px]">
                      <VegMark veg={m.veg} />
                      <span className="font-semibold">{m.qty} ×</span> {m.name}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setStage(kitchen[stage].next)}
                  className={`press mt-6 w-full rounded-[12px] py-3.5 text-[15px] font-bold ${
                    stage === "ready"
                      ? "bg-[#f1ece6] text-[#1c1410] hover:bg-[#e8e3dc]"
                      : "cue bg-[#1c1410] text-white hover:bg-[#b45309]"
                  }`}
                >
                  {kitchen[stage].action}
                </button>
              </div>
            )}
            {stage !== "cart" && (
              <p key={stage} className="flash relative mt-5 hidden md:flex items-center gap-3 text-body text-ground max-w-[420px]">
                <span className="text-sun"><Pointer /></span>
                {hint[stage]}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
