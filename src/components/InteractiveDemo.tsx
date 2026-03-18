"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, Clock, ChefHat, Check, QrCode } from "lucide-react";

type Tab = "customer" | "kitchen";
type CustomerStep = "A" | "B" | "C";
type KitchenStep = "A" | "B" | "C";

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<Tab>("customer");
  const [customerStep, setCustomerStep] = useState<CustomerStep>("A");
  const [kitchenStep, setKitchenStep] = useState<KitchenStep>("A");

  return (
    <section className="py-24 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
          >
            See Dineo in action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary"
          >
            Click through the actual experience your customers and kitchen will have.
          </motion.p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center gap-8 mb-16 relative">
          {(["customer", "kitchen"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 text-xl font-bold transition-all relative ${
                activeTab === tab ? "text-primary" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} View
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex justify-center min-h-[700px]">
          <AnimatePresence mode="wait">
            {activeTab === "customer" ? (
              <motion.div
                key="customer-demo"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative flex flex-col items-center gap-12"
              >
                {/* Phone Mockup */}
                <div className="w-[320px] h-[650px] bg-zinc-900 rounded-[3rem] p-4 shadow-2xl border-8 border-zinc-800 overflow-hidden">
                  <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col relative">
                    <AnimatePresence mode="wait">
                      {customerStep === "A" && (
                        <motion.div
                          key="stepA"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="p-8 flex flex-col items-center justify-center h-full text-center"
                        >
                          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8">
                            <QrCode size={40} />
                          </div>
                          <h4 className="text-2xl font-bold text-text-primary mb-4">What's Your Table?</h4>
                          <p className="text-text-secondary text-sm mb-8">Please enter your table number to start ordering.</p>
                          <div className="w-full h-14 border-2 border-primary-light rounded-xl flex items-center justify-center text-3xl font-black text-primary mb-8">
                            05
                          </div>
                          <button 
                            onClick={() => setCustomerStep("B")}
                            className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20"
                          >
                            Start Ordering
                          </button>
                        </motion.div>
                      )}

                      {customerStep === "B" && (
                        <motion.div
                          key="stepB"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="flex flex-col h-full"
                        >
                          <div className="bg-primary p-6 pt-10 text-white">
                            <h3 className="text-xl font-bold">The Golden Fork</h3>
                            <p className="text-xs opacity-90">Table #5 · Ordering</p>
                          </div>
                          <div className="p-4 flex flex-col gap-4">
                            <div className="flex gap-2 overflow-x-auto no-scrollbar">
                              {["All", "Starters", "Main"].map((cat, i) => (
                                <span key={cat} className={`px-4 py-1.5 rounded-full text-xs font-semibold ${i === 0 ? "bg-primary text-white" : "bg-zinc-100 text-zinc-600"}`}>
                                  {cat}
                                </span>
                              ))}
                            </div>
                            {[
                              { name: "Truffle Pasta", price: "₹2,100" },
                              { name: "Caesar Salad", price: "₹450" }
                            ].map((item) => (
                              <div key={item.name} className="flex items-center justify-between p-3 rounded-2xl border border-zinc-100">
                                <div>
                                  <h4 className="text-sm font-bold text-zinc-800">{item.name}</h4>
                                  <p className="text-xs font-medium text-primary">{item.price}</p>
                                </div>
                                <button className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold">+</button>
                              </div>
                            ))}
                          </div>
                          <div className="mt-auto p-4">
                            <button 
                              onClick={() => setCustomerStep("C")}
                              className="w-full bg-primary text-white py-4 rounded-xl font-bold"
                            >
                              Place Order · ₹2,100
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {customerStep === "C" && (
                        <motion.div
                          key="stepC"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="p-8 flex flex-col items-center justify-center h-full"
                        >
                          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center text-success mb-8">
                            <CheckCircle2 size={40} />
                          </div>
                          <h4 className="text-2xl font-bold text-text-primary mb-2 text-center">Order Received!</h4>
                          <p className="text-text-secondary text-sm mb-12 text-center">We're preparing your food.</p>
                          
                          <div className="w-full space-y-8">
                            {[
                              { label: "Order Received", status: "completed" },
                              { label: "Preparing", status: "active" },
                              { label: "Ready to Serve", status: "pending" },
                              { label: "Completed", status: "pending" },
                            ].map((s, i) => (
                              <div key={s.label} className="flex items-center gap-4 relative">
                                {i < 3 && (
                                  <div className={`absolute left-[11px] top-6 w-0.5 h-10 ${s.status === "completed" ? "bg-success" : "bg-zinc-100"}`} />
                                )}
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                  s.status === "completed" ? "bg-success text-white" : 
                                  s.status === "active" ? "bg-primary text-white" : "bg-zinc-100 text-zinc-400"
                                }`}>
                                  {s.status === "completed" ? <Check size={14} /> : <div className="w-2 h-2 rounded-full bg-current" />}
                                </div>
                                <span className={`text-sm font-bold ${s.status === "pending" ? "text-zinc-400" : "text-text-primary"}`}>
                                  {s.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4">
                  <button 
                    disabled={customerStep === "A"}
                    onClick={() => setCustomerStep(customerStep === "B" ? "A" : "B")}
                    className="p-4 rounded-full bg-white border border-border text-text-primary disabled:opacity-30 transition-all hover:bg-primary-light"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    disabled={customerStep === "C"}
                    onClick={() => setCustomerStep(customerStep === "A" ? "B" : "C")}
                    className="p-4 rounded-full bg-primary text-white disabled:opacity-30 transition-all hover:bg-primary-dark shadow-lg shadow-primary/20"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="kitchen-demo"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative flex flex-col items-center gap-12 w-full max-w-5xl"
              >
                {/* Laptop Mockup */}
                <div className="w-full bg-zinc-800 rounded-3xl p-4 shadow-2xl border-b-[12px] border-zinc-900">
                  <div className="bg-white rounded-xl overflow-hidden aspect-video flex flex-col relative">
                    {/* Kitchen Dashboard Top Nav */}
                    <div className="bg-zinc-50 border-b border-border p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">D</div>
                        <span className="font-bold text-text-primary">Kitchen Dashboard</span>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-zinc-200" />
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      {kitchenStep === "A" && (
                        <motion.div
                          key="kitchenStepA"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-8 grid grid-cols-4 gap-6"
                        >
                          {[
                            { label: "Active Menus", val: "3", color: "bg-blue-500" },
                            { label: "Pending Orders", val: "2", color: "bg-amber-500" },
                            { label: "Today's Revenue", val: "₹3,761", color: "bg-green-500" },
                            { label: "Completed", val: "49", color: "bg-zinc-800" },
                          ].map((kpi) => (
                            <div key={kpi.label} className="p-6 rounded-2xl bg-zinc-50 border border-border">
                              <p className="text-xs font-bold text-text-secondary uppercase mb-2">{kpi.label}</p>
                              <p className="text-2xl font-black text-text-primary">{kpi.val}</p>
                            </div>
                          ))}
                          <div className="col-span-4 p-8 rounded-2xl bg-zinc-50 border border-border">
                            <p className="font-bold mb-6">Kitchen Activity</p>
                            <div className="flex items-end gap-4 h-40">
                              {[40, 70, 45, 90, 65, 30, 85, 55, 95, 40].map((h, i) => (
                                <motion.div 
                                  key={i}
                                  initial={{ height: 0 }}
                                  animate={{ height: `${h}%` }}
                                  className="flex-1 bg-primary/20 rounded-t-lg relative group"
                                >
                                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg" />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {kitchenStep === "B" && (
                        <motion.div
                          key="kitchenStepB"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                          {[
                            { id: "#0042", table: "11", status: "NEW", items: "1x Truffle Pasta, 1x Water", color: "border-amber-500" },
                            { id: "#0041", table: "5", status: "PREPARING", items: "1x Masala Dosa", color: "border-primary" },
                            { id: "#0040", table: "8", status: "COMPLETED", items: "1x Caesar Salad", color: "border-success" },
                          ].map((order) => (
                            <div key={order.id} className={`p-6 rounded-2xl bg-white border-t-4 shadow-sm ${order.color}`}>
                              <div className="flex justify-between items-start mb-4">
                                <div>
                                  <p className="text-xs font-bold text-text-secondary">{order.id}</p>
                                  <h4 className="text-xl font-black">Table {order.table}</h4>
                                </div>
                                <span className="px-2 py-1 rounded-md bg-zinc-100 text-[10px] font-black">{order.status}</span>
                              </div>
                              <p className="text-sm text-text-secondary mb-6">{order.items}</p>
                              <button className="w-full py-2 rounded-xl bg-zinc-900 text-white text-xs font-bold">Update Status</button>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {kitchenStep === "C" && (
                        <motion.div
                          key="kitchenStepC"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-8"
                        >
                          <h4 className="font-bold mb-6">Table Status Grid</h4>
                          <div className="grid grid-cols-6 gap-4">
                            {[...Array(12)].map((_, i) => {
                              const status = i === 2 ? "pending" : i === 5 ? "occupied" : "vacant";
                              return (
                                <div key={i} className={`aspect-square rounded-2xl flex flex-col items-center justify-center border-2 ${
                                  status === "pending" ? "bg-red-50 border-red-200 text-red-600" :
                                  status === "occupied" ? "bg-primary/5 border-primary/20 text-primary" :
                                  "bg-zinc-50 border-zinc-100 text-zinc-400"
                                }`}>
                                  <span className="text-xs font-bold">T-{i + 1}</span>
                                  {status === "pending" && <span className="text-[10px] font-black">₹1,240</span>}
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4">
                  <button 
                    disabled={kitchenStep === "A"}
                    onClick={() => setKitchenStep(kitchenStep === "B" ? "A" : "B")}
                    className="p-4 rounded-full bg-white border border-border text-text-primary disabled:opacity-30 transition-all hover:bg-primary-light"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    disabled={kitchenStep === "C"}
                    onClick={() => setKitchenStep(kitchenStep === "A" ? "B" : "C")}
                    className="p-4 rounded-full bg-primary text-white disabled:opacity-30 transition-all hover:bg-primary-dark shadow-lg shadow-primary/20"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
