import Link from "next/link";
import { PhoneMenu } from "./ui";

// The Dineo tile, enlarged until the screen crops it, carries the guest's
// menu: the same rounded square as the QR sticker on every table.
export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col lg:flex-row lg:items-center">
      <div
        aria-hidden="true"
        className="shutter absolute motif bg-tile
          w-[130vw] h-[130vw] left-[-15vw] top-[calc(100%-118vw)]
          md:w-[96vw] md:h-[96vw] md:left-[8vw] md:top-[calc(100%-62vw)]
          lg:w-[120svh] lg:h-[120svh] lg:left-[58%] lg:top-[-10svh]"
      >
        <div className="w-full h-full" />
      </div>

      <div className="frame relative grid grid-cols-1 lg:grid-cols-12 gap-x-8 pt-32 lg:pt-28 pb-0 lg:pb-16">
        <div className="lg:col-span-7">
          <h1 className="text-display font-semibold text-balance">
            Your tables take the orders.
          </h1>
          <p className="mt-8 text-lead text-ink max-w-[32rem]">
            Guests scan the QR on their table, order and pay from their phone, and
            the order shows up on your kitchen screen. No app to download.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="#contact"
              className="press bg-action hover:bg-action-dark text-white px-7 py-4 rounded-tile text-body font-semibold"
            >
              Book a free demo
            </Link>
            <Link
              href="#how-it-works"
              className="text-body font-semibold text-ink underline decoration-tile decoration-2 underline-offset-[6px] hover:decoration-ink transition-colors"
            >
              See how it works
            </Link>
          </div>
          <p className="mt-8 text-small text-muted">
            ₹1,999 a month per outlet. GST bills, UPI, cards and cash included.
          </p>
        </div>

        <div className="lg:col-span-5 relative flex justify-center lg:justify-end lg:pr-[4vw] mt-14 lg:mt-0 h-[440px] md:h-[520px] lg:h-auto">
          <PhoneMenu className="lg:scale-[1.06] origin-top" />
        </div>
      </div>
    </section>
  );
}
