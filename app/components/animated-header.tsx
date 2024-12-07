"use client"

import { motion } from "framer-motion"

export function AnimatedHeader() {
  return (
    <div className="bg-red w-full py-2 overflow-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="whitespace-nowrap"
      >
        <span className="text-white font-bold text-xl px-4">
          20% OFF EN PAQUETES DE PÁGINAS WEB • 20% OFF EN PAQUETES DE PÁGINAS WEB • 20% OFF EN PAQUETES DE PÁGINAS WEB •
        </span>
      </motion.div>
    </div>
  )
}
