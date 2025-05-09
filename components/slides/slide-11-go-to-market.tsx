"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Rocket } from "lucide-react"
import GoToMarketBackground from "@/components/background-animations/go-to-market-bg"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Slide11GoToMarket() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen flex items-center justify-center bg-slate-50 overflow-hidden relative"
      ref={ref}
    >
      <GoToMarketBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Ready to Launch</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our MVP is complete and we're ready to bring ChillGrid to the market.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8"
          >
            <div className="md:w-1/2 flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-amber-600/10 p-6 rounded-full mb-6"
              >
                <Rocket className="w-16 h-16 text-amber-600" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl font-bold text-slate-800 mb-4 text-center"
              >
                Visit Our Website to Order
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-slate-600 text-center mb-6"
              >
                Our minimum viable product is ready. Visit our website to place your order and be among the first to
                experience ChillGrid.
              </motion.p>

              <Link href="https://chillgridbaytech.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-2 px-6 py-6 text-lg">
                  <span>Order Now</span>
                  <ExternalLink size={18} />
                </Button>
              </Link>
            </div>

            <div className="md:w-1/2 flex flex-col items-center">
              <div className="relative mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHILLGRID_qrcode-Zfvc8uHjw96IwOsHOZiGIBgvJg03jD.png"
                  alt="ChillGrid Website QR Code"
                  width={220}
                  height={220}
                  className="mx-auto"
                />
                <motion.div
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-100/30 to-transparent rounded-md"
                />
              </div>

              <p className="text-sm text-slate-500 text-center">Scan this QR code to visit our website</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
