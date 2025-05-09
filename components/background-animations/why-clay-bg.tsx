"use client"

import { motion } from "framer-motion"

export default function WhyClayBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Clay texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-full bg-[url('/images/terracotta-texture.png')] bg-repeat opacity-30" />
      </div>

      {/* Clay particles */}
      {[...Array(20)].map((_, i) => {
        const size = 3 + Math.random() * 5

        return (
          <motion.div
            key={`clay-${i}`}
            className="absolute rounded-full bg-amber-600/20"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 50, 0],
              x: [0, Math.random() > 0.5 ? 30 : -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        )
      })}

      {/* Swirling pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="clay-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
            <path
              d="M0,0 C20,10 50,10 70,0 C90,-10 100,10 100,30 C100,50 90,70 70,80 C50,90 30,90 10,80 C-10,70 -10,50 0,30 Z"
              fill="none"
              stroke="#b45309"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#clay-pattern)" />
      </svg>
    </div>
  )
}
