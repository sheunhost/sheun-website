import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon, TrendingUp, DollarSign, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function Calculator() {
  const [visitors, setVisitors] = useState<number>(10000);
  const [aov, setAov] = useState<number>(50);
  const [convRate, setConvRate] = useState<number>(1.5);
  const [margin, setMargin] = useState<number>(20);

  // Current calculations
  const currentOrders = Math.round(visitors * (convRate / 100));
  const currentRevenue = currentOrders * aov;
  const currentProfit = currentRevenue * (margin / 100);

  // Optimized calculations (Assuming Sheun Hub optimizes the store)
  const optimizedConvRate = convRate + 1.5; // E.g., boosting conversion rate by 1.5%
  const optimizedOrders = Math.round(visitors * (optimizedConvRate / 100));
  const optimizedRevenue = optimizedOrders * aov;
  const optimizedProfit = optimizedRevenue * (margin / 100);

  const profitIncrease = optimizedProfit - currentProfit;

  return (
    <PageWrapper
      title="E-commerce ROI Calculator | Sheun Hub"
      description="Calculate your current e-commerce store profit and see how much revenue you are leaving on the table without expert conversion rate optimization."
      keywords="Shopify Profit Calculator, E-commerce ROI, Conversion Rate Optimization Calculator, Revenue Estimator"
      canonical="/calculator"
      schema={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "E-commerce ROI Calculator",
        "applicationCategory": "BusinessApplication",
        "description": "Calculate your e-commerce store's potential revenue growth.",
        "url": "https://sheun.online/calculator",
        "provider": {
          "@type": "Organization",
          "name": "Sheun Hub"
        }
      }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm mb-6 font-medium"
            >
              <CalcIcon size={16} className="text-green" />
              <span>Store Profit Simulator</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              Discover Your True <br />
              <span className="italic font-serif font-light text-white/80">Revenue Potential</span>.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Adjust your current metrics below to see how much extra profit our Conversion Rate Optimization (CRO) and technical improvements could generate for your store.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-offwhite">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Sliders */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-12 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/5"
            >
              <h2 className="text-2xl font-bold text-navy mb-8">Your Current Metrics</h2>
              
              {/* Monthly Visitors */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-navy">Monthly Visitors</label>
                  <span className="text-xl font-bold text-navy">{visitors.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="500000" 
                  step="500"
                  value={visitors} 
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-navy/10 rounded-lg appearance-none cursor-pointer accent-green"
                />
              </div>

              {/* Average Order Value */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-navy">Avg. Order Value ($)</label>
                  <span className="text-xl font-bold text-navy">${aov}</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="1000" 
                  step="5"
                  value={aov} 
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full h-2 bg-navy/10 rounded-lg appearance-none cursor-pointer accent-green"
                />
              </div>

              {/* Conversion Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-navy">Conversion Rate (%)</label>
                  <span className="text-xl font-bold text-navy">{convRate.toFixed(2)}%</span>
                </div>
                <input 
                  type="range" 
                  min="0.1" 
                  max="10" 
                  step="0.1"
                  value={convRate} 
                  onChange={(e) => setConvRate(Number(e.target.value))}
                  className="w-full h-2 bg-navy/10 rounded-lg appearance-none cursor-pointer accent-green"
                />
              </div>

              {/* Profit Margin */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-navy">Net Profit Margin (%)</label>
                  <span className="text-xl font-bold text-navy">{margin}%</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="80" 
                  step="1"
                  value={margin} 
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="w-full h-2 bg-navy/10 rounded-lg appearance-none cursor-pointer accent-green"
                />
              </div>
            </motion.div>

            {/* Right: Results */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-navy rounded-[3rem] p-8 md:p-12 text-white h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-green/10 rounded-full blur-[80px]"></div>
                
                <div className="relative z-10 space-y-12">
                  
                  {/* Current Status */}
                  <div>
                    <h3 className="text-white/60 font-medium uppercase tracking-wider text-sm mb-4">Current Monthly Profit</h3>
                    <div className="text-4xl md:text-6xl font-bold font-sans text-white">
                      ${currentProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-white/40 mt-2 text-sm">
                      Based on ${currentRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })} revenue and {currentOrders.toLocaleString()} orders.
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-white/10"></div>

                  {/* Optimized Status */}
                  <div>
                    <h3 className="text-green font-medium uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
                      <TrendingUp size={16} /> Projected Optimized Profit
                    </h3>
                    <div className="text-5xl md:text-7xl font-bold font-sans text-green drop-shadow-[0_0_20px_rgba(0,255,157,0.2)]">
                      ${optimizedProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-white/60 mt-3 text-sm flex items-start sm:items-center gap-2 flex-col sm:flex-row">
                      <span className="bg-white/10 px-3 py-1 rounded-full text-white inline-block">
                        Opt. Revenue: ${optimizedRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </span>
                      <span className="bg-white/10 px-3 py-1 rounded-full text-white inline-block">
                        Opt. Orders: {optimizedOrders.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Action box */}
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mt-6 backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-green/0 group-hover:bg-green/5 transition-colors duration-500"></div>
                    <p className="text-white/80 text-lg mb-4 relative z-10">
                      By optimizing your UX and store speed, we could potentially increase your profit by <span className="text-white font-bold text-xl">${profitIncrease.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span> every month without spending an extra dime on ads.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 text-green font-bold hover:text-white transition-colors relative z-10"
                    >
                      Book a Free Audit <ArrowRight size={20} />
                    </Link>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
