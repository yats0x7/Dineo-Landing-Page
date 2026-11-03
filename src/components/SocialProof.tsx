const stats = [
  { value: "10+", label: "Restaurants running on Dineo" },
  { value: "5K+", label: "Orders taken since launch" },
  { value: "99%", label: "Uptime" },
];

export default function SocialProof() {
  return (
    <section className="bg-night text-ground w-full py-24 md:py-32">
      <div className="frame grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-14 items-end">
        <h2 data-reveal="rise" className="lg:col-span-5 text-head font-semibold text-balance">
          Already taking real orders
        </h2>
        <dl className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10">
          {stats.map((s) => (
            <div key={s.label} data-reveal className="flex flex-col-reverse gap-3">
              <dt className="text-body text-night-muted max-w-[14rem]">{s.label}</dt>
              <dd className="text-display font-semibold text-sun tabular">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
