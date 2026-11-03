"use client";

import { useState } from "react";

const EMAIL = "dineo.india@gmail.com";
const PHONE = "+91 74530 31663";
const WHATSAPP = "917453031663";

const whatsapp = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

function WhatsAppMark() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3 1 2.6 1.1 2.7.1.2 1.9 2.9 4.6 4.1 1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.2Z" />
    </svg>
  );
}

// There is no form backend, so the form hands its details to WhatsApp, where
// the team replies fastest, instead of pretending to send them.
export default function Contact() {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const place = String(f.get("restaurant") || "").trim();
    const reach = String(f.get("reach") || "").trim();
    const note = String(f.get("message") || "").trim();
    const text = [
      `Hi Dineo, I'd like a free demo for ${place || "my restaurant"}.`,
      `Name: ${name}`,
      `Phone or email: ${reach}`,
      note && `\n${note}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsapp(text), "_blank", "noopener,noreferrer");
    setOpened(true);
  };

  const field =
    "w-full h-[54px] rounded-[10px] bg-[#f3c88a] px-4 text-body text-ink placeholder:text-ink/70 focus:outline-none focus:bg-[#f8dcb3]";

  return (
    <section id="contact" className="w-full py-28 md:py-40">
      <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-14 items-start">
        <div className="lg:col-span-5">
          <h2 data-reveal="rise" className="text-head font-semibold text-balance">Let&apos;s set up your place.</h2>
          <p data-reveal className="mt-6 text-body text-ink max-w-[34ch]">
            Join 10+ restaurants already taking orders with Dineo. Tell us about yours
            and we&apos;ll show you how it works on your own menu.
          </p>

          <a
            data-reveal
            href={whatsapp("Hi Dineo, I'd like to know more about Dineo for my restaurant.")}
            target="_blank"
            rel="noopener noreferrer"
            className="press mt-10 inline-flex items-center gap-3 bg-veg hover:bg-[#166534] text-white px-7 py-4 rounded-tile text-body font-semibold"
          >
            <WhatsAppMark />
            Message us on WhatsApp
          </a>

          <dl data-reveal className="mt-12 space-y-6">
            <div>
              <dt className="text-small text-muted">Call or WhatsApp</dt>
              <dd className="text-lead font-semibold">
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-action transition-colors">{PHONE}</a>
              </dd>
            </div>
            <div>
              <dt className="text-small text-muted">Email</dt>
              <dd className="text-lead font-semibold">
                <a href={`mailto:${EMAIL}`} className="hover:text-action transition-colors">{EMAIL}</a>
              </dd>
            </div>
            <div>
              <dt className="text-small text-muted">Based in</dt>
              <dd className="text-lead font-semibold">Delhi-NCR, India</dd>
            </div>
          </dl>
        </div>

        <div data-reveal className="lg:col-span-7 bg-tile rounded-tile p-6 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-2.5">
            <p className="text-lead font-semibold text-ink mb-6">Book a free demo</p>
            <label className="sr-only" htmlFor="c-name">Your name</label>
            <input id="c-name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
            <label className="sr-only" htmlFor="c-restaurant">Restaurant name</label>
            <input id="c-restaurant" name="restaurant" required autoComplete="organization" placeholder="Restaurant or canteen name" className={field} />
            <label className="sr-only" htmlFor="c-reach">Phone or email</label>
            <input id="c-reach" name="reach" required placeholder="Phone or email" className={field} />
            <label className="sr-only" htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message" rows={3} placeholder="Anything we should know? (optional)" className={`${field} h-auto py-4 resize-none`} />
            <button type="submit" className="press w-full h-[58px] rounded-[10px] bg-ink hover:bg-[#3a2a20] text-ground text-body font-semibold">
              Send on WhatsApp
            </button>
            <p className="pt-2 text-small text-ink" aria-live="polite">
              {opened
                ? `WhatsApp should be open with this filled in. If it isn't, message ${PHONE} or write to ${EMAIL}.`
                : "This opens WhatsApp with the details filled in. Just press send."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
