"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star } from "lucide-react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Standard",
      tag: "Best for cafes & small restaurants",
      monthlyPrice: "₹1,299",
      yearlyPrice: "₹11,499",
      yearlySubtext: "₹958/month · Save ₹4,089",
      features: [
        "QR Ordering (unlimited scans)",
        "Digital Menu (up to 3 menus)",
        "Chef Dashboard (real-time)",
        "Table Management (up to 20 tables)",
        "Auto Billing with GST",
        "Razorpay Payments (UPI, Cards, Net Banking)",
        "Pay Later (Cash) option",
        "Offers & Discounts (item + bill level)",
        "Thermal Printer Support",
        "Basic Analytics",
        "Customer OTP Verification",
        "Up to 2 staff accounts",
        "Email support (48hr response)",
      ],
      cta: "Start Free Trial",
      dominant: false,
    },
    {
      name: "Pro",
      tag: "Best for serious restaurants",
      monthlyPrice: "₹2,499",
      yearlyPrice: "₹22,499",
      yearlySubtext: "₹1,874/month · Save ₹7,489",
      features: [
        "Everything in Standard, plus:",
        "Unlimited Tables & Menus",
        "Advanced Inventory Tracking",
        "Multi-outlet Management",
        "Kitchen Display System (KDS)",
        "Waiter App support",
        "AI-Powered Demand Forecasting",
        "Priority 24/7 Support",
        "Dedicated Account Manager",
        "Custom Branding & Themes",
        "API Access & Webhooks",
        "Deep Analytics & Export",
      ],
      cta: "Upgrade to Pro",
      dominant: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white w-full">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary mb-12"
          >
            One flat price per outlet. No per-user fees. No surprises.
          </motion.p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isYearly ? "text-text-primary" : "text-text-secondary"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-primary/10 rounded-full relative p-1 transition-colors duration-300"
            >
              <motion.div
                animate={{ x: isYearly ? 24 : 0 }}
                className="w-6 h-6 bg-primary rounded-full shadow-sm"
              />
            </button>
            <span className={`text-sm font-bold ${isYearly ? "text-text-primary" : "text-text-secondary"}`}>Yearly</span>
          </div>

          <AnimatePresence>
            {isYearly && (
              <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                className="mt-8 p-4 bg-primary-light border border-primary/20 rounded-2xl inline-block"
              >
                <p className="text-primary-dark font-bold text-sm">
                  💰 Restaurants on yearly plans save up to ₹7,489/year — that's 2 months completely free.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative p-8 md:p-12 rounded-[2rem] border transition-all duration-300 flex flex-col ${
                plan.dominant
                  ? "bg-primary border-primary text-white shadow-premium scale-105 z-10"
                  : "bg-white border-border text-text-primary hover:shadow-xl"
              }`}
            >
              {plan.dominant && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-6 py-1.5 rounded-full text-sm font-black shadow-lg flex items-center gap-2">
                  <Star size={14} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold mb-6 inline-block ${
                  plan.dominant ? "bg-white/20 text-white" : "bg-primary-light text-primary"
                }`}>
                  {plan.tag}
                </span>
                <h3 className="text-3xl font-black mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <motion.span
                    key={isYearly ? "yearly" : "monthly"}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-black tracking-tight"
                  >
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </motion.span>
                  <span className={`text-sm font-bold opacity-60`}>
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                {isYearly && (
                  <p className={`text-sm font-bold mt-2 ${plan.dominant ? "text-white/80" : "text-success"}`}>
                    {plan.yearlySubtext}
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.dominant ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                    }`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${
                plan.dominant
                  ? "bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/10"
                  : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
