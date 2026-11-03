"use client";

import { useState } from "react";

const EMAIL = "dineo.india@gmail.com";
const PHONE = "+91 74530 31663";

// There is no form backend, so the form hands its details to the visitor's
// email app instead of pretending to send them.
export default function Contact() {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const place = String(f.get("restaurant") || "").trim();
    const reach = String(f.get("reach") || "").trim();
    const note = String(f.get("message") || "").trim();
    const subject = `Demo request: ${place || "my restaurant"}`;
    const body = [
      `Name: ${name}`,
      `Restaurant: ${place}`,
      `Phone or email: ${reach}`,
      note && `\n${note}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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

          <dl data-reveal className="mt-12 space-y-6">
            <div>
              <dt className="text-small text-muted">Call</dt>
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
            <p className="text-lead font-semibold text-ink mb-6">Book a free demo or trial</p>
            <label className="sr-only" htmlFor="c-name">Your name</label>
            <input id="c-name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
            <label className="sr-only" htmlFor="c-restaurant">Restaurant name</label>
            <input id="c-restaurant" name="restaurant" required autoComplete="organization" placeholder="Restaurant or canteen name" className={field} />
            <label className="sr-only" htmlFor="c-reach">Phone or email</label>
            <input id="c-reach" name="reach" required placeholder="Phone or email" className={field} />
            <label className="sr-only" htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message" rows={3} placeholder="Anything we should know? (optional)" className={`${field} h-auto py-4 resize-none`} />
            <button type="submit" className="press w-full h-[58px] rounded-[10px] bg-ink hover:bg-[#3a2a20] text-ground text-body font-semibold">
              Send my request
            </button>
            <p className="pt-2 text-small text-ink" aria-live="polite">
              {opened
                ? `Your email app should be open with this filled in. If it isn't, write to ${EMAIL}.`
                : "This opens your email app with the details filled in."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
