"use client"

import { motion } from "framer-motion"
import { Building, GraduationCap, Landmark, Factory } from "lucide-react"

export default function TargetUsersBackground() {
  const icons = [Building, GraduationCap, Landmark, Factory]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating icons */}
      {[...Array(12)].map((_, i) => {
        const IconComponent = icons[i % icons.length]
        return (
          <motion.div
            key={`icon-${i}`}
            className="absolute text-slate-200/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() > 0.5 ? 20 : -20, 0],
              rotate: [0, Math.random() > 0.5 ? 10 : -10, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <IconComponent size={30 + Math.floor(Math.random() * 40)} />
          </motion.div>
        )
      })}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="connection-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
            <path d="M0,50 L100,50 M50,0 L50,100 M0,0 L100,100 M0,100 L100,0" stroke="#334155" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#connection-pattern)" />
      </svg>
    </div>
  )
}
