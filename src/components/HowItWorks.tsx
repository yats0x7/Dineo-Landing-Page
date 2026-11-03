// The order's own journey, drawn as one bar: setting up is the long part and
// happens once; after that each order is a minute of the guest's time and a
// second to reach the kitchen. Widths follow that, with a floor so the short
// stages stay readable.
const stages = [
  {
    time: "One afternoon, once",
    text: "First, add your menu and print a QR code for each table.",
    grow: 5,
    tone: "bg-tile text-ink",
  },
  {
    time: "Under a minute",
    text: "Then guests scan, pick their dishes and place the order.",
    grow: 2.4,
    tone: "bg-ink text-ground",
  },
  {
    time: "About a second",
    text: "The order lands on the kitchen screen with its table number.",
    grow: 2,
    tone: "bg-tile-soft text-ink",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-28 md:py-40">
      <div className="frame">
        <h2 data-reveal="rise" className="text-head font-semibold max-w-[16ch] text-balance">
          Set it up once. Then it runs.
        </h2>

        <ol data-ui className="mt-16 flex flex-col md:flex-row gap-[6px]" data-reveal>
          {stages.map((s) => (
            <li
              key={s.time}
              className="flex flex-col"
              style={{ flexGrow: s.grow, flexBasis: 0, minWidth: "12%" }}
            >
              <div className={`${s.tone} rounded-tile h-[110px] md:h-[22vh] md:min-h-[160px] p-5 md:p-6`}>
                <p className="text-lead font-semibold tracking-[-0.02em]">
                  {s.time}
                </p>
              </div>
              <p className="mt-4 text-body text-ink max-w-[24ch] md:pr-4">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
