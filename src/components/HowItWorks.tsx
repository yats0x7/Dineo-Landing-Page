"use client";

import { motion } from "framer-motion";
import { QrCode, Smartphone, ChefHat, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Print Your Table QR Codes",
    description:
      "Generate QR codes for each table from your dashboard. Print and place them — that's it.",
    icon: QrCode,
  },
  {
    number: "02",
    title: "Customers Scan & Order",
    description:
      "Customers scan with any camera app, browse your menu, add items, and place orders in seconds.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Kitchen Gets It Instantly",
    description:
      "Orders appear on your Chef Dashboard in real time. Accept, prepare, and mark ready — all from one screen.",
    icon: ChefHat,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background w-full">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
          >
            Up and running in 3 steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary"
          >
            From zero to fully digital in under 10 minutes.
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-white border border-border shadow-sm group hover:shadow-premium transition-all duration-300"
            >
              <div className="text-6xl font-black text-primary-light absolute -top-6 left-8 -z-10 group-hover:-translate-y-2 transition-transform duration-300">
                {step.number}
              </div>
              
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20">
                <step.icon size={28} />
              </div>

              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-primary/30"
                  >
                    <ArrowRight size={32} />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
