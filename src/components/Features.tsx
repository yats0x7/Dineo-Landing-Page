"use client";

import { motion } from "framer-motion";
import {
  QrCode,
  ChefHat,
  LayoutGrid,
  Receipt,
  CreditCard,
  Printer,
  Package,
  Tag,
} from "lucide-react";

const features = [
  {
    name: "QR Ordering",
    description:
      "Customers scan and order from their phones. No waiter needed for taking orders.",
    icon: QrCode,
  },
  {
    name: "Chef Dashboard",
    description:
      "Real-time order management. Accept, prepare, and mark orders ready instantly.",
    icon: ChefHat,
  },
  {
    name: "Table Management",
    description:
      "Live table status with color indicators — Vacant, Occupied, Paid, Pending.",
    icon: LayoutGrid,
  },
  {
    name: "Billing System",
    description:
      "Automatic bill generation with GST and service charge support built-in.",
    icon: Receipt,
  },
  {
    name: "Razorpay Payments",
    description:
      "Accept UPI, cards, and net banking. Or let customers pay cash at the end.",
    icon: CreditCard,
  },
  {
    name: "Thermal Printer Support",
    description:
      "Print restaurant bills instantly on any thermal printer.",
    icon: Printer,
  },
  {
    name: "Inventory Tracking",
    description:
      "Track ingredients and stock usage. Get low-stock alerts automatically.",
    icon: Package,
  },
  {
    name: "Offers & Discounts",
    description:
      "Run item-level or bill-level promotions with automatic discount calculation.",
    icon: Tag,
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-24 bg-white w-full">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
          >
            Everything your restaurant needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary"
          >
            Built for modern dine-in. Designed for speed.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-premium transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {feature.name}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
