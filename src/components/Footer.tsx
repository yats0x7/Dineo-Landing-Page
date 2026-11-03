import Link from "next/link";
import { LogoMark } from "./Logo";

const LEGAL = "https://app.dineo.co.in/legal";

const columns = [
  {
    title: "Product",
    links: [
      { name: "How it works", href: "#how-it-works" },
      { name: "Features", href: "#features" },
      { name: "Live demo", href: "#demo" },
      { name: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: `${LEGAL}/privacy` },
      { name: "Terms", href: `${LEGAL}/terms` },
      { name: "Refunds", href: `${LEGAL}/refunds` },
      { name: "Cookies", href: `${LEGAL}/cookies` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-night text-ground w-full pt-20 md:pt-28 pb-10">
      <div className="frame">
        {/* The mark, built large: the Dineo tile beside the name at full width. */}
        <div data-reveal className="flex items-end gap-[3vw]" aria-hidden="true">
          <LogoMark className="w-[17vw] h-[17vw] max-w-[260px] max-h-[260px]" />
          <span className="font-semibold leading-[0.78] tracking-[-0.06em] text-[min(25vw,400px)] -mb-[0.06em]">
            Dineo
          </span>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12">
          {columns.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <h3 className="text-small text-night-muted">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.name}>
                    <Link href={l.href} className="text-body text-ground hover:text-sun transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 md:col-span-4 md:col-start-9">
            <h3 className="text-small text-night-muted">Talk to us</h3>
            <p className="mt-4 text-body">
              <a href="https://wa.me/917453031663" target="_blank" rel="noopener noreferrer" className="hover:text-sun transition-colors">WhatsApp us</a>
            </p>
            <p className="mt-2.5 text-body">
              <a href="mailto:dineo.india@gmail.com" className="hover:text-sun transition-colors">dineo.india@gmail.com</a>
            </p>
            <p className="mt-2.5 text-body">
              <a href="tel:+917453031663" className="hover:text-sun transition-colors">+91 74530 31663</a>
            </p>
            <p className="mt-2.5 text-body text-night-muted">Delhi-NCR, India</p>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-[60rem] space-y-2">
            <p className="text-small text-night-muted">© 2026 Dineo. QR ordering for restaurants in India.</p>
            <p className="text-small text-night-muted">
              Photos and footage via Wikimedia Commons:{" "}
              <a className="underline underline-offset-2 hover:text-ground" href="https://commons.wikimedia.org/wiki/File:Masala_dosa_01.jpg">Masala dosa</a> by Marajozkee,{" "}
              <a className="underline underline-offset-2 hover:text-ground" href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>;{" "}
              <a className="underline underline-offset-2 hover:text-ground" href="https://commons.wikimedia.org/wiki/File:Darjeeling,_India,_Indian_Thali_meal.jpg">Thali</a> by Vyacheslav Argenberg,{" "}
              <a className="underline underline-offset-2 hover:text-ground" href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>;{" "}
              <a className="underline underline-offset-2 hover:text-ground" href="https://commons.wikimedia.org/wiki/File:A_Crispy_DOSA.webm">A Crispy Dosa</a> by The open draft,{" "}
              <a className="underline underline-offset-2 hover:text-ground" href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>.
            </p>
          </div>
          <Link
            href="#contact"
            className="press bg-tile text-ink hover:bg-sun px-5 py-2.5 rounded-tile text-body font-semibold"
          >
            Book a free demo
          </Link>
        </div>
      </div>
    </footer>
  );
}
