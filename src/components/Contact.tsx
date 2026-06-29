"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, Mail, MapPin, Check } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background w-full relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
            >
              Get started with <span className="text-primary">Dineo</span> today.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary mb-12"
            >
              Join 500+ restaurants that are already using Dineo to provide a
              premium ordering experience.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: Phone, label: "Call Us", val: "+91 7453031663" },
                { icon: Mail, label: "Email", val: "dineo.india@gmail.com" },
                { icon: MapPin, label: "Visit Us", val: "Delhi-NCR, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-border">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-secondary uppercase">{item.label}</p>
                    <p className="text-lg font-bold text-text-primary">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2rem] border border-border shadow-premium relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary">First Name</label>
                  <input required type="text" className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary">Last Name</label>
                  <input required type="text" className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-secondary">Restaurant Name</label>
                <input required type="text" className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-secondary">Email Address</label>
                <input required type="email" className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-secondary">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"></textarea>
              </div>
              <button 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/20 hover:bg-primary-dark flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full" />
                  </motion.div>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>

            {/* Success Toast */}
            <AnimatePresence>
              {showToast && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-success text-white px-8 py-3 rounded-full font-bold shadow-xl flex items-center gap-2"
                >
                  <div className="w-5 h-5 bg-white text-success rounded-full flex items-center justify-center">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  Message Sent Successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
