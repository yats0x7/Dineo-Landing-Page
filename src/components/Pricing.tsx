"use client";

import { useState } from "react";
import Link from "next/link";

// One plan. Yearly is ₹19,999 against ₹23,988 for twelve monthly payments.
const plan = {
  monthly: 1999,
  yearly: 19999,
  features: [
    "QR ordering, unlimited scans",
    "Digital menu, up to 3 menus",
    "Kitchen screen in real time",
    "Table management, up to 20 tables",
    "Automatic bills with GST",
    "Razorpay payments: UPI, cards, net banking",
    "Pay later in cash",
    "Offers on a dish or the whole bill",
    "Thermal printer support",
    "Basic analytics",
    "Up to 2 staff accounts",
    "Email support, reply within 48 hours",
  ],
};

const inr = (n: number) => n.toLocaleString("en-IN");

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [perDay, setPerDay] = useState(80);

  // Honest per-order cost: the price over the orders it covers.
  const perOrder = isYearly ? plan.yearly / (perDay * 365) : plan.monthly / (perDay * 30);

  return (
    <section id="pricing" className="w-full bg-white py-28 md:py-40">
      <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-14">
        <div className="lg:col-span-5 lg:row-start-1">
          <h2 data-reveal="rise" className="text-head font-semibold text-balance">One plan, one price.</h2>
          <p data-reveal className="mt-6 text-body text-ink max-w-[36ch]">
            One flat price per outlet. No per-user fees and no surprises. Pay monthly,
            or pay for the year and get about two months free.
          </p>

          <div data-reveal className="mt-10 inline-flex rounded-tile bg-ground p-1.5" role="group" aria-label="Billing period">
            {[
              { label: "Monthly", yearly: false },
              { label: "Yearly", yearly: true },
            ].map((o) => (
              <button
                key={o.label}
                onClick={() => setIsYearly(o.yearly)}
                aria-pressed={isYearly === o.yearly}
                className={`press rounded-[10px] px-6 py-3 text-body font-semibold ${
                  isYearly === o.yearly ? "bg-ink text-ground" : "text-ink hover:bg-surface"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

        </div>

        <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2">
          <div data-reveal className="relative inline-block pr-[30%]">
            <p className="font-semibold leading-[0.85] tracking-[-0.05em] tabular text-[clamp(5.5rem,2rem+12vw,15rem)]">
              <span className="text-[0.5em] align-[0.62em] mr-[0.04em]">₹</span>
              {inr(isYearly ? plan.yearly : plan.monthly)}
            </p>
            {/* A thali in the Dineo tile's shape, laid over the figure. */}
            <img
              src="/media/thali.jpg"
              alt="A steel thali with dal, curries, rice and chapati"
              width={1000}
              height={667}
              loading="lazy"
              className="absolute motif object-cover w-[24%] aspect-square right-0 top-[-8%]"
            />
          </div>
          <p data-reveal className="mt-4 text-lead text-ink">
            {isYearly ? "a year · ₹1,667 a month, you save ₹3,989" : "a month, per outlet"}
          </p>

          <ul data-reveal className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3.5 max-w-[46rem]">
            {plan.features.map((f) => (
              <li key={f} className="flex items-baseline gap-3 text-body text-ink">
                <span aria-hidden="true" className="motif bg-tile w-2.5 h-2.5 shrink-0 translate-y-[-0.1em]" />
                {f}
              </li>
            ))}
          </ul>

        </div>
        <div data-reveal className="lg:col-span-5 lg:row-start-2 max-w-[26rem]">
          <label htmlFor="orders-per-day" className="flex justify-between text-body font-semibold">
            <span>Orders a day</span>
            <span className="tabular">{perDay}</span>
          </label>
          <input
            id="orders-per-day"
            type="range"
            min={10}
            max={400}
            step={10}
            value={perDay}
            onChange={(e) => setPerDay(Number(e.target.value))}
            className="mt-4 w-full h-11 accent-[#b45309] cursor-pointer"
          />
          <p className="mt-3 text-lead text-ink" aria-live="polite">
            That&apos;s about{" "}
            <span className="font-semibold tabular">₹{perOrder < 1 ? perOrder.toFixed(2) : perOrder.toFixed(1)}</span>{" "}
            an order.
          </p>
          <p className="mt-2 text-body text-muted">
            ₹{inr(isYearly ? plan.yearly : plan.monthly)} spread over{" "}
            {inr(perDay * (isYearly ? 365 : 30))} orders a {isYearly ? "year" : "month"}.
          </p>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 lg:row-start-3">
          <Link
            data-reveal
            href="#contact"
            className="press inline-block bg-action hover:bg-action-dark text-white px-8 py-4 rounded-tile text-body font-semibold"
          >
            Book a free demo
          </Link>
        </div>
      </div>
    </section>
  );
}
