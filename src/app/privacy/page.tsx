import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Dineo",
  description:
    "What Dineo collects when you order at a restaurant or use the restaurant portal, who sees it, how long it's kept, and how to ask for it to be deleted.",
};

const UPDATED = "6 November 2026";
const CONTACT = "kattayatharth@gmail.com";

// What each outside service does with data. Kept in one place so the table
// and anything else that names them can't drift apart.
const PROCESSORS = [
  { name: "Supabase", does: "Database and staff sign-in sessions", where: "Mumbai, India" },
  {
    name: "Vercel",
    does: "Runs the apps and counts page visits (Vercel Analytics: no cookies, no profile of you)",
    where: "Mumbai, India, with a worldwide delivery network",
  },
  { name: "Google", does: "Sign-in for restaurant owners and staff", where: "Google's servers" },
  { name: "Razorpay", does: "Online payments, only at restaurants that connect it", where: "India" },
  { name: "WhatsApp (Meta)", does: "Only if you message us from this website", where: "Meta's servers" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-lead font-semibold">{title}</h2>
      <div className="mt-4 space-y-4 text-body text-muted">{children}</div>
    </section>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <main className="flex min-h-[100svh] flex-col">
      <Navbar />

      <article className="frame pt-32 pb-24 md:pt-40">
        <div className="max-w-[46rem]">
          <h1 className="text-head font-semibold">Privacy Policy</h1>
          <p className="mt-4 text-small text-muted">Last updated {UPDATED}</p>

          <div className="mt-10 space-y-4 text-body text-muted">
            <p>
              Dineo is QR ordering software for restaurants. It is run by{" "}
              <span className="text-ink">Yatharth Katta, trading as Dineo</span>, based in Delhi-NCR, India.
            </p>
            <p>
              This policy covers the ordering page diners open from a table&apos;s QR code (app.dineo.co.in), the
              restaurant portal (admin.dineo.co.in) and this website. Questions or requests go to{" "}
              <a className="text-ink underline underline-offset-4" href={`mailto:${CONTACT}`}>
                {CONTACT}
              </a>
              .
            </p>
          </div>

          <Section title="Who decides what happens to your data">
            <p>
              When you order at a restaurant, the restaurant decides why your details are collected and what they
              are used for. Under India&apos;s Digital Personal Data Protection Act, 2023, the restaurant is the Data
              Fiduciary for that data, and Dineo processes it on the restaurant&apos;s behalf.
            </p>
            <p>
              For restaurant owners and staff who use the portal, and for visitors to this website, Dineo is the Data
              Fiduciary.
            </p>
          </Section>

          <Section title="If you order at a restaurant">
            <p>We collect:</p>
            <List
              items={[
                "the name and phone number you enter before ordering;",
                "your table number, what you ordered, any special instructions, when you ordered, and the bill;",
                <>
                  if you pay online, Razorpay&apos;s payment and order IDs and whether the payment went through. Your
                  card, UPI or bank details go straight to Razorpay. Dineo never sees them.
                </>,
              ]}
            />
            <p>
              We use this so the restaurant can prepare your order, find your table, contact you about that order and
              bill you. It is never used for marketing and never sold.
            </p>
            <p>
              Only the restaurant you ordered from, its owner and its staff, can see it. No other restaurant can. You
              agree to this when you place the order, and the ordering page says so under the name and phone fields
              before you enter anything.
            </p>
          </Section>

          <Section title="If you run a restaurant or work at one">
            <List
              items={[
                "When you sign in with Google: your name, email address and profile picture. We never see your Google password.",
                "Your role (owner, manager, chef or waiter) and which restaurant you belong to.",
                "Business details the owner enters: restaurant name, address and phone, GSTIN, FSSAI number, the owner's name and email, and menus, prices and photos.",
                "If the owner connects Razorpay: the Razorpay Key Id and Key Secret. The secret is stored encrypted and cannot be viewed again, even by the owner.",
              ]}
            />
            <p>We use these to run the portal, show orders to the right kitchen, and print bills.</p>
          </Section>

          <Section title="If you visit this website">
            <p>
              This website sets no cookies and keeps no database. The contact form doesn&apos;t send anything to us:
              it opens WhatsApp with your message filled in, and WhatsApp&apos;s own privacy policy applies from there.
            </p>
          </Section>

          <Section title="What is stored on your device">
            <p>
              The ordering page keeps your restaurant, table, table session, cart and an order reference in your
              browser&apos;s local storage, so reloading the page doesn&apos;t lose your order. The restaurant portal
              keeps you signed in with login cookies. We don&apos;t use advertising or tracking cookies.
            </p>
          </Section>

          <Section title="Services that handle data for us">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[32rem] text-left text-small">
                <thead>
                  <tr className="text-ink">
                    <th className="py-2 pr-4 font-semibold">Service</th>
                    <th className="py-2 pr-4 font-semibold">What it does</th>
                    <th className="py-2 font-semibold">Where</th>
                  </tr>
                </thead>
                <tbody>
                  {PROCESSORS.map((p) => (
                    <tr key={p.name} className="align-top">
                      <td className="py-2 pr-4 text-ink">{p.name}</td>
                      <td className="py-2 pr-4">{p.does}</td>
                      <td className="py-2">{p.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="How long we keep it">
            <List
              items={[
                "Diners' names and phone numbers are deleted 90 days after the order. The order itself (items, amounts and time) stays without them, because the restaurant needs it for its accounts and tax records.",
                "Restaurant and staff accounts are kept while the restaurant uses Dineo. When an account is closed, we delete its personal data on request, except anything the law requires us or the restaurant to keep.",
              ]}
            />
          </Section>

          <Section title="Keeping it safe">
            <p>
              Data is encrypted in transit. Each restaurant can see only its own data, and the database enforces that,
              not just the app. Payment keys are encrypted at rest. No system is perfectly secure; if a breach affects
              your data, we will tell you and the Data Protection Board of India as the law requires.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Under the DPDP Act you can ask to see your data, correct it, have it erased, withdraw your consent, and
              nominate someone to act for you. Email{" "}
              <a className="text-ink underline underline-offset-4" href={`mailto:${CONTACT}`}>
                {CONTACT}
              </a>{" "}
              with the restaurant&apos;s name, the date and your phone number so we can find the record. Diners can
              also ask the restaurant directly.
            </p>
            <p>
              We reply within 30 days. If you are not satisfied with our answer, you can complain to the Data
              Protection Board of India.
            </p>
          </Section>

          <Section title="Children">
            <p>Dineo is not meant for children. If you are under 18, please ask a parent or guardian to place the order.</p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              If this policy changes, we will update this page and the date at the top. Restaurants using Dineo will
              be told directly about any change that affects them.
            </p>
          </Section>
        </div>
      </article>

      <Footer />
      <Reveal />
    </main>
  );
}
