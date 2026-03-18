"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  {
    label: "Restaurants",
    value: 500,
    suffix: "+",
    description: "Across 20+ cities",
  },
  {
    label: "Orders Processed",
    value: 50,
    suffix: "L+",
    description: "Since launch",
  },
  {
    label: "Uptime",
    value: 99.9,
    suffix: "%",
    description: "Reliable platform",
  },
];

function CountUp({
  value,
  suffix,
  duration = 2,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(progress * value);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString(undefined, {
        maximumFractionDigits: value % 1 === 0 ? 0 : 1,
      })}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-text-primary py-16 w-full">
      <div className="container mx-auto px-6">
        <p className="text-white/60 text-center mb-12 font-medium tracking-wide uppercase text-sm">
          Trusted by restaurants across India
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-bold text-primary mb-1">
                {stat.label}
              </div>
              <p className="text-white/40 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
