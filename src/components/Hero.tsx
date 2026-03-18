"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const trustBadges = [
  "GST Ready",
  "Razorpay Payments",
  "Real-time Kitchen Dashboard",
  "No App Needed",
];

const foodItems = [
  { name: "Truffle Pasta", price: "₹2,100" },
  { name: "Caesar Salad", price: "₹450" },
  { name: "Masala Dosa", price: "₹349" },
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-height-[100vh] w-full pt-32 pb-20 bg-background overflow-hidden">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 grain opacity-[0.03] pointer-events-none" />

      {/* Decorative Glow Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col gap-8 max-w-2xl"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary font-semibold text-sm">
              🍽 QR-First Restaurant Platform
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight"
          >
            Let Your Customers Order. <br />
            <span className="text-primary">You Focus on the Food.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary leading-relaxed"
          >
            Dineo turns any table into a smart ordering station. Customers scan,
            browse, and pay — all from their phone. No app. No friction. Just
            orders.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-primary/30">
              Get Started Free
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-primary-light">
              See How It Works →
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-y-4 gap-x-8 pt-4"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-text-secondary text-sm font-medium"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center">
                  <Check size={12} />
                </div>
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[320px] h-[650px] bg-zinc-900 rounded-[3rem] p-4 shadow-2xl border-8 border-zinc-800"
          >
            {/* Inner Screen */}
            <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col relative">
              {/* Header */}
              <div className="bg-primary p-6 pt-10 text-white">
                <h3 className="text-xl font-bold">The Golden Fork</h3>
                <p className="text-xs opacity-90">Table #5 · Ordering with Dineo</p>
              </div>

              {/* Categories */}
              <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar">
                {["All", "Starters", "Main", "Drinks"].map((cat, i) => (
                  <span
                    key={cat}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${
                      i === 0
                        ? "bg-primary text-white"
                        : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Items */}
              <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto no-scrollbar">
                {foodItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 rounded-2xl border border-zinc-100 shadow-sm"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-zinc-800">
                        {item.name}
                      </h4>
                      <p className="text-xs font-medium text-primary">
                        {item.price}
                      </p>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold">
                      +
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Summary Floating Card */}
              <div className="absolute bottom-6 left-4 right-4 bg-white rounded-2xl p-4 shadow-premium border border-primary-light">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-zinc-500">Truffle Pasta x1</span>
                  <span className="text-xs font-bold">₹2,100</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold">Total</span>
                  <span className="text-lg font-black text-primary">₹2,100</span>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20">
                  Review Order
                </button>
              </div>
            </div>

            {/* Speaker Grille */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-1 bg-zinc-800 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
